import mongoose from "mongoose";
const Schema = mongoose.Schema;

const subItemBoardSchemaModel = new mongoose.Schema({
    column: { 
        type: Schema.Types.ObjectId,
        required: true
    }
});

const subItemModel = mongoose.model('subItemModel', subItemBoardSchemaModel)
export default subItemModel;