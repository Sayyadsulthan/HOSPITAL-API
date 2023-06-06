const mongoose = require('mongoose');

let reportSchema = new mongoose.Schema({
    status:{
        type: String,
        enum:['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine',
            'Positive-Admit'],
            require:true
    },
    patient:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Patient'
    },
    Date:{
        type: String,
        require: true
    },
    createdby:{
        type: String,
        require: true
    }
},{
    timestamps: true
})

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
