import express, { Express } from "express";
import cors from "cors";

export const middlewaresConfig = (app: Express) => {
  app.use(express.json({ limit: "10mb" }));
  app.use(express.urlencoded({ extended: true, limit: "10mb" }));

  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
};
