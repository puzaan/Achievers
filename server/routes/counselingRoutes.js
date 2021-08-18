const express = require('express')
const {counselingForm, allCounseling, counselingById,deleteCounseling} =require('../controller/counselingContriller');
const {protect, admin} = require('../middleware/auth')
const router = express.Router();

router.post('/add', counselingForm);
router.get('/list',protect, admin,allCounseling)
router.get('/id/:id',protect, admin,counselingById)
router.delete('/id/:id',protect, admin,deleteCounseling)
module.exports= router;