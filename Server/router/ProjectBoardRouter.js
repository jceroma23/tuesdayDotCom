import { addProjectBoard, getUserProject } from "../controller/ProjectBoardController.js";
import { Router } from "express";

const projectBoardRouter = Router()

projectBoardRouter.post('/addProject/:userId', addProjectBoard);
projectBoardRouter.get('/getUserProject/:userId', getUserProject);


export { projectBoardRouter };