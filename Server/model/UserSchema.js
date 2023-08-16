import mongoose from "mongoose";
const Schema = mongoose.Schema;
import invitationProjectBoard from "./invitationSchema.js";
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true,
        min: 5,
        max: 20,
        unique: true,
    },
    userEmail: {
        type: String,
        require: true,
        min: 5,
        max: 50,
        // unique: true, Need to change this once Deployed
    },
    userPassword: {
        type: String,
        required: true,
        min: 5,
        max: 50,
    },
    fullName: {
        type: String,
        required: false,
        min: 8,
        max: 50,
    },
    role: {
        type: String,
        required: false,
        default:'Freelancer',
        enum: ['Freelancer', 'Employee', 'Owner']
    },
    projects: [{
        ownedProjectsBoard: {
            type: Schema.Types.ObjectId,
            ref: 'projectBoard'
        },
        acceptedProjectsBoard: {
            type: Schema.Types.ObjectId,
            ref: 'projectBoard'
        }
    }],
    
}, {timestamps: true})

const userSchemaModel = mongoose.model('userSchemaModel', userSchema);
export default userSchemaModel;