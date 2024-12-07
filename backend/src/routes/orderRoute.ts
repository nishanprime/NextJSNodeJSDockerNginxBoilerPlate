import express from "express";

import { protect } from "../middlewares/authMiddleware";
import { getOrderStatus } from "../controllers/orderController";

const router = express.Router();

router.get("/:ID", protect, getOrderStatus);

export default router;
