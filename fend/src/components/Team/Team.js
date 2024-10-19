import React from 'react'
import myPic from '../../Assets/Images/myPic.jpg'
import {BsGithub,BsLinkedin,BsTwitter} from 'react-icons/bs'
import {FaWhatsapp} from 'react-icons/fa'

const Team = () => {
  return (
    <div className='w-full p-5'>
        <h1 className='p-4 text-center font-bold text-4xl text-pure-greys-500 mb-5'>OUR TEAM</h1>
        <div className='flex flex-row justify-center items-center '>
            {/* left box */}
            <div className='flex w-[40%] justify-center items-center flex-col p-4 shadow '>
                <p>
                    <img width={'200px'} src={myPic} alt='my-image'/>
                </p>
                <p className='font-bold mt-5 text-pure-greys-400'>Prabhas</p>
                <h4 className='mt-5 mb-2 text-3xl font-bold text-pure-greys-500'>Indian Film Actor</h4>
                <p style={{fontStyle:"italic"}} className='leading-7 mb-5 font-semibold text-pure-greys-500'>
                    <em>
                        <q>
                            Experienced Fullstack Developer passionate about creating
                            seamless user experiences. Specializing in M.E.R.N Stack with a
                            focus on captivating design, performance optimization, and
                            accessibility. Actively seeking opportunities to contribute
                            expertise and make a positive impact.
                        </q>
                    </em>
                </p>
                <div className='flex gap-x-5 '>
                    <a href='https://google.com' target='_black' className='flex items-center gap-1 text-blue-1000'>
                        <BsGithub/>
                    </a>
                    <a href='https://google.com' target='_black' className='flex items-center gap-1 text-blue-1000'>
                        <BsLinkedin/>
                    </a>
                    <a href='https://google.com' target='_black' className='flex items-center gap-1 text-blue-1000'>
                        <FaWhatsapp/>
                    </a>
                </div>
            </div>

            {/* Right box */}
            <div className='flex w-[40%] justify-center items-center flex-col p-4 shadow '>
                <p>
                    <img width={'200px'} src={myPic} alt='my-image'/>
                </p>
                <p className='font-bold mt-5 text-pure-greys-400'>Prabhas</p>
                <h4 className='mt-5 mb-2 text-3xl font-bold text-pure-greys-500'>Indian Film Actor</h4>
                <p style={{fontStyle:"italic"}} className='leading-7 mb-5 font-semibold text-pure-greys-500'>
                    <em>
                        <q>
                            Experienced Fullstack Developer passionate about creating
                            seamless user experiences. Specializing in M.E.R.N Stack with a
                            focus on captivating design, performance optimization, and
                            accessibility. Actively seeking opportunities to contribute
                            expertise and make a positive impact.
                        </q>
                    </em>
                </p>
                <div className='flex gap-x-5 '>
                    <a href='https://google.com' target='_black' className='flex items-center gap-1 text-blue-1000'>
                        <BsGithub/>
                    </a>
                    <a href='https://google.com' target='_black' className='flex items-center gap-1 text-blue-1000'>
                        <BsLinkedin/>
                    </a>
                    <a href='https://google.com' target='_black' className='flex items-center gap-1 text-blue-1000'>
                        <FaWhatsapp/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team
