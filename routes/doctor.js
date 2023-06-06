const express = require('express');
const router = express.Router();

const doctorController = require('../controller/doctor_Controller')

// for doctors login registration
router.post('/register', doctorController.create)
router.post('/login',doctorController.login)//returns jwt token


module.exports = router;