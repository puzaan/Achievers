const express = require('express');
const {upload} = require('../middleware/filehelper')
const {addInternship, internList, internDelete, internDetail} = require('../controller/internshipController');
const router = express.Router();
const {protect, admin} = require('../middleware/auth')


router.post('/add',upload.single('pdf'), addInternship)
router.get('/list', internList);
router.delete('/remove/:id', internDelete);
router.get('/detail/:id', internDetail);

module.exports= router
