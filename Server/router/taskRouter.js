import { Router } from "express";
import { addTaskBoard } from "../controller/taskController.js";

const taskRouter = Router()

taskRouter.post('/addTaskBoard/:projectId', addTaskBoard)

export { taskRouter }