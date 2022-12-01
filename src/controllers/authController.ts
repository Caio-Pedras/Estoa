import { Request, Response } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  login,
  updateUser,
} from "../services/authService";

export async function postNewUser(req: Request, res: Response) {
  const user = req.body;
  await createUser(user);
  return res.sendStatus(201);
}

export async function postLogin(req: Request, res: Response) {
  const user = req.body;
  const token = await login(user);
  return res.status(200).send({ token });
}

export async function getUserById(req: Request, res: Response) {
  const { userId } = res.locals.tokenInfo;
  const { id } = req.params;
  const user = await getUser(Number(id), Number(userId));
  return res.status(200).send(user);
}

export async function updateUserInfo(req: Request, res: Response) {
  const { userId } = res.locals.tokenInfo;
  const { id } = req.params;
  console.log(id, "idddd");
  const newUserInfo = req.body;
  const user = await updateUser(Number(id), Number(userId), newUserInfo);

  return res.status(200).send(user);
}
export async function deleteUserById(req: Request, res: Response) {
  const { userId } = res.locals.tokenInfo;
  const { id } = req.params;
  await deleteUser(Number(id), Number(userId));
  return res.status(200).send("User successfully deleted");
}
