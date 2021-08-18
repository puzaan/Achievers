const express = require('express');
const {createNew, scedualList,scedualById, deleteScedual} = require('../controller/demoScedualController');
const {protect, admin} = require('../middleware/auth')
const router = express.Router();

router.post('/add', createNew);
router.get('/list', protect, admin, scedualList);
router.get('/id/:id', protect, admin, scedualById);
router.delete('/id/:id', protect, admin, deleteScedual);

module.exports = router;

