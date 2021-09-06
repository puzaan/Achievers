const express = require('express')
const { createFollowUp, getAllFollowUp,DeleteForm,updateFollow } = require('../controller/followUpController');
// const router = express.Router();
const { protect, admin } = require('../middleware/auth')
const router = express.Router({mergeParams: true})



router.post('/', protect, admin, createFollowUp);
router.get('/', protect, admin, getAllFollowUp);
router.delete('/:id',protect, admin, DeleteForm)
router.patch('/:id',protect, admin, updateFollow)


//router.post('/admin/follow/:formId/followup', protect, admin, createFollowUp);
module.exports = router;

