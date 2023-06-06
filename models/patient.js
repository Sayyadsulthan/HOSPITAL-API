const mongoose = require('mongoose');

let patientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type:Number,
        required:true
    },
    report:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Report'
        }
    ],
    
},{timestamps:true})

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;