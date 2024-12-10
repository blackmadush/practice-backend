import jwt from "jsonwebtoken";
import { getUserByEmail } from "../repositories/userRepository";

export const authenticateUser = (
  email: string,
  password: string
): string | null => {
  const user = getUserByEmail(email);
  if (user && user.password === password) {
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "1h",
      }
    );
    return token;
  }
  return null;
};
