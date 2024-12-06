import { Request, Response } from "express";
import bcrypt from "bcrypt";
import expressAsyncHandler from "express-async-handler";
import { prisma } from "../lib/prisma";
import { generateToken } from "../utils/generateToken";

export const registerUser = expressAsyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { name, email, password } = req.body;

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      res.status(400).json({ error: "User already exists" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const token = generateToken({ id: user.id, email: user.email }, res);

    res.status(201).json({
      token,
      user: { id: user.id, name: user.name, email: user.email },
    });
  },
);

export const loginUser = expressAsyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      res.status(400).json({ error: "Invalid email or password" });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(400).json({ error: "Invalid email or password" });
      return;
    }

    const token = generateToken({ id: user.id, email: user.email }, res);

    res.status(200).json({
      token,
      user: { id: user.id, name: user.name, email: user.email },
    });
  },
);
