import express from "express";

import {
  createEvent,
  getEvent,
  getEvents,
} from "../controllers/eventController";
import { checkRole, protect } from "../middlewares/authMiddleware";
import { Role } from "@prisma/client";

const router = express.Router();

router.post("/", protect, checkRole(Role.ADMIN), createEvent);
router.get("/", getEvents);
router.get("/:id", getEvent);

export default router;
