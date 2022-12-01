import { prisma } from "./../config/database";
import { CreateUserData } from "../services/authService";

export async function findUserByEmail(email: string) {
  return prisma.user.findUnique({ where: { email } });
}
export async function insertUser(user: CreateUserData) {
  return prisma.user.create({ data: user });
}

export async function findUserById(id: number) {
  return prisma.user.findUnique({ where: { id } });
}
export async function updateUserById(id: number, userData: CreateUserData) {
  return prisma.user.update({ where: { id }, data: { ...userData } });
}
export async function deleteUserById(id: number) {
  return prisma.user.delete({ where: { id } });
}
