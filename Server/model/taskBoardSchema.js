import mongoose from "mongoose";
const Schema = mongoose.Schema;

const taskBoardSchemaModel = new mongoose.Schema({
    taskBoardName: {
        type: String,
        required: true,
        default: 'Task Name'
    },
    taskBoardDetails: {
        type: String,
        required: false,
    },

    // From Here it will be Ref Fields
    taskBoardSubItem: [{
        taskSub: {
            type: Schema.Types.ObjectId,        //Array of task Sub Item with Columns
            ref: 'taskSubItem'
        }
    }],
    columns: [{
        column: {
            type: Schema.Types.ObjectId,
            ref: 'columnSchemaModel',
        }
    }],
});

const taskBoardSchema = mongoose.model('taskBoard', taskBoardSchemaModel)
export default taskBoardSchema;