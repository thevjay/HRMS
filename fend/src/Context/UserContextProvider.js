import React, { useEffect, useState } from 'react'
import UserContext from './userContext'
import axios from 'axios'

const BASE_URL='http://localhost:8000'

const UserContextProvider = ({children}) => {

    const [user,setUser]=useState(null)

    const [getJob,setGetJob]=useState(null)

    const [admin,setAdmin]=useState(null)

    const [authUser, setAuthUser] = useState(
      JSON.parse(localStorage.getItem('userToken'))
    )
    const [authAdmin, setAuthAdmin] = useState(
      JSON.parse(localStorage.getItem('adminToken'))
    )

    useEffect(()=>{
      const storedUserToken=JSON.parse(localStorage.getItem('userToken'))

      if(storedUserToken !== authUser){
        setAuthAdmin(storedUserToken)
      }
    })

    useEffect(()=>{
      const storedAdminToken=JSON.parse(localStorage.getItem('adminToken'))

      if(storedAdminToken !== authAdmin){
        setAuthAdmin(storedAdminToken)
      }
    })

    const logout=async()=>{
      try{

        await axios.post(`${BASE_URL}/api/v1/user-logout`,null,{
          withCredentials:true
        })

        localStorage.removeItem('userToken')
      }
      catch(error){
        console.log('Logout failed:',error)
      }
    }

    const logoutAdmin = async () => {
      try {
        await axios.post(`${BASE_URL}/api/v1/admin-logout`, null, {
          withCredentials: true
        })
        setAuthAdmin(null)
        localStorage.removeItem('adminToken')
      } catch (error) {
        console.error('Logout failed:', error)
      }
    }

  return (
    <UserContext.Provider 
    value={{ user, setUser, logout, authUser, logoutAdmin, admin, setAdmin, setGetJob, getJob }}
    >
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
