import axios from 'axios'

const BASE_URL='http://localhost:8000'

export const userRegister=async payload=>{
    const res=await axios.post(
        `${BASE_URL}/api/v1/user-register`,
        payload,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            withCredentials:true
        }
    )
    console.log(res)
    return res
}

export const userLogin = async payload => {
    const response = await axios.post(
      `${BASE_URL}/api/v1/user-login`,
      payload,
      {
        withCredentials: true
      }
    )
    console.log(response?.data)
    const { token } = response.data
    localStorage.setItem('userToken', JSON.stringify(token))
  
    const isUser = JSON.parse(localStorage.getItem("userToken"));
    console.log(isUser)
    return response
  }

export const getAllJobs=async()=>{
  const response=await axios.get(`${BASE_URL}/api/v1/all-jobs`,{
    withCredentials:true,
    headers:{
      Accept:'application/json',
      Authorization:`Bearer ${JSON.parse(localStorage.getItem('userToken'))}`,
      'Content-Type':'application/json'
    }
  })

  console.log(response.data)
  return response
}