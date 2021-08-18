const Mongoose = require( "mongoose");
const demoScedualSchema = Mongoose.Schema({
    id: {
        type: String,
        required: true,
        default: Date.now,
    },
    name:{
        type: String,
        required: true,

    },
    email:{
        type: String,
        required: true
    },
    number:{
        type: String,
        required: true
    },
    course:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    }

},
{ timestamps: true }
);

const demoScedual = Mongoose.model("DemoScedualClass", demoScedualSchema);
module.exports = demoScedual;
