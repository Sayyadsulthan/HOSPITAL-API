const mongoose = require('mongoose');

let doctorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    },
    patient:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Patient'
    }]
})

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;