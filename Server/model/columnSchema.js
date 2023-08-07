import mongoose, { now } from "mongoose";
const Schema = mongoose.Schema;

const getThreeDaysFromNow = () => {
    const now = new Date();
    now.setDate(now.getDate() + 3); // Add three days to the current date
    return now;
  }

const columnSchemaModel = new mongoose.Schema({
    columnTitle: {
        type: String,
        required: true,
    },
    people:[{
        type: Schema.Types.ObjectId,
        ref: 'userSchemaModel',
        required: false,
    }],
    taskStatus:{
        type: String,
        required: false
    },
    taskDueDate: {
        type: Date,
        required: true,
        default: getThreeDaysFromNow
    },
    taskTimeLine: {
        startDate: {
            type: String,
            required: false,
            default: now
        },
        endDate: {
            type: String,
            required: false,
            default: getThreeDaysFromNow
        }
    },
    taskPriority: {
        type: String,
        required: false,
        default: 'Low',
        enum: ['Low', 'Medium', 'High', 'Critical']
    },
    taskBudget: {
        type: Number,
        required: true,
        default: 100
    },
    messageBoard: {
        type: Schema.Types.ObjectId,        //Array of task Sub Item with Columns
        ref: 'messageBoard'
    },
})

columnSchemaModel.virtual('formattedTaskBudget').get(function () {
    return this.taskBudget.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
});

const columnSchema = mongoose.model('column', columnSchemaModel);
export default columnSchema