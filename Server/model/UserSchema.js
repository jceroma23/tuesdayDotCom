import mongoose from "mongoose";

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
        min: 3,
        max: 50,
        // unique: true, Need to change this once Deployed
    },
    userPassword: {
        type: String,
        required: true,
        min: 8,
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
        required: true,
        default: 'User',
    },
    sesionHistory: [{
        device: {
            type: String,
        },
        location: {
            type: String,
        },
        lastUsage: {
            type: Date,
        },
    }], //This is an array for session history 
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
})

const userSchemaModel = mongoose.model('userSchemaModel', userSchema);
export default userSchemaModel;