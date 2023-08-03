import { signUpController, logInController, editUserCredentials, deleteUserById, getUserProject } from "../controller/UserController.js";
import { Router } from "express";

const userRouter = Router()


userRouter.post("/register", signUpController);
userRouter.post("/login", logInController);
userRouter.put("/user/:userId", editUserCredentials);
userRouter.delete("/user/delete/:userId", deleteUserById)

userRouter.get('/getUserDetails/:userId', getUserProject)

export { userRouter };