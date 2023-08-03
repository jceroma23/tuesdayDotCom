import { addProjectBoard } from "../controller/ProjectBoardController.js";
import { Router } from "express";

const projectBoardRouter = Router()

projectBoardRouter.post('/addProject/:userId', addProjectBoard);

export { projectBoardRouter };