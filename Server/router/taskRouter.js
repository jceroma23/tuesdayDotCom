import { Router } from "express";
import { addTaskBoard, getTaskBoard, updateTaskBoard, deleteTaskBoard } from "../controller/taskController.js";

const taskRouter = Router()

// Note that the taskboard is reference to ProjectId, So we need the ProjectId for CRUD functionality of taskBoards
taskRouter.post('/addTaskBoard/:projectId', addTaskBoard)
taskRouter.get('/getTaskBoard/:projectId', getTaskBoard)

// This will use TaskId
taskRouter.post('/updateTask/:taskBoardId', updateTaskBoard)

export { taskRouter }