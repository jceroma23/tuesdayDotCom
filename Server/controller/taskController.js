import columnSchema from "../model/columnSchema.js";
import projectBoardSchema from "../model/projectBoardSchema.js";
import taskBoardSchema from "../model/taskBoardSchema.js";

// Add task
export const addTaskBoard = async(req, res) => {
    try {
        const projectBoardId = req.params.projectId
        const { taskBoardName, taskBoardDetails } = req.body
        // This will create the task Board
        const createTaskBoard = await taskBoardSchema.create({
            taskBoardName,
            taskBoardDetails
        })
        // This will add the Task board on the Project and Add Columns into the TaskBoard
        if (createTaskBoard) {
            const ColumnName = 'Task Name'; //This is the Defualt Name for Column Creation
            const addToProject = await projectBoardSchema.findByIdAndUpdate(projectBoardId, {
                $push: { taskBoards: [{taskBoard: createTaskBoard._id }] }
            })
            
            // This will Add Column to the column.
            const addColumn = await columnSchema.create({
                columnTitle: ColumnName
            })

            // This will add column to the TaskBoard
            const addColumnToTask = await taskBoardSchema.findByIdAndUpdate(createTaskBoard._id, {
                $push: { columns: [{ column: addColumn._id }] }
            })
            
            console.log('Successfully Insert TaskBoard with Columns into the Project')
        }

        res.status(200).json({ message: "Successful TaskBoard Creation", createTaskBoard });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// GetTask
export const getTaskBoard = async(req, res) => {
    try {
        const projectId = req.params.projectId
        const getProject = await projectBoardSchema.findById(projectId)
        .populate({
            path: 'taskBoards.taskBoard',
            populate: {
              path: 'column',
              model: 'column'
            }
          });

        res.status(200).json({ message: "Getting Task Boards", getProject });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" }); 
    }
}

// UpdateTask
export const updateTaskBoard = async(req, res) => {
    try {
        const taskBoardId = req.params.taskId
        const  {
            taskBoardName,
            taskBoardDetails,
           } = req.body

        const updateTask = await taskBoardSchema.findById(taskBoardId, {
            taskBoardName,
            taskBoardDetails,
        })

        if (updateTask) {
            res.status(201).json({ message: "Update Successful", updateTask })
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Delete TaskBoard 
export const deleteTaskBoard = async(req, res) => {
    try {
        const taskBoardId = req.params.taskId
        const deleteTask = await taskBoardSchema.findByIdAndDelete(taskBoardId)
        if (!deleteTask){
            return res.status(404).send(`Book Cant be deleted`);
        } 
        //res.redirect('/gallery');
        res.status(201).send('Deleted Successfully');
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}