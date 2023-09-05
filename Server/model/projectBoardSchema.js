import mongoose from "mongoose";
import taskBoardSchema from "./taskBoardSchema.js";
import userSchemaModel from "./UserSchema.js";

const Schema = mongoose.Schema;

const projectBoardSchemaModel = new mongoose.Schema({
    boardName: {
        type: String,
        require: true,
        min: 5,
        max: 20,
    },
    description: {
        type: String,
        require: true,
        min: 10,
        max: 100,
    },
    createdBy: {                // Owner of the Project Board
        type: Schema.Types.ObjectId,
        ref: 'userSchemaModel',
        required: false
    },
    members: [{
        userId: {
          type: Schema.Types.ObjectId,
          ref: 'userSchemaModel',  // Reference to the user model for each permission entry
          required: false,
        },
        typeOfUser: {
          type: String,
          default: 'employee',
          enum: ['employee', 'manager', 'owner'],         // Type of Employee
        },
        access: {
          type: String,
          default: 'read',         // Default access level for the employee
          enum: ['read', 'write', 'admin'], // Define possible access levels
        },
    }],
    taskBoards: [{
        taskBoard: {
        type: Schema.Types.ObjectId,        // Reference to the TaskBoard ObjectId
        required: false,
        ref: 'taskBoard'
     }
    }]
}, {timestamps: true})



const projectBoardSchema = mongoose.model('projectBoard', projectBoardSchemaModel)
export default projectBoardSchema;