const express = require('express');
const router = express.Router();

const homeController = require('../controller/home_controller')

router.get('/', homeController.index)

// to get all the patients specific status
router.get('/reports/:status', homeController.status)//List all the reports of all the patients filtered by a specific status

router.use('/doctors', require('./doctor'));
router.use('/patients', require('./patient'))//List all the reports of a patient oldest to latest

module.exports = router;