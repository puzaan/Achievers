const Mongoose = require("mongoose");

const nextFollowUpSchema = Mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        followUp:{
            type: String,
            require: true
        },
        user:{
            type: Mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Users'
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
        followupList:{
            type: String,
            
            
        },
    },
    {
        timestamp: true,
    }
)



const formSchema = Mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            default: Date.now,
        },
        // value:{
        //     type: Boolean,
        //     required: true,
        //     default: true
        // },
        fullName: {
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
    //     FollowUp:[
    //         {
    //         type: Mongoose.Schema.Types.ObjectId,
    //         required: true,
    //         ref: 'FollowUp'
    //     }
    // ],
        education: {
            type: String,
            required: true,
        },
        college: {
            type: String,
            required: true,
        },
        numFollowup: {
            type: Number,
            required: true,
            default: 0,
          },
        //   adminMessage:{
        //       type: String,
        //       required: true,
        //       default: "Write Some note"
        //   },      
        course: [Object],
    },
    
    {
        toJSON: { virtuals: true },
        toObject: {virtuals: true}
    },
    { timestamps: true }
    
    
);
// virtual populate
formSchema.virtual('followUp', {
    ref:'FollowUp',
    foreignField: "form",
    localField:'_id'

})

const FormData = Mongoose.model("FormData", formSchema);
module.exports = FormData;
