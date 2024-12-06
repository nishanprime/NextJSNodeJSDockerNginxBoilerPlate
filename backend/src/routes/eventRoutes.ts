import express from "express";

import {
  createEvent,
  getEvent,
  getEvents,
} from "../controllers/eventController";

const router = express.Router();

router.post("/", createEvent);
router.get("/", getEvents);
router.get("/:id", getEvent);
// router.post("/:id/book", bookTickets);

export default router;
