import columnSchema from "../model/columnSchema.js";
import taskBoardSchema from "../model/taskBoardSchema.js";

// In this controller I dont need to get data for column., Is already populating at TaskController

// Add COlumn to a task Board
export const addColumnBoard = async(req, res) => {
    try {
        const taskBoardId = req.params.taskBoardId

        // This will Create a Column
        const ColumnName = 'Task Name';
        const addColumn = await columnSchema.create({
            columnTitle: ColumnName
        })

        // This will add the column Created to the TaskBoard
        const addColumnToTask = await taskBoardSchema.findByIdAndUpdate(taskBoardId, {
            $push: { columns: [{ column: addColumn._id }] }
        }).populate('columns.column')

        console.log(addColumnToTask)
        res.status(200).json({ message: 'Successfully Added a column on our TaskBoard', addColumnToTask })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Edit a Column
export const editColumnBoard = async(req, res) => {
    try { 
        const columnId = req.params.columnId
        const updatedData = req.body

        const editColumn = await columnSchema.findByIdAndUpdate(columnId, updatedData, {
            new: true
        })

        console.log(editColumn)
        res.status(200).json({ message: 'Successfully Update Column', editColumn })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// delete Column
export const deleteColumnBoard = async(req, res) => {
    try {
        const columnId = req.params.columnId

        const deleteColumnBoard = await columnSchema.findByIdAndDelete(columnId);
        
        console.log('Successfully Deleted Column')
        res.status(200).json({ message: 'Successfully Deleted Column' })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}