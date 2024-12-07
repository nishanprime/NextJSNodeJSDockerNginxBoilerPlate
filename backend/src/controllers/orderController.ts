import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import { prisma } from "../lib/prisma"; // Adjust path as per your setup

export const getOrderStatus = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const id = req.params.ID; // Order ID

      // Check if the id is provided
      if (!id) {
        res.status(400).json({ error: "Order ID is required" });
        return;
      }

      // Fetch the order by ID
      const order = await prisma.order.findUnique({
        where: { id },
        include: {
          event: true, // Include event details (optional)
          tickets: true, // Include ticket details (optional)
        },
      });

      if (!order) {
        res.status(404).json({ error: "Order not found" });
        return;
      }

      // Send order status
      res.status(200).json({
        orderId: order.id,
        eventName: order.event.name,
        status: order.status,
        tickets: order.tickets.map((ticket) => ({
          ticketId: ticket.id,
          status: ticket.status,
        })),
        createdAt: order.createdAt,
        updatedAt: order.updatedAt,
      });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error fetching order status", details: error.message });
    }
  },
);
