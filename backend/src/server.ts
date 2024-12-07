import express, { Request } from "express";
import connectDatabase from "./bootstrap/database";
import initialMiddlewares from "./middlewares";
import eventRoutes from "./routes/eventRoutes";
import authRoutes from "./routes/authRoutes";
import bookRoutes from "./routes/bookingRoute";
import orderRoutes from "./routes/orderRoute";

import baseRouter from "./routes";

declare global {
  namespace Express {
    interface Request {
      rawBody?: string;
    }
  }
}

const getApp = async () => {
  const app = express();
  await initialMiddlewares(app);

  app.use(express.json({ limit: "10mb" }));
  await connectDatabase();

  // app.use("/api", baseRouter(response));
  app.use("/api/auth", authRoutes);
  app.use("/api/events", eventRoutes);
  app.use("/api/events", bookRoutes);
  app.use("/api/orders", orderRoutes);

  return app;
};

export default getApp;
