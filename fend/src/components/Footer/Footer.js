import React from 'react'
import { Link } from 'react-router-dom'
import {MDBFooter,MDBContainer,MDBIcon,MDBRow,MDBCol} from 'mdb-react-ui-kit'

const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg text-muted shadow-3 px-5 py-4 w-full bg-pure-greys-5 '>
        <section className='m-0 p-0 w-11/12 flex justify-center items-center'>
            <MDBContainer className='text-center text-md mt-5 flex justify-center items-center'>
                <MDBRow className='mt-3 flex  '>
                    {/* first column */}
                    <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4 w-[25%] bg-white '>
                        <h6 className='mb-4 text-pure-greys-500 font-semibold'> 
                            <MDBIcon icon='gem'/>
                            DeHireventures
                        </h6>
                        <p className='leading-1 font-semibold  text-pure-greys-300'>
                            DeHireventures is a mobile-optimized platform for seamless hiring
                            and job hunting, offering easy search, application, and profile
                            creation for job seekers and HR administrators.
                        </p>
                    </MDBCol>

                    {/* Second column */}
                    <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4 w-[30%] bg-white '>
                        <h6 className='font-semibold mb-4 text-pure-greys-200'>Access</h6>
                        <p className='mb-2 text-pure-greys-200 font-semibold'>
                            <Link to='/' className='text-reset'>
                                Home
                            </Link>
                        </p>
                        <p className='mb-2 text-pure-greys-200 font-semibold'>
                            <Link to='/' className='text-reset'>
                                Register
                            </Link>
                        </p>
                        <p className='mb-2 text-pure-greys-200 font-semibold'>
                            <Link to='/' className='text-reset'>
                                login
                            </Link>
                        </p>
                        <p className='text-pure-greys-200 font-semibold'>
                            <a href='#'>
                                About
                            </a>
                        </p>
                    </MDBCol>

                    {/* third column */}
                    <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4 w-[30%] bg-white'>
                        <h6 className='font-bold mb-4'>Contact</h6>
                        <p>
                            <MDBIcon icon='home' className='me-2'/>
                            New York, NY 1010,US
                        </p>
                        <p>
                            <MDBIcon icon='envelope' />
                                DeHireventures@example.com
                        </p>
                        <p>
                            <MDBIcon icon='phone'/> + 01 010 001 00 
                        </p>
                        <p>
                            <MDBIcon icon='print'/> + 01 010 100 11
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>

        <div className='text-center p-5 text-[15px] font-bold text-pure-greys-500 mb-5' style={{backgroundColor:'rgba(0,0,0,0.05'}}>
            @ 2023 Copyright:
            <a href='#' >
                DeHireventures
            </a>
        </div>
    </MDBFooter>
  )
}

export default Footer
