import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-white' style={{
                                boxShadow:'0px 4px 16px 0px rgba(0,16,63,0.05)',
                                textAlign:'center',
                                zIndex:2,
                                position:'fixed',
                                height:70,
                                width:'100%',
                                display:'flex',
                                justifyContent:'space-between',
                                alignItems:'center',
                                padding:'0rem 3.3rem'}} >
        <Link to='/' className='text-blue-1000 text-3xl font-bold'>
            DeHireventures
        </Link>

        <nav>
            <ul className='flex justify-center items-center  gap-[50px] text-lg font-semibold '>
                <li>
                    <a href='#about' className='hover:text-blue-1000' style={{textDecoration:'none'}}>About</a>
                </li>
                <li>
                    <a href='#contact' className='hover:text-blue-1000'>Contact Us</a>
                </li>
                <li>
                    <Link className='mr-8 hover:text-blue-1000' to='/login'>Login</Link>
                    <Link to='/register' className='hover:text-blue-1000'>Register</Link>
                </li>
                
            </ul>
        </nav>
    </header>
  )
}

export default Header
