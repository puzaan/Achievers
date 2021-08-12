const express = require('express')
const { addFormData, showFormById, showAllForm, DeleteForm } = require('../controller/formController');
const router = express.Router();


router.post('/add', addFormData );
router.get('/showBy/:id', showFormById);
router.get('/show', showAllForm);
router.post('/delete/:id', DeleteForm)



module.exports= router;