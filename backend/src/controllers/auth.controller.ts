import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  try {
    console.log("REQ BODY:", req.body);

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    return res.status(200).json({ message: "User registered (demo)" });

  } catch (error) {
    console.log("ERROR:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
