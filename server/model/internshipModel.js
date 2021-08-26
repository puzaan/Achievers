const mongoose = require("mongoose");
const internshipSchema = mongoose.Schema({
    id: {
        type:String,
        required: true,
        default: Date.now,
    },
    name:{
        type: String,
        required: true,
        
    },
    email:{
        type: String,
        required:true
    },
    number: {
        type: String,
        required: true,

    },
    git:{
        type: String,
        required: true
    },
    cv:[Object]

}, {timestamps: true})

const internship = mongoose.model("Internship", internshipSchema);
module.export = internship;