import React from 'react'
import { Link } from 'react-router-dom'
import {TypeAnimation} from 'react-type-animation';
import background from '../../Assets/Images/company2.jpeg';
import CTABtn from './Button'
import About from '../../components/About/About';
import RecentJobs from '../../components/RecentJobs/RecentJobs';
import Team from '../../components/Team/Team';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const Home = () => {
  return (
    <div>
      <Header/> 
      {/* section 1 */}
      <div className='w-full h-screen relative flex justify-center items-center gap-[50px]'  style={{backgroundImage: `url(${background})`,backgroundSize: "cover",backgroundPosition: "center" ,backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",backgroundColor: "rgba(0,0,0,0.7)"}}>
            <div className='w-[70%] flex flex-col justify-center items-center absolute gap-[60px]'>
                <h1>
                    <span className='text-white text-5xl font-semibold ml-10'>Easy__</span>
                    
                    <span className='text-5xl font-semibold'>
                      <TypeAnimation
                        sequence={[
                          'Job Hunt', //Types 'one'
                          1000,       // Waits 1s
                          'Explore',  //Deletes 'One' and types 'Two'
                          2000,
                          ()=>{
                            console.log('Sequence completed')
                          }
                        ]}
                        wrapper="span"
                        cursor={true}
                        style={{color:'#0174BE',textAlign:'center' }}
                        repeat={Infinity}
                      />
                    </span>
                </h1>

                <p className='text-white text-2xl font-bold  leading-relaxed'>
                  DeHireventures is a mobile-optimized platform for seamless hiring
                  and job hunting, offering easy search, application, and profile
                  creation for <em style={{color:"#0174BE"}}>Job seekers</em> and
                  &nbsp; <em style={{color:"#0174BE"}}>HR administrators</em>
                </p>
                
                <div className='mt-8 flex flex-row gap-7'>
                        <CTABtn active={true} linkto={"/login"}>
                          Get Started
                        </CTABtn>
                </div>
            </div>
      </div>

      <About />
      <RecentJobs />
      <Team />
      <Footer /> 
    </div>
  )
}

export default Home
