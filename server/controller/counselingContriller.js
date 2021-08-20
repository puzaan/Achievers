const catcAsync = require("express-async-handler");
const counseling = require("../model/counselingModel");

const counselingForm = catcAsync(async (req, res) => {
    const createForm = await counseling.create({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        date: req.body.date,
        topic: req.body.topic,
    });
    if(createForm){
        res.status(201)
        res.json({
            createForm
        });
    }else{
        res.status(400);
        throw new Error("Invalid Form Data");
    }

});


const allCounseling = catcAsync(async(req, res) => {
    let list = await counseling.find({});
    res.json(list);
})
const counselingById = catcAsync(async(req, res) => {
    const Counseling = await counseling.findById(req.params.id);
    if(Counseling){
        res.json(Counseling)
    }else{
        res.status(404)
        throw new Error('Not Found')
    }
})

const deleteCounseling = catcAsync(async(req, res) => {
const Counseling = await counseling.findById(req.params.id)
if(Counseling){
    await Counseling.remove()
    res.json({
        message: 'File deleted',
    })
}else{
    res.status(404);
    throw new Error('file not found')
}
})

module.exports=  { counselingForm, allCounseling, counselingById,deleteCounseling };
