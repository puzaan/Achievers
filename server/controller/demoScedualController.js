const catcAsync = require("express-async-handler");
const demoScedual = require('../model/demoScedualModel')


const createNew = catcAsync(async(req, res) => {
    const crreateForm = await demoScedual.create({
        name : req.body.name,
        email : req.body.email,
        number : req.body.number,
        course :req.body.course,
        date : req.body.date
    })

    if(crreateForm){
        res.status(201)
        res.json({
            _id  : crreateForm._id,
            name : crreateForm.name,
        email : crreateForm.email,
        number : crreateForm.number,
        course :crreateForm.course,
        date : crreateForm.date
        })
    }else{
        res.status(400)
        throw new Error('Invalid Form Data')
    }
});

const scedualList = catcAsync(async(req, res)=> {
    const list = await demoScedual.find({});
    if(list){
        res.json(list)
    }else{
        res.status(400);
        throw new Error('Something went wrong');
    }
})
const scedualById = catcAsync(async(req, res)=> {
    const Scedual = await demoScedual.findById(req.params.id);
    if(Scedual){
        res.json(Scedual)
    }else{
        res.status(404)
        throw new Error ('Not found')
    }
})
const deleteScedual = catcAsync(async(req, res) => {
    const scedual =  await demoScedual.findById(req.params.id);
    if(scedual){
        await scedual.remove()
        res.json({
            message: 'File deleted'
        })
    }else{
        res.status(404);
        throw new Error ("file not found")
    }
})
module.exports={createNew, scedualList,scedualById, deleteScedual}