const express = require('express')
const { addFormData, showFormById, showAllForm, DeleteForm, followuoForm, showAllFollowup } = require('../controller/formController');
const router = express.Router();
const { protect, admin } = require('../middleware/auth')
const followupRouter = require('../routes/followUpRoutes')
const { createFollowUp, getAllFollowUp } = require('../controller/followUpController')

router.use('/admin/follow/:formId/followup', followupRouter)

router.post('/add', addFormData);
router.get('/showBy/:id', showFormById);
router.get('/admin/showBy/:id', protect, admin, showFormById);
router.get('/show', showAllForm);
router.get('/admin/follow/:id', showAllFollowup);
router.get('/admin/show', protect, admin, showAllForm);
router.delete('/delete/:id', DeleteForm)
router.delete('/admin/delete/:id', protect, admin, DeleteForm)
router.post('/admin/follow/:id', protect, admin, followuoForm);
//router.post('/admin/follow/:formId/followup', protect, admin, createFollowUp);




module.exports = router;