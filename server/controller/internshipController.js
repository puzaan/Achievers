const Internship = require("../model/internshipModel")
const catcAsync = require('express-async-handler')
const { unlink } = require ('fs');
const addInternship = catcAsync(async(req, res, next)=> {
    try {
        const createIntern = new Internship({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            git: req.body.git,
            
        });
        if(req.file){
            createIntern.pdf= req.file.path
        }else{
            res.status(400)
        throw new Error('pdf file required')
        }
        await createIntern.save()
        res.status(201).send(createIntern)
    } catch (error) {
        res.status(500);
        return res.send({ error: (error.message) ? error.message : "Internal server error" });
        
    }
});


const internList = catcAsync(async(req, res, next) => {
    try {
        const interns = await Internship.find();
        
        res.status(200).send(interns)
    } catch (error) {
        res.status(400).send(error.message)
        throw new Error('Something went Wrong')
    }
});


const internDelete = catcAsync (async(req, res, next)=> {
    
        const deleteid = await Internship.findById(req.params.id);
        const datas = deleteid.pdf;
        console.log(datas)
        unlink(datas, (err) => {
            if (err) throw err;
            console.log(`${datas} is deleted`);
          });
        
        if(deleteid){
            

            await deleteid.remove()
            res.json({
                message: 'File Deleted'
            })
        }else{
            res.status(404);
            throw new Error("id not found")
        }
})

const internDetail = catcAsync (async(req, res, next)=> {
    
    const internDetail = await Internship.findById(req.params.id);

    if(internDetail){
        res.send(internDetail)
    }else{
        res.status(404);
        throw new Error("id not found")
    }
})


module.exports= { addInternship, internList, internDelete,internDetail}