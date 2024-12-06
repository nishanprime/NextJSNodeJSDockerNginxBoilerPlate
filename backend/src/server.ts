import express, { Request } from "express";
import connectDatabase from "./bootstrap/database";
import initialMiddlewares from "./middlewares";
import eventRoutes from "./routes/eventRoutes";
import authRoutes from "./routes/authRoutes";
import bookRoutes from "./routes/bookingRoute";

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
  app.post(
    "/api/webhook/<stripe>",

    express.json({
      verify: (req: Request, res, buf) => {
        req.rawBody = buf.toString();
      },
    }),
    (req, res) => {
      // this function would get req.body in raw format
      // this is usally essential for webhooks that require raw body to validate the request
      // for example stripe webhooks
    },
  );
  app.use(express.json({ limit: "10mb" }));
  await connectDatabase();

  // app.use("/api", baseRouter(response));
  app.use("/api/auth", authRoutes);
  app.use("/api/events", eventRoutes);
  app.use("/api/events", bookRoutes);

  return app;
};

export default getApp;
