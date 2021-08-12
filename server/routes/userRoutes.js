const express = require('express')
const router = express.Router();
const {authUser, getUserProfile, reisterUser, admins} =require('../controller/userController')
const {protect, admin} = require('../middleware/auth')

router.post('/login', authUser)
router.post('/admin', admins)
router.get('/profile',protect, getUserProfile )
router.post('/registor', reisterUser)



module.exports =  router