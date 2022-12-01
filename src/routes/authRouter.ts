import { Router } from "express";

const authRouter = Router();

authRouter.post("/users");
authRouter.get("/users/:id");

export default authRouter;
