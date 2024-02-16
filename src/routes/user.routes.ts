import { Router } from "express";
import {
  getUserController,
  updateUserController,
  createUserController,
  deleteUserController,
} from "../controllers/user.controller";

const userRouter = Router();

// Define the route paths

userRouter.get("/:userId", getUserController);
userRouter.post("/", createUserController);
userRouter.delete("/:userId", deleteUserController);
userRouter.put("/", updateUserController);

export default userRouter;
