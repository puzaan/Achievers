const Follow = require("../model/followUpModel");
const catcAsync = require("express-async-handler");
const factory = require('./handlerController')

const getAllFollowUp = catcAsync(async (req, res, next) => {
    let filter = {}
    if(req.params.formId) filter = {form: req.params.formId}
    const followup = await Follow.find(filter);

    if (followup) {
        res.json(followup);
    } else {
        // res.status(404).json({message: "form not found"})
        // after usni error handler from middleware we can write only this
        res.status(404);
        throw new Error("Form details not found");
    }
});

const createFollowUp = catcAsync(async (req, res, next) => {

    // nested routes
    if (!req.body.form) req.body.form = req.params.formId
    if(!req.body.user) req.body.user = req.user._id
    const newFollow = await Follow.create(req.body);

    res.status(201).json({
        message: "next follow up added",
        data: {
            review: newFollow,
        },
    });
});




const DeleteForm = factory.deleteOne(Follow)
const updateFollow = factory.updateOne(Follow)


module.exports = { createFollowUp, getAllFollowUp,DeleteForm,updateFollow };
