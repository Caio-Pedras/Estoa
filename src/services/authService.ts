import jwt from "jsonwebtoken";
import { User } from "@prisma/client";
import {
  conflictError,
  notFoundError,
  unauthorizedError,
} from "../utils/errorUtils";
import { bcryptCompare, bcryptString } from "../utils/encryptUtils";
import {
  deleteUserById,
  findUserByEmail,
  findUserById,
  insertUser,
  updateUserById,
} from "../repositories/authRepository";

export type CreateUserData = Omit<User, "id" | "created_at" | "update_at">;
export type LoginUserData = Omit<
  User,
  "id" | "type" | "phonenumber" | "created_at" | "update_at" | "name"
>;
export async function createUser(user: CreateUserData) {
  const validateUser = await findUserByEmail(user.email);
  if (validateUser) {
    throw conflictError("email not available");
  }
  const hashedPassword = bcryptString(user.password);
  await insertUser({ ...user, password: hashedPassword });
}

export async function login(user: LoginUserData) {
  const validateUser = await findUserByEmail(user.email);
  if (!validateUser) {
    throw unauthorizedError("email not registered");
  }
  await bcryptCompare(user.password, validateUser.password);
  const token = jwt.sign(
    { userId: validateUser.id },
    process.env.JWT_SECRET as string
  );
  return token;
}

export async function getUser(id: number, userId: number) {
  const loggedUser = await findUserById(userId);
  if (!loggedUser) throw notFoundError("you must be logged");

  if (userId === id || loggedUser.type) {
    const user: Partial<User> | null = await findUserById(id);
    if (!user) throw notFoundError("User not found");
    delete user.password;
    return user;
  } else {
    throw unauthorizedError(
      "You do not have permission to access this information"
    );
  }
}
export async function updateUser(
  id: number,
  userId: number,
  userData: CreateUserData
) {
  const user = await findUserById(userId);
  if (!user) throw notFoundError("User not found");

  if (userData.password) {
    const hashedPassword = bcryptString(userData.password);
    userData = { ...userData, password: hashedPassword };
  }

  if (user.id === id || user.type) {
    const updatedUser: Partial<User> = await updateUserById(id, userData);
    delete updatedUser.password;
    return updatedUser;
  } else {
    throw unauthorizedError("You are not allowed to make this change.");
  }
}

export async function deleteUser(id: number, userId: number) {
  const user = await findUserById(userId);
  if (!user) throw notFoundError("User not found");

  if (user.id === id || user.type) {
    await deleteUserById(id);
  } else {
    throw unauthorizedError("You are not allowed to make this change.");
  }
}
