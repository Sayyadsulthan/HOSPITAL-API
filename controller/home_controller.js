const Doctor = require('../models/doctor');
const Patient = require('../models/patient');
const Report = require('../models/report');


// Home route for login / register process
module.exports.index = async function(req, res){
    try{
        return res.status(200).json({
            message:"Wlcome to Doctors API If You are Doctor You can follow this process if You are Already registegerd Go to :Login_URL ",
            Note: "!! The method need to be POST while Register and Login !!",
            Register_URL: '/doctors/register',
            Login_URL: '/doctors/login'
        })

    }catch(err){
        console.log(err)
        return res.status(500).json({
            message: "Internal Server Error",
            err: toString(err)
        })
    }
}


// to display all reports of particular status
module.exports.status = async function(req, res){
    try{

        let reports =await Report.find({status:req.params.status}).populate('patient').exec()
        // console.log(reports.Patient)
        // if reports are empty
        if(!reports){
            reports = `No Recored found for : ${req.params.status}`
        }

        return res.status(200).json({
            message:`list of all ${req.params.status} given below..`,
            reports: reports
        })
        
    }catch(err){
        console.log(err)
        return res.status(400).json({
            message: "Internal Server Error",
            err: toString(err)
        })
    }
}