const express = require('express');
const { userRegister, userLogin, allJobs, applyForJobs, updateUser, getRecentJobs, logout, jobSingleView, viewAppliedJobs } = require('../controllers/userController');
const authorizedUser = require('../middlewares/userMiddleware');


const route = express.Router()

//User register
route.post('/user-register',userRegister)

//login 
route.post('/user-login',userLogin)

//logout
route.post('/user-logout',logout)

//All jobs
route.get('/all-jobs',authorizedUser,allJobs)

//Update Users
route.put('/update-user/:id',authorizedUser,updateUser)

//apply
route.post('/user-apply/:id',authorizedUser,applyForJobs)

//get recent jobs
route.get('/recent-jobs',getRecentJobs)

//view single Job
route.get('/single-job/:id',authorizedUser,jobSingleView)

//get applied 
route.get('/getapplied-jobs/:id',authorizedUser,viewAppliedJobs)

module.exports=route;