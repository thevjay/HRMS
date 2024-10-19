const mongoose = require('mongoose')

// User Schema
const jobsSchema = new mongoose.Schema({
    jobTitle : {
        type: String,
        required: true
    },
    jobDescription: {
        type: String,
        required: true
    },
    companyName : {
        type:String,
        required: true
    },
    startDate : {
        type:Date,
        default: Date.now
    },
    endDate: {
        type:String,
        required: true
    },
    applicants: [
        {
           applicant: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
           },
           applicationStatus: {
            type: String,
            enum: ["pending", "approved", "rejected"]
           },
           applicationDate:{
            type: Date,
            default: Date.now
           }
        }
    ]
},  { timestamps: true })


// User Model
const Job = mongoose.model('jobsmodels', jobsSchema)

module.exports =Job;