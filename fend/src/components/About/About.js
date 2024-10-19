import React from 'react'
import CTAButton from '../../Pages/Home/Button'
import bgImage from '../../Assets/Images/team_images.jpeg'

const About = () => {
  return (
    <div>
      <div className='flex justify-between items-center w-full'>
        {/* Left box */}
        <div className=' flex flex-col w-[50%] gap-5 bg-white p-10'>
            <h4 className='block font-bold text-3xl text-center p-2 text-pure-greys-500'>
                About DeHireventures
            </h4>
            <p className='text-center text-2xl text-pure-greys-500 font-bold leading-relaxed'>
                Welcome to DeHireventures, where we redefine the future of hiring and
                job hunting through innovation, efficiency, and seamless user
                experiences. Our platform serves as a dynamic and centralized hub,
                empowering both job seekers and HR administrators to navigate the
                evolving landscape of talent acquisition effortlessly.
            </p>
            <div style={{display:"flex" , justifyContent:"center"}}>
                <CTAButton active={true} linkto={"/login"}>
                    Get Hired
                </CTAButton>
            </div>
        </div>
        {/* Right box */}
        <div className='w-[50%]  p-10'>
            <img src={bgImage} className='object-cover' alt=""/>
        </div>
      </div>
    </div>
  )
}

export default About
