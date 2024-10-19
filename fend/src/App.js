import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import Dashboard from './Pages/UserDashboard/Dashboard'
import ProtectedRoutes from './Utils/ProtectedRoutes'
import { ToastContainer } from 'react-toastify'
import ViewJobs from './Pages/UserDashboard/ViewJobs'
import UpdateProfile from './Pages/UserDashboard/UpdateProfile'
import SingleJob from './Pages/UserDashboard/SingleJob'
import Apply from './Pages/UserDashboard/Apply'
import AdminRegister from './Pages/Admin/Register/AdminRegister'
import AdminLogin from './Pages/Admin/Login/AdminLogin'
import AdminDashboard from './Pages/Admin/Dashboard/AdminDashboard'

import ProtectedAdminRoutes from './Utils/adminProtectedRoutes'
import CreateJobs from './Pages/Admin/CreateJobs/CreateJobs'

const App = () => {
  return (
    <>

      <ToastContainer
        style={{
          '--toastify-color-progress-bar': '#B3B3B3'
        }}
      />
      <Routes>
          <Route index element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>

          <Route path='/dashboard' element={<ProtectedRoutes/>}>
            <Route index element= {<Dashboard/>}/> 
            <Route path='jobs' element={<ViewJobs/>}/>
            <Route path='update-profile/:id' element={<UpdateProfile/>}/>
            <Route path='single-job/:id' element={<SingleJob/>}/>
            <Route path='apply-job/:id' element={<Apply/>}/>
          </Route>

          <Route path='/admin-login' element={<AdminLogin/>}></Route>
          <Route path='/admin-signup' element={<AdminRegister/>}/>
          <Route path='/admin-dashboard' element={<ProtectedAdminRoutes/>} >
              <Route index element={<AdminDashboard/>}/>
              <Route path='create-jobs' element={<CreateJobs/>}/>

              <Route path='all-users' element={<ViewJobs/>} />
          </Route>
      </Routes>
    </>
  )
}

export default App
