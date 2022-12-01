import { Router } from "express";
import {
  deleteUserById,
  getUserById,
  postLogin,
  postNewUser,
  updateUserInfo,
} from "../controllers/authController";
import { schemaValidator } from "../middlewares/schemaValidator";
import { tokenValidator } from "../middlewares/tokenValidator";
import authSchema from "../schemas/authSchema";
import loginSchema from "../schemas/loginSchema";
import updateAuthSchema from "../schemas/updateAuthSchema";

const authRouter = Router();

authRouter.post("/users", schemaValidator(authSchema), postNewUser);
authRouter.post("/users/login", schemaValidator(loginSchema), postLogin);
authRouter.get("/users/:id", getUserById);
authRouter.put(
  "/users/:id",
  schemaValidator(updateAuthSchema),
  tokenValidator,
  updateUserInfo
);
authRouter.delete("/users/:id", tokenValidator, deleteUserById);

export default authRouter;
