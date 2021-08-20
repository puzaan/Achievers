const express = require('express')
const { addFormData, showFormById, showAllForm, DeleteForm } = require('../controller/formController');
const router = express.Router();
const {protect, admin} = require('../middleware/auth')


router.post('/add', addFormData );
router.get('/showBy/:id', showFormById);
router.get('/admin/showBy/:id', protect, admin, showFormById);
router.get('/show', showAllForm);
router.get('/admin/show', protect,admin,showAllForm);
router.delete('/delete/:id', DeleteForm)
router.delete('/admin/delete/:id',protect,admin, DeleteForm)



module.exports= router;