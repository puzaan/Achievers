const Mongoose  =require( "mongoose");
const counselingSchema = Mongoose.Schema({
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
        required: true,
    },
    number:{
        type: String,
        required: true,
    },
    counselling:[Object],
    general:[Object],
    date:{
        type: String,
        required: true,
    }

});
const counseling = Mongoose.model("CounsellingSchedual", counselingSchema);
module.exports = counseling;