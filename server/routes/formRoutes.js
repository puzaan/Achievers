const express = require('express')
const { addFormData, showFormById, showAllForm, DeleteForm } = require('../controller/formController');
const router = express.Router();
const {protect, admin} = require('../middleware/auth')


router.post('/add', addFormData );
router.get('/showBy/:id', showFormById);
router.get('/show', showAllForm);
router.get('/admin/show', protect,admin,showAllForm);
router.delete('/delete/:id', DeleteForm)



module.exports= router;