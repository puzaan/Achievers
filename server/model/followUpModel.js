const Mongoose = require("mongoose");

const followUpSchema = new Mongoose.Schema(
    {
        
        followUp:{
            type: String,
            require: true
        },
        user:{
            type: Mongoose.Schema.ObjectId,
            required: true,
            ref: 'Users',
            require: true
        },
        form:{
            type: Mongoose.Schema.ObjectId,
            required: true,
            ref: 'FormData',
            require: true
        },
        notes:{
            type: String,
            required: true,
            default: "No message"

        },
        check:{
            type: Boolean,
            required: true,
            default: false
        },
        followed:{
            type: Number,
            required: true,
            default: 0    
        },
    },
    
    {
        toJSON: { virtuals: true },
        toObject: {virtuals: true}
    },
    {
        timestamp: true,
    },
)
followUpSchema.pre(/^find/, function (next) {
    this.populate({
        path: "form",
        select: 'fullName email '
    }).populate({
        path:'user',
        select: 'name '
    })
    next()
})

const Follow = Mongoose.model("FollowUp",followUpSchema )
module.exports = Follow;