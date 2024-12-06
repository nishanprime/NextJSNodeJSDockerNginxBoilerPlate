import { Request, Response } from "express";
import { TicketStatus, OrderStatus } from "@prisma/client";
import expressAsyncHandler from "express-async-handler";
import redis from "../lib/redis";
import { prisma } from "../lib/prisma";
import stripe from "../lib/stripe";

const LOCK_TIMEOUT = 300; // 5 minutes

export const bookTickets = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { userId, ticketCount } = req.body;

      const event = await prisma.event.findUnique({ where: { id } });
      if (!event) {
        res.status(404).json({ error: "Event not found" });
        return;
      }

      const lockKey = `event:${id}:lock`;
      const isLocked = await redis.get(lockKey);

      if (isLocked) {
        res.status(423).json({ error: "Tickets are locked" });
        return;
      }

      await redis.set(lockKey, userId, "EX", LOCK_TIMEOUT);

      const availableTickets = await prisma.ticket.findMany({
        where: { eventId: id, status: TicketStatus.AVAILABLE },
        take: ticketCount,
      });

      if (availableTickets.length < ticketCount) {
        await redis.del(lockKey);
        res.status(400).json({ error: "Not enough tickets available" });
        return;
      }

      // Create the order
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

      await prisma.ticket.updateMany({
        where: { id: { in: availableTickets.map((t) => t.id) } },
        data: { status: TicketStatus.LOCKED },
      });

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
      });

      await prisma.order.update({
        where: { id: order.id },
        data: { stripeSessionId: session.id },
      });

      res.status(200).json({ sessionId: session.id });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error booking tickets", details: error.message });
    }
  },
);
