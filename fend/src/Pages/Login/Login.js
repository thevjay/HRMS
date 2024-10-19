import { MDBCard, MDBCardBody, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import background2 from '../../Assets/Images/team3.jpg';
import { userLogin } from '../../API/apiCalls'
import UserContext from '../../Context/userContext';


const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {setUser}=useContext(UserContext)

  const navigate = useNavigate()


  const handleLogin = async (e) => {
    try {
      e.preventDefault()
      const response = await userLogin({
        email,
        password
      })
      
      setUser(response.data.isUser)
      console.log(response.data)
      if(response.data.token){
        navigate('/dashboard')
        toast.success('Login Successfully')
      }
    } catch (error) {
      console.error('Login failed', error)
      toast.error('Login Failed')
    }
  }

  return (

    // <MDBContainer
    //   className="flex min-h-screen justify-center items-center bg-cover bg-center"
    //   style={{ backgroundImage: `url(${background2})` }}
    // >
    //   <MDBCard className="shadow-lg rounded-3xl bg-white" style={{ maxWidth: '400px' }}>
    //     <MDBCardBody className="p-6">
    //       <h2 className="text-center font-bold mb-6 text-3xl text-blue-800">Login</h2>

    //       <MDBInput
    //         label="Your Email"
    //         name="email"
    //         id="form2"
    //         type="email"
    //         className="mb-4"
    //         style={{ backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1' }}
    //       />

    //       <MDBInput
    //         label="Password"
    //         name="password"
    //         id="form3"
    //         type="password"
    //         className="mb-4"
    //         style={{ backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1' }}
    //       />

    //       <MDBBtn
    //         className="mb-5 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
    //         size="lg"
    //         onChange={handleLogin}
    //       >
    //         Login
    //       </MDBBtn>

    //       <p className="text-center text-gray-600">
    //         Do not have an account? <Link to="/register" className="text-blue-600 hover:text-blue-700">Sign Up</Link>
    //       </p>
    //     </MDBCardBody>
    //   </MDBCard>
    // </MDBContainer>

    <div className="flex min-h-screen justify-center items-center bg-cover bg-center"
       style={{ backgroundImage: `url(${background2})` }}>
      <form onSubmit={handleLogin}>
        <label>
          <p>Email</p>

          <input  
              required
              type='text'
              name='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Enter email email'
              className='w-full'
            />  
        </label> 

        <label>
          <p>Password</p>

          <input  
              required
              type='password'
              name='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder='Enter password'
              className='w-full '
            />  
        </label> 

        <button type='submit' className='mt-6 rounded-md bg-yellow-50 py-3 px-5 font-medium text-richblack-300'>
          Login
        </button>

      </form>
    </div>
  );
}

export default Login;
