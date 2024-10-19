import React, { useContext } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody, MDBCardText, MDBCardImage, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import UserContext from '../../Context/userContext';
import profileImage from '../../Assets/Images/myPic.jpg';
import { Link, Outlet } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import Sidebar from './Sidebar';

function Dashboard() {
   const { user } = useContext(UserContext);

   return (
      <div className='relative'>
         <Sidebar />
         <div className='bg-pure-greys-100 min-h-screen p-5 w-full ml-40 lg:w-4/5 '>
            
            <section className='bg-white shadow-md rounded-lg p-5'>
              <div className='flex justify-between items-center mb-5'>
                <h1 className='text-3xl font-semibold text-pure-greys-800'>
                    Hey, Welcome 
                    <TypeAnimation
                       sequence={[user.name + '!', 1000, ' ', 2000]}
                       wrapper='span'
                        cursor={true}
                      repeat={Infinity}
                      style={{ color: '#fff', textAlign: 'center' }}
                    />
                </h1>
               
                <Link to={`/dashboard/update-profile/${user._id}`} className='py-2 px-4 bg-yellow-400 text-white rounded cursor-pointer shadow hover:bg-yellow-500 transition duration-300'>
                    Update Profile
                 </Link>
              </div>

               <MDBContainer>
                  <MDBRow>
                     <MDBCol lg='4'>
                        <MDBCard className='mb-4'>
                           <MDBCardBody className='text-center'>
                              <MDBCardImage  
                                 src={profileImage} 
                                 alt='avatar' 
                                 className='rounded-full border-4 border-gray-300 mb-4' 
                                 style={{ width: '200px', height: '200px', objectFit: 'cover' }} 
                              />
                              <p className='text-gray-600 mb-1 font-semibold'>{user.currentJob}</p>
                              <p className='text-gray-500 mb-4'>House 10, Canada Ontario</p>
                           </MDBCardBody>
                        </MDBCard>

                        <MDBCard className='mb-4'>
                           <MDBCardBody className='p-0'>
                              <MDBListGroup>
                                 <MDBListGroupItem className='flex justify-between items-center p-3'>
                                    <MDBCardText>Company Name:</MDBCardText>
                                    <MDBCardText className='font-medium'>CapacityBay</MDBCardText>
                                 </MDBListGroupItem>

                                 <MDBListGroupItem className='flex justify-between items-center p-3'>
                                    <MDBCardText className='text-lg'>Qualification:</MDBCardText>
                                    <MDBCardText className='text-pink-500'>{user.qualification}</MDBCardText>
                                 </MDBListGroupItem>

                                 <MDBListGroupItem className='flex justify-between items-center p-3'>
                                    <MDBCardText>Phone Number:</MDBCardText>
                                    <MDBCardText>{user.phoneNumber}</MDBCardText>
                                 </MDBListGroupItem>

                                 <MDBListGroupItem className='flex justify-between items-center p-3'>
                                    <MDBCardText>Date of Birth:</MDBCardText>
                                    <MDBCardText>{user.DOB}</MDBCardText>
                                 </MDBListGroupItem>
                              </MDBListGroup>
                           </MDBCardBody>
                        </MDBCard>
                     </MDBCol>

                     <MDBCol lg='8'>
                        <MDBCard className='mb-4'>
                           <MDBCardBody>
                              <MDBRow className='mb-2'>
                                 <MDBCol sm='3'>
                                    <MDBCardText>Full Name:</MDBCardText>
                                 </MDBCol>
                                 <MDBCol sm='9'>
                                    <MDBCardText className='font-medium'>{user.name}</MDBCardText>
                                 </MDBCol>
                              </MDBRow>
                              <hr />

                              <MDBRow className='mb-2'>
                                 <MDBCol sm='3'>
                                    <MDBCardText>Email:</MDBCardText>
                                 </MDBCol>
                                 <MDBCol sm='9'>
                                    <MDBCardText className='font-medium'>{user.email}</MDBCardText>
                                 </MDBCol>
                              </MDBRow>
                              <hr />

                              <MDBRow className='mb-2'>
                                 <MDBCol sm='3'>
                                    <MDBCardText>Current Job Title:</MDBCardText>
                                 </MDBCol>
                                 <MDBCol sm='9'>
                                    <MDBCardText className='font-medium'>{user.currentJob}</MDBCardText>
                                 </MDBCol>
                              </MDBRow>
                              <hr />

                              <MDBRow className='mb-2'>
                                 <MDBCol sm='3'>
                                    <MDBCardText>Description:</MDBCardText>
                                 </MDBCol>
                                 <MDBCol sm='9'>
                                    <MDBCardText className='font-medium'>{user.jobDescription}</MDBCardText>
                                 </MDBCol>
                              </MDBRow>
                              <hr />
                           </MDBCardBody>
                        </MDBCard>
                     </MDBCol>
                  </MDBRow>
               </MDBContainer>
            </section>
            <Outlet />
         </div>
      </div>
   );
}

export default Dashboard;
