const internship = require("../model/internshipModel")
const catcAsync = require('express-async-handler')


const internship = catcAsync(async(req, res, next)=> {
    try {
        let fileArray = [];
        req.files.forEach(element => {
            const file = {
                fileName: element.originalname,
                filePath: element.path,
                fileType: element.minetype,
                fileSize: fileSize(element.size, 2)
            }
            filesArray.push(file);
        })
        const Internship = new internship({
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
            git: req.body.git,
            cv: fileArray

        })
        await Internship.save();
        res.status(201).send('file send successfully')
    } catch (error) {
        res.status(500);
        return res.send({ error: (error.message) ? error.message : "Internal server error" });
        
    }
})