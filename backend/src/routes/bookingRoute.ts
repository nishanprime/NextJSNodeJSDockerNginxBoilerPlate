import express from "express";

import { bookTickets, stripeWebhook } from "../controllers/bookingController";

const router = express.Router();

router.post("/:id/book", bookTickets);
router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  stripeWebhook,
);

export default router;
