const mongoose = require('mongoose')

// User Schema
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required:true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required:true, 
    },
    currentJob: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true, 
    },
    qualification: {
      type: String,
      required: true,
    },
    DOB: {
      type: String,
      required: true, 
    },
    phoneNumber: {
      type: Number,
      required: true, 
    },
    appliedJobs: [
      {
        job: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'jobmodels'
        },
        applicationStatus: {
          type: String,
          enum: ['pending', 'approved', 'rejected']
        },

        applicationDate: {
          type: Date,
          default: Date.now
        }
      }
    ]
  },
  { timestamps: true }
)

// User Model
const User = mongoose.model('usermodels', userSchema)

module.exports = User;