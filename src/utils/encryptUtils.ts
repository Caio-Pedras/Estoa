import bcrypt from "bcrypt";
import { unauthorizedError } from "./errorUtils";

export function bcryptString(string: string) {
  const SALT = 10;
  const hashedPassword = bcrypt.hashSync(string, SALT);
  return hashedPassword;
}

export async function bcryptCompare(string: string, hashedString: string) {
  const validatePassword = bcrypt.compareSync(string, hashedString);
  if (!validatePassword) {
    throw unauthorizedError("Invalid credentials");
  }
}
