const User=require('../models/userModel')
const Job=require('../models/createJobs')
const appForJobs=require('../models/applyForJobsModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')



//register
const userRegister = async (req, res) => {
    try {
      const {
        email,
        name,
        password,
        currentJob,
        jobDescription,
        qualification,
        DOB,
        phoneNumber
      } = req.body;

      const existingUser = await User.findOne({ email })
      if (existingUser) {
        return res
          .status(409)
          .json({ sucess: false, message: 'Email already in use' })
      }

      let hashPassword
      if (password) {
        hashPassword = await bcrypt.hash(password, 10)
      }
      const newUser = User({
        email,
        name,
        password: hashPassword,
        currentJob,
        jobDescription,
        qualification,
        DOB,
        phoneNumber
      })
      const savedUser = await newUser.save()

    //   const transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     host: 'smtp.gmail.com',
    //     port: 465,
    //     secure: true,
    //     auth: {
    //       user: process.env.USER,
    //       pass: process.env.PASSWORD
    //     },
    //     from: 'abc@gmail.com'
    //   })

    //   const info = await transporter.sendMail({
    //     from: '"DeHireventures Team 👻" <abc@gmail.com>',
    //     to: email,
    //     subject: 'Welcome to DeHireventures',
    //     html: `
    //     <p>Hello ${name},</p>
    //     <p>Welcome to DeHireventures, where we redefine the future of hiring and job hunting through innovation, efficiency, and seamless user experiences.</p>
    //     <p>We are thrilled to inform you that your account has been successfully created. You can now access our platform and explore the plethora of opportunities waiting for you.</p>
    //     <p>To get started, please visit our login page:</p>
    //     <p><a href="https://hrms-client-self.vercel.app/login">Login to DeHireventures</a></p>
    //     <p>If you have any questions or need assistance, feel free to reach out to our support team. We are here to help you at every step of your journey.</p>
    //     <p>Thank you for choosing DeHireventures. We look forward to helping you achieve your career goals!</p>
    //     <p>Best regards,<br/>The DeHireventures Team</p>
    //     `
    //   })
  
    //   console.log('Message sent: %s', info.messageId)
  
      res.status(200).json({ 
            success: true, 
            message: 'User Created Successfully', 
            savedUser 
        })
    } catch (error) {
      console.error(error)
      res.status(500).json({
        success: false,
        message:"Internal server error"
      })
    }
}

//login
const userLogin=async(req,res)=>{
    try{
        const { email, password } = req.body

        const isUser = await User.findOne({ email })

        if (!isUser) {
            return res
              .status(401)
              .json({ success: false, message: 'User not found!' })
        }

        const isPassword = await bcrypt.compare(password, isUser.password)
        if (!isPassword) {
            return res
              .status(401)
              .json({ success: false, message: 'Incorrect Password' })
        }
        const token=jwt.sign(
            { id: isUser._id },"fsd",
            { expiresIn: '1d' })


        const period = 24 * 60 * 60 * 1000; // 1 day in milliseconds
        res.cookie('userId', isUser._id, { maxAge: period, httpOnly: true })
        res.status(200).json({
            success: true,
            message: 'User Login Successfully',
            isUser,
            token
          })
    }
    catch(error){
        console.error(error)
        res.status(400).json({
            success: false,
            message: "Internal Server error"
        })
    }
}

//list all jobs
const allJobs=async(req,res)=>{
  try{
    // Access the authenticated user ID using req.user
      const userId=req.user

      // Example: Do something with the user ID
      console.log('Authenticated User ID:',userId)

      const jobs=await Job.find({})

      res.status(200).json({
        success:true,
        message:'View allJobs Successfull',
        jobs
      })    
  }
  catch(error){
    console.error(error)
    res.status(500).json({
      success:false,
      message:"Error in Getting all jobs"
    })
  }
}

//applyforjobs
const applyForJobs=async(req,res)=>{
  try{

    const id=req.params.id;
    console.log("APPLYINg id",id)
    const userId=req.user;

    const {address,coverLetter,resume}=req.body

    console.log('userId:', userId)
    console.log('address:', address)
    console.log('coverLetter:', coverLetter)
    console.log('resume:', resume)

    const user =await User.findById(userId)
    if(!user){
      return res.status(404).json({
        success:false,
        message:"User not found"
      })
    }

    const hasApplied=user.appliedJobs.some(application=>
      application.job.equals(id)
    )

    if (hasApplied) {
      return res.status(400).json({
        success: false,
        message: 'You have already applied for this job'
      })
    }

    const newApplication=new appForJobs({address,resume,coverLetter})

    const savedApplication=await newApplication.save()

    await User.findByIdAndUpdate(userId,{
      $push:{
        appliedJobs:{
          job:id,
          applicationStatus:'pending',
          applicationDate:new Date()
        }
      }
    })

    return res.status(200).json({
      success:true,
      message:"Application Submitted Successfully",
      savedApplication
    })
  }
  catch(error){
    console.error(error)
    return res.status(500).json({
      success:false,
      message:"Error in Applying for jobs"
    })
  }
}

//viewappliedjobs
const viewAppliedJobs=async(req,res)=>{
  try{
    const id=req.params._id

    const getJob=await appForJobs.findById(id)

    res.status(200).json({
      success:true,
      message:"View Applied Jobs Successful",
      getJob
    })

  }
  catch(error){
    console.error(error)
    res.status(500).json({
      success:false,
      message:"Error in ViewAppliedJobs"
    })
  }
}


//User update profile

const updateUser=async(req,res)=>{
  try{

    const id=req.params.id

    const {
        email,
        name,
        currentJob,
        jobDescription,
        qualification,
        DOB,
        phoneNumber
      }=req.body

      const updatedUser=await User.findByIdAndDelete(
        id,{email,name,currentJob,jobDescription,qualification,DOB,phoneNumber},{new:true}
      )

      res.status(200).json({
        success:true,
        message:"Update User Successfully",
        updatedUser
      })
  }
  catch(error){
    console.error(error)
    res.status(500).json({
      success:false,
      message:"Error in Update User"
    })
  }
}

// Job Single View
const jobSingleView = async (req, res) => {
  try {
    const id = req.params.id
    const singleJob = await Job.findById(id)
    res.status(202).json({
      success: true,
      message: 'Single JOb View Successfully',
      singleJob
    })
  } catch (err) {
    console.log(err)
    res.status(404).json({
      success: false,
      message: err.message
    })
  }
}

//getRecentjobs
const getRecentJobs=async(req,res)=>{
  try{

    const days=req.query.days || 7

    const formDate=new Date(new Date()-days*24*60*60*1000)

    const recentJobs=await Job
          .find({createdAt:{$gte:formDate}})
          .sort({createdAt:-1})
          .limit(6)
     res.status(200).json({
        success:true,
        message:`Recent Jobs in the last ${days} days`,
        recentJobs
     }) 
  }
  catch(error){
    console.error(error)
    res.status(500).json({
      success:false,
      message:"Error in GetRecent Jobs"
    })
  }
}


//logout
const logout = async (req, res) => {
    res.cookie('userId', '', { maxAge: 0, httpOnly: true })
    res.status(200).json({ success: true, message: 'Logged out successfully' })
}

module.exports={
    userRegister,
    userLogin,
    logout,
    allJobs,
    applyForJobs,
    updateUser,
    viewAppliedJobs,
    getRecentJobs,
    jobSingleView
  }