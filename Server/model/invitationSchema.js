import mongoose from "mongoose";
import projectBoardSchema from "./projectBoardSchema.js";
import userSchemaModel from "./UserSchema.js";

const Schema = mongoose.Schema;

// using this method I can search for every recieved and sent by the said User

const invitationProjectBoardSchemaModel = new mongoose.Schema({
        sender: {
            type: Schema.Types.ObjectId,
            ref: 'userSchemaModel'
        },
        receiver: {
            type: Schema.Types.ObjectId,
            ref: 'userSchemaModel'
        },
        invitationStatus: {
            type: String,
            default: 'pending',
            enum: ['pending', 'accepted', 'rejected']
        },
        access: {
            type: String,
            default: 'read',         // Default access level for the employee
            enum: ['read', 'write', 'admin'], // Define possible access levels
        },
        projectBoard: {
            type: Schema.Types.ObjectId,
            ref: 'projectBoard'
        }
});

const invitationProjectBoard = mongoose.model('invitationProject', invitationProjectBoardSchemaModel);
export default invitationProjectBoard;