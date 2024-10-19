// import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import background1 from '../../Assets/Images/team3.jpg';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { userRegister } from '../../API/apiCalls';

const Register = () => {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [currentJob, setCurrentJob] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [qualification, setQualification] = useState('')
  const [DOB, setDOB] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')


    const navigate=useNavigate()

    
    const handleRegister=async(e)=>{
        try{
          e.preventDefault()
          const response = await userRegister({
            email,
            name,
            password,
            currentJob,
            jobDescription,
            qualification,
            DOB,
            phoneNumber
          });
          console.log(response.data);
          toast.success("Registration Successfully");
          navigate('/login');
        }
        catch (error) {
          console.error('Registration failed', error);
          toast.error('Registration Failed' +error.message);
      }
      
    }
  return (
  

    <div className="flex min-h-screen justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${background1})` }}>
      <form onSubmit={handleRegister} className='flex w-full justify-center items-center flex-col gap-y-4'>
         <div className='flex gap-x-4 flex-col w-[50%] justify-center items-center'>
            <label>
              <p>Email</p>
              <input
                required
                type='text'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter email'
                className='w-full form-style'
              />
            </label>

            <label>
              <p>Name</p>
              <input
                required
                type='text'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter name'
                className='w-full form-style'
              />
            </label>

            <label>
              <p>Password</p>
              <input
                required
                type='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter password'
                className='w-full form-style'
              />
            </label>

            <label>
              <p>currentJob</p>
              <input
                required
                type='text'
                name='currentJob'
                value={currentJob}
                onChange={(e) => setCurrentJob(e.target.value)}
                placeholder='Enteer currentjob'
                className='w-full form-style'
              />
            </label>

            <label>
              <p>jobDescription</p>
              <input
                required
                type='text'
                name='jobDescription'
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder='Enter jobDescription'
                className='w-full form-style'
              />
            </label>

            <label>
              <p>qualification</p>
              <input
                required
                type='text'
                name='qualification'
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
                placeholder='Enter qualification'
                className='w-full form-style'
              />
            </label>
            
            <label>
              <p>DOB</p>
              <input
                required
                type='Date'
                name='DOB'
                value={DOB}
                onChange={(e) => setDOB(e.target.value)}
                placeholder='Enter DOB'
                className='w-full form-style'
              />
            </label>
            
            <label>
              <p>phoneNumber</p>
              <input
                required
                type='text'
                name='phoneNumber'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder='Enter phoneNumber'
                className='w-full form-style'
              />
            </label>
            
            <button 
              type='submit'
              className='mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-800'
            >
              Sign Up
            </button>
         </div>
      </form>
    </div>
  
  );
};

export default Register;
