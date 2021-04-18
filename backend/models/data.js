const mongoose = require("mongoose");
const { Schema } = mongoose;

const Dataschema = new Schema(
    {
         
        name: [{
            type: String
        }]

    }



);

module.exports = mongoose.model("reactdata", Dataschema);