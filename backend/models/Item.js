const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    title : {
        type : String,
        unique: true,
        required: true
    },

    description : {
        type : String,
        required: true,
    },

    user : {
        type : mongoose.Schema.Types.ObjectId,  //mongos equivalent for FK
        ref: 'User',    // tell monogoose which model refference
        required :true
    }

}, { timestamps : true });

module.exports = mongoose.model('Item', itemSchema);