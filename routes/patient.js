const express = require('express');
const router = express.Router();
const passport = require('passport');

const patientController = require('../controller/patient_Controller');


// for patient registration, creation of report and get all reports
router.post('/register',passport.authenticate('jwt', {session: false}), patientController.register)
router.post('/:id/create_report', passport.authenticate('jwt', {session:false}), patientController.create_report)
router.get('/:id/all_reports', passport.authenticate('jwt', {session:false}), patientController.all_Reports)//List all the reports of a patient oldest to latest

module.exports = router;