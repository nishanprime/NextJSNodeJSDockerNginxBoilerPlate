import express from "express";

import { bookTickets } from "../controllers/bookingController";

const router = express.Router();

router.post("/:id/book", bookTickets);

export default router;
