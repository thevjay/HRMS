const Admin = require("../models/adminModel")

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Job = require("../models/createJobs")
const User = require("../models/userModel")

const period = 1000 * 60 * 60 * 24 * 3

const adminRegister = async (req, res) => {
    try {
      const { email, name, password } = req.body
      const hashPassword = await bcrypt.hash(password, 10)
      const existingAdmin = await Admin.findOne({ email })
      if (existingAdmin) {
        return res
          .status(409)
          .json({ sucess: false, message: 'Email already in use' })
      }
      const newAdmin = Admin({
        email,
        name,
        password: hashPassword
      })
      const savedAdmin = await newAdmin.save()
      res
        .status(201)
        .json({
          success: true,
          message: 'Admin Created Successfully',
          savedAdmin
        })
    } catch (err) {
      console.error(err)
      res.status(404).json({
        success: false,
        message:"Internal server error"
      })
    }
}

const adminLogin = async (req, res) => {
    try {
      const { email, password } = req.body
      const isAdmin = await Admin.findOne({ email })

      if (!isAdmin) {
       return res.status(401).json({ success: false, message: 'Admin not found!' })
      }
      const isPassword = await bcrypt.compare(password, isAdmin.password)
      if (!isPassword) {
       return res.staus(401).json({ success: false, message: 'Incorrect Password' })
      }

      const token=jwt.sign({ id: isAdmin._id },"fsd",{ expiresIn: '1d' })

        res.cookie('adminId', isAdmin._id, { maxAge: period, httpOnly: true })
        
        res.status(200).json({
            success: true,
            message: 'Admin Login Successfully',
            isAdmin,
            token
          })
    }
    catch (err) {
      console.error(err)
       return res.status(500).json({
        success: false,
        message: "Internal Server error"
      })
    }
}

const adminCreateJobs = async (req, res) => {
    try {
      const { jobTitle, jobDescription, companyName, endDate } =req.body
  
        const existingJob = await Job.findOne({jobDescription})
        if(existingJob){
          return res.status(404).json({
            success: false,
            message: "Job already exist."
          })
        }

      const newJob = Job({
        jobTitle,
        jobDescription,
        companyName,
        endDate
      })
      const savedJob = await newJob.save()
      res
        .status(201)
        .json({ success: true, message: 'Job Created Successfully', savedJob })
    } catch (err) {
      console.error(err)
      res.status(404).json({
        success: false,
        message:"Internal Server error"
      })
    }
}


// total jobs
const totalJobs = async (req, res) => {
    try {
      const jobsCount = await Job.countDocuments()
      res
        .status(200)
        .json({ success: true, message: 'Total Jobs Successful', jobsCount })
    } catch (err) {
      console.error(err)
      res.status(404).json({
        success: false,
        message:"Internal Server error" 
      })
    }
}

//  total users
const getAllUsers = async (req, res) => {
    try {
      const allUsers = await User.countDocuments()
      res
        .status(202)
        .json({ success: true, message: 'View All Users Succesfully', allUsers })
    } catch (err) {
      console.error(err)
      res.status(404).json({
        success: false,
        message:"Internal Server Error" 
      })
    }
}

// Get Jobs
const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find({})
        res
        .status(202)
        .json({ success: true, message: 'View All Jobs Succesfully', jobs })
    }
    catch(err){
      console.error(err)
      res.status(500).json({
        success: false,
        message:"Internal Server error"
      })
    }
}

//Get Users
const getUsers = async (req, res) => {
  try {
    const users = await User.find({})
    res.status(202).json({success: true, message: "View all users successfully", users})

  }
  catch(err){
    console.error(err)
    res.status(500).json({
      success: false,
      message:"Errorin getting users"
    })
  }
}

//logout admin
const logoutAdmin=(req,res)=>{
  res.cookie('adminId','',{maxAge:0,httpOnly:true})
  res.status(200).json({success:true,message:"Logged out Successfully"})
}


module.exports={
      adminRegister,
      adminLogin,
      adminCreateJobs,
      totalJobs,
      getAllUsers,
      getJobs,
      getUsers,
      logoutAdmin
  }