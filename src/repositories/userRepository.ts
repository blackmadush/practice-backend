import { User } from "../types/interfaces/userInterface";

export const users: User[] = [
  { id: 1, email: "user1@example.com", password: "password1" },
  { id: 2, email: "user2@example.com", password: "password2" },
];

export const getUserByEmail = (email: string): User | undefined => {
  return users.find((user) => user.email === email);
};
