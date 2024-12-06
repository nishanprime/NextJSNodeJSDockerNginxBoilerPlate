import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

import asyncHandler from "express-async-handler";

// Create a new event
export const createEvent = asyncHandler(async (req: Request, res: Response) => {
  const { name, description, date, venue, price, totalTickets } = req.body;

  const event = await prisma.event.create({
    data: {
      name,
      description,
      date: new Date(date),
      venue,
      price,
      totalTickets,
      tickets: {
        create: Array(totalTickets).fill({
          status: "AVAILABLE",
        }),
      },
    },
  });

  res.status(201).json(event);
});

// Get all events
export const getEvents = asyncHandler(async (req: Request, res: Response) => {
  const events = await prisma.event.findMany({
    include: {
      _count: {
        select: {
          tickets: {
            where: {
              status: "AVAILABLE",
            },
          },
        },
      },
    },
  });

  res.json(events);
});

// Get a single event
export const getEvent = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  const event = await prisma.event.findUnique({
    where: { id },
    include: {
      _count: {
        select: {
          tickets: {
            where: {
              status: "AVAILABLE",
            },
          },
        },
      },
    },
  });

  if (!event) {
    res.status(404).json({ error: "Event not found" });
    return;
  }

  res.json(event);
});
