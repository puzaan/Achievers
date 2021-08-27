// const mongoose = require("mongoose");
// const internshipSchema = mongoose.Schema({
//     id: {
//         type:String,
//         required: true,
//         default: Date.now,
//     },
//     name:{
//         type: String,
//         required: true,
        
//     },
//     email:{
//         type: String,
//         required:true
//     },
//     number: {
//         type: String,
//         required: true,

//     },
//     git:{
//         type: String,
//         required: true
//     },
//     files:{
//         type: String,
//         required: true
//     }

// }, {timestamps: true})

// const Internship = mongoose.model("Internship", internshipSchema);
// module.export = Internship;




const Mongoose = require("mongoose");

const internSchemaa = Mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            default: Date.now,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        git: {
            type: String,
            required: true,
        },
        pdf: {
            type: String,
            required: true,
        },
        
    },
    { timestamps: true }
);
const InterData = Mongoose.model("InterData", internSchemaa);
module.exports = InterData;
