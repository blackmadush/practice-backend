import { NextFunction, Response, Request } from "express";
import { authenticateUser } from "../services/authService";

export const login = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const token = authenticateUser(email, password);

  if (token) {
    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
