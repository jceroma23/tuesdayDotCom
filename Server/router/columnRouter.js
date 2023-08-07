import { addColumnBoard, editColumnBoard, deleteColumnBoard } from "../controller/columnController.js";
import { Router } from 'express'

const columnRouter = Router()

columnRouter.route('/addColumn/:taskBoardId', addColumnBoard)
columnRouter.route('/editColumn/:columnId', editColumnBoard)
columnRouter.route('/deleteColumn/:columnId', deleteColumnBoard)

export { columnRouter }