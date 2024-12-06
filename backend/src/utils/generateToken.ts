import { Response } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION = "1d";

export const generateToken = (payload: object, res: Response): string => {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in the environment variables");
  }

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
  res.cookie("auth-token", token, {
    httpOnly: true,
  });
  return token;
};
