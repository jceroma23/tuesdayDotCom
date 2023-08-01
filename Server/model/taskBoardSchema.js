import mongoose from "mongoose";
const Schema = mongoose.Schema;

const taskBoardSchemaModel = new mongoose.Schema({
    taskBoardName: {
        type: String,
        required: true,
        default: 'Task Name'
    },
    taskBoardSubItem : [{
        taskSub: {
            type: Schema.Types.ObjectId,        //Array of task Sub Item with Columns
            ref: 'taskSubItem'
        }
    }],
    column: {
        type: Schema.Types.ObjectId,
        ref: 'columnSchemaModel',
    },
    messageBoard: {
        type: Schema.Types.ObjectId,        //Array of task Sub Item with Columns
        ref: 'messageBoard'
    },

});

const taskBoardSchema = mongoose.model('taskBoard', taskBoardSchemaModel)
export default taskBoardSchema;