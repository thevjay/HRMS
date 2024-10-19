import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    const [isUser,setIsUser]=useState(JSON.parse(localStorage.getItem('userToken')))

    useEffect(()=>{
        setIsUser(JSON.parse(localStorage.getItem('userToken')))
    },[])
    
  return isUser ? <Outlet/> : <Navigate to='/login'/>
}

export default ProtectedRoutes
