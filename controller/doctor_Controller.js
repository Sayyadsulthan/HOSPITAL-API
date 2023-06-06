const Doctor = require('../models/doctor');
const jwt = require('jsonwebtoken');


// Creating a Doctor account 
module.exports.create = async function(req, res){
    try{
        let doctor =await Doctor.findOne({name:req.body.name, password: req.body.password})

        // if Doctor exist 
        if(doctor){
            return res.status(200).json({
                message:"account Alerady exist go to login",
                account: doctor.name
            })
        }

        // else Create new Account
        let newdoctor =await Doctor.create({
            name: req.body.name,
            password: req.body.password
        })
        return res.status(201).json({
            message:"account Created success fully..",
            account: newdoctor.name
        })
    }catch(err){
        console.log(err)
        return res.status(500).json({
            message: "Internal Server Error",
            err: toString(err)
        })
    }
}

// for login the Doctor
module.exports.login =async function(req, res){
    try{

        let doctor =await Doctor.findOne({name:req.body.name, password: req.body.password})
        // if Doctor exist 
        if(doctor){
            return res.status(200).json({
                message:" singin successfull here is your token plzz keepit safe",
                token: jwt.sign(doctor.toJSON(), process.env.JWT_SECRET, {expiresIn: '1000000'})
            })
        }


        return res.status(404).json({
            message:" Doctor or Account not found you are looking for.."
        })
        
    }catch(err){
        console.log(err)
        return res.status(500).json({
            message: "Internal Server Error",
            err: toString(err)
        })
    }
}