import { addProjectBoard } from "../controller/ProjectBoardController.js";
import { Router } from "express";

const projectBoardRouter = Router()

projectBoardRouter.post('/:userId/addProject', addProjectBoard);

export { projectBoardRouter };