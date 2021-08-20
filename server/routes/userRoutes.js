const express = require('express')
const router = express.Router();
const {authUser, getUserProfile, reisterUser, admins, alluser} =require('../controller/userController')
const {protect, admin} = require('../middleware/auth')

router.post('/login', authUser)
router.post('/admin', admins)
router.get('/profile/:id',protect,admin,getUserProfile )
router.post('/registor', reisterUser),
router.get('/all', protect, admin, alluser)



module.exports =  router