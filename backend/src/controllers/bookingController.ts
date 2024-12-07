import { Request, Response } from "express";
import { TicketStatus, OrderStatus } from "@prisma/client";
import expressAsyncHandler from "express-async-handler";
import redis from "../lib/redis";
import { prisma } from "../lib/prisma";
import stripe from "../lib/stripe";
import Stripe from "stripe";

const LOCK_TIMEOUT = 300; // 5 minutes
const webhookSecret = process.env.STRIPE_WEB_HOOK_SECRET;

export const bookTickets = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params; // Event ID
      const { userId, ticketCount } = req.body;

      // Fetch event details
      const event = await prisma.event.findUnique({ where: { id } });
      if (!event) {
        res.status(404).json({ error: "Event not found" });
        return;
      }

      // Check for ticket locks
      const lockKey = `event:${id}:lock`;
      const isLocked = await redis.get(lockKey);
      if (isLocked) {
        res.status(423).json({ error: "Tickets are locked" });
        return;
      }

      // Lock the tickets
      await redis.set(lockKey, userId, "EX", LOCK_TIMEOUT);

      // Fetch available tickets
      const availableTickets = await prisma.ticket.findMany({
        where: { eventId: id, status: TicketStatus.AVAILABLE },
        take: ticketCount,
      });

      if (availableTickets.length < ticketCount) {
        await redis.del(lockKey); // Release lock
        res.status(400).json({ error: "Not enough tickets available" });
        return;
      }

      // Create a new order
      const order = await prisma.order.create({
        data: {
          userId,
          eventId: id,
          status: OrderStatus.PENDING,
          tickets: {
            connect: availableTickets.map((ticket) => ({ id: ticket.id })),
          },
        },
      });

      // Lock tickets
      await prisma.ticket.updateMany({
        where: { id: { in: availableTickets.map((t) => t.id) } },
        data: { status: TicketStatus.LOCKED },
      });

      // Create Stripe Checkout session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: { name: event.name },
              unit_amount: Math.round(event.price * 100),
            },
            quantity: ticketCount,
          },
        ],
        success_url: `${process.env.FRONTEND_URL}/success?orderId=${order.id}`,
        cancel_url: `${process.env.FRONTEND_URL}/cancel?orderId=${order.id}`,
        metadata: { orderId: order.id, userId },
      });

      // Save Stripe session ID
      await prisma.order.update({
        where: { id: order.id },
        data: { stripeSessionId: session.id },
      });

      res.status(200).json({ sessionId: session.url });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error booking tickets", details: error.message });
    }
  },
);

export const stripeWebhook = async (
  req: Request,
  res: Response,
): Promise<void> => {
  let event: Stripe.Event;

  // Validate webhook signature
  let data;
  let eventType;
  let webhookSecret;
  // webhookSecret = process.env.STRIPE_WEB_HOOK_SECRET;

  if (webhookSecret) {
    let event;
    let signature = req.headers["stripe-signature"];

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        signature,
        webhookSecret,
      );
    } catch (err) {
      console.log(`⚠️ Webhook signature verification failed:  ${err}`);
    }
    // Extract the object from the event.
    data = event.data.object;
    eventType = event.type;
  } else {
    data = req.body.data.object;
    eventType = req.body.type;
  }

  if (eventType === "checkout.session.completed") {
    const orderId = data.metadata.orderId;

    // Confirm order
    await prisma.order.update({
      where: { id: orderId },
      data: { status: OrderStatus.CONFIRMED },
    });

    // Unlock tickets
    await prisma.ticket.updateMany({
      where: {
        orderId: orderId,
      },
      data: { status: TicketStatus.SOLD },
    });

    console.log(`Order ${orderId} confirmed and tickets marked as sold.`);
  } else if (eventType === "payment_intent.payment_failed") {
    const orderId = data.metadata.orderId;

    // Mark order as failed
    await prisma.order.update({
      where: { id: orderId },
      data: { status: OrderStatus.FAILED },
    });

    // Unlock tickets
    await prisma.ticket.updateMany({
      where: {
        orderId: orderId,
      },
      data: { status: TicketStatus.AVAILABLE },
    });

    console.log(`Order ${orderId} failed and tickets unlocked.`);
  }

  res.status(200).send("Webhook handled successfully");
};
