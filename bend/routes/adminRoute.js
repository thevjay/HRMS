const express = require('express');
const { adminRegister, adminLogin, adminCreateJobs, getAllUsers, getUsers, totalJobs, getJobs, logoutAdmin } = require('../controllers/adminController');
const authorizedAdmin = require('../middlewares/adminMiddleware');
const route = express.Router()


// User register
route.post('/admin-register', adminRegister)

// User login
route.post('/admin-login', adminLogin)

// Create Jobs
route.post('/admin-create-jobs', authorizedAdmin,adminCreateJobs)

//Get All Users login
route.get('/admin-all-users',authorizedAdmin,getAllUsers)

//Get Users
route.get('/users',getUsers)

//Get All Jobs count
route.get('/admin-total-jobs',authorizedAdmin,totalJobs)

//Get jobs name
route.get('/jobs',authorizedAdmin,getJobs)

//logout
route.post('/admin-logout',logoutAdmin)


module.exports = route;