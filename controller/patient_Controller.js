const Doctor = require("../models/doctor")
const Patient = require("../models/patient")
const Report = require("../models/report")

// for register of user by doctor 
module.exports.register = async function (req, res) {
    try {
        let doctor = await Doctor.findOne({ name: req.user.name, password: req.user.password })
        let patient = await Patient.findOne({ name: req.body.name, phone: req.body.phone }).populate('report')

        // if patient is find by name and number 
        if (patient) {
            return res.status(200).json({
                message: "patient already exist..",
                patient: patient
            })
        }

        // else create new patient
        let newpatient = await Patient.create({
            name: req.body.name,
            phone: req.body.phone
        })

        doctor.patient.push(newpatient.id)

        doctor.save();

        return res.status(201).json({
            message: 'patient registration successfull...',
            patient: newpatient
        })

    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "Internal Server Error",
            err: toString(err)
        })
    }
}

// CREATING THE REPORT USING THIS 
module.exports.create_report = async function (req, res) {
    try {
        let doctor = await Doctor.findOne({ name: req.user.name, password: req.user.password })
        let patient = await Patient.findById(req.params.id)

        if (!patient) {
            return res.status(404).json({
                message: "Patient not found....",
                id: req.params.id
            })
        }

        // find the report if it exists or not
        let report = await Report.findOne({ patient: req.params.id });
        if (report) {

            if (report.createdby == doctor.name) {
                return res.status(200).json({
                    message: "Report already Exist...",
                    report: report
                })
            }
        }

        // CHECKING THE STATUS OF REPORT
        let status;

        if (req.body.status == 'Positive-Admit' || req.body.status == 'Travelled-Quarantine' || req.body.status == 'Symptoms-Quarantine') {
            status = req.body.status;
        } else {
            status = 'Negative'
        }

        // new date date object to store the date of created report
        let date = new Date();
        let mm = date.getMonth() + 1, dd = date.getDate(), yy = date.getFullYear()
        let currentDate = dd + "/" + mm + "/" + yy;

        let newreport = await Report.create({
            status: status,
            createdby: doctor.name,
            Date: currentDate,
            patient: patient
        })

        patient.report.push(newreport.id);

        patient.save();

        return res.status(200).json({
            message: "Report created successfully..",
            report: newreport
        })

    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "Internal Server Error",
            err: toString(err)
        })
    }
}


// TO DISPLAY THE ALL REPORTS OF THE SPECIFIC PATIENT
module.exports.all_Reports = async function (req, res) {
    try {
        let patient = await Patient.findById(req.params.id).populate('report').exec()

        // if patient do not exist 
        if (!patient) {
            return res.status(404).json({
                message: " patient not found You are looking for.."
            })
        }

        let report = patient.report;

        // if the reports are empty
        if (!report) {
            report = " No records found... "
        }

        // return the response in json
        return res.status(200).json({
            message: `all reports of ${patient.name}..`,
            reports: report
        })


    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "Internal Server Error",
            err: toString(err)
        })
    }
}

