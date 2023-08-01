import mongoose from "mongoose";
const Schema = mongoose.Schema;

const columnSchemaModel = new mongoose.Schema({
    columnTitle: {
        type: String,
        required: true
    },
    people:[{
        type: Schema.Types.ObjectId,
        ref: 'userSchemaModel',
        required: false,
    }],
    taskStatus: {
        type: String,
        required: true
    },
    taskDueDate: {
        type: Date,
        required: true
    },
    taskTimeLine: [{
        startDate: {
            type: String,
            required: false
        },
        endDate: {
            type: String,
            required: false
        }
    }],
    taskPriority: {
        type: String,
        required: true
    },
    taskBudget: {
        type: Number,
        required: true
    },
    taskTimeline: {
        type: String,
        required: true
    },
    columnTitle: {
        type: String,
        required: true
    },
})

const columnSchema = mongoose.model('column', columnSchemaModel);
export default columnSchema