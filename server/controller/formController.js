const catcAsync = require('express-async-handler')
const FormData = require('../model/formModel.js')

const addFormData = catcAsync(async(req, res) => {
    try {
        if (!req.body) {
            throw new Error(`Is missing parameter :  Table data`);
        }
        const createForm = FormData({
            fullName: req.body.fullName,
            email: req.body.email,
            phone: req.body.phone,
            education:req.body.education,
            course: req.body.course,
            college: req.body.college,
            message: req.body.message,
            
        });
        createForm.save()
        .then(data => {
            res.json(data);
        }).catch(err => {
            
            res.status(500).send({
                message: err.message || 'someError'
            })
        })

        
    } catch (error) {
        res.status(500);
        return res.send({ error: (error.message) ? error.message : "Internal server error" });
    
    }

})



const showFormById = catcAsync(async(req, res)=> {
    const form = await FormData.findById(req.params.id);
    if(form){
        res.json(form);

    }else{
        // res.status(404).json({message: "form not found"})
        // after usni error handler from middleware we can write only this
        res.status(404);
        throw new Error ('Form details not found')
    }

})

const showAllForm = catcAsync(async(req, res) => {
    const form = await FormData.find({})
    res.json(form)
})


const DeleteForm = catcAsync(async(req, res)=> {
    const form = await FormData.findById(req.params.id);
    if(form){
        await form.remove();
        res.json({
            message: 'File deleted',
        })
    }else{
        res.status(404);
        throw new Error ("file not found")
    }
})

module.exports= {addFormData, showFormById, showAllForm, DeleteForm};