const mongoose = require("mongoose");
const { Schema } = mongoose;

const Questions = new Schema(
    {

        question: String,

        answer: [{
            type: String
        }],
       correct:Number
    
    }



);

module.exports = mongoose.model("dataquiz", Questions);