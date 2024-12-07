import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma";
import { Role } from "@prisma/client";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

declare global {
  namespace Express {
    interface Request {
      user?: { id: string; email: string; role: Role };
    }
  }
}

export const checkRole = (role: Role) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const userId = req.user?.id;

    if (!userId) {
      res
        .status(403)
        .json({ msg: "Unauthorized to perform the following action" });
      return;
    }

    const user = await prisma.user.findFirst({ where: { id: userId } });
    if (!user || user.role !== role) {
      res
        .status(403)
        .json({ msg: "Unauthorized to perform the following action" });
    }
    next();
  };
};

export const protect = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const token = req.cookies?.["auth-token"];

  if (!token) {
    res.status(401).json({ error: "Not authorized, no token" });
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as {
      id: string;
      email: string;
      role: Role;
    };
    req.user = { ...decoded, role: decoded.role as Role };
    next();
  } catch (error) {
    res.status(401).json({ error: "Not authorized, token invalid" });
  }
};
