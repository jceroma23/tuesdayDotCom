import { signUpController, logInController, editUserCredentials, deleteUserById} from "../controller/UserController.js";
import { Router } from "express";

const userRouter = Router()


userRouter.post("/register", signUpController);
userRouter.post("/login", logInController);
userRouter.put("/user/:userId", editUserCredentials);
userRouter.delete("/user/delete/:userId", deleteUserById)

export { userRouter };