import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../Context/userContext';
import { MDBIcon, MDBBadge, MDBDropdown, MDBNavbarLink,MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBNavbar, MDBContainer, MDBNavbarBrand, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem } from 'mdb-react-ui-kit';

const Sidebar = () => {
  const [showShow, setShowShow] = useState(false);
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  const toggleShow = () => setShowShow(!showShow);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div>
      <nav className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-transform ${showShow ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className='pt-16'>
          <div className='flex flex-col space-y-2 mx-3'>
            <Link to='/dashboard' className='bg-blue-600 text-white p-4 rounded flex items-center'>
              <MDBIcon fas icon='tachometer-alt' className='mr-3' />
              Profile
            </Link>

            <Link to='/dashboard/jobs' className='text-gray-800 p-4 rounded flex items-center hover:bg-gray-100'>
              <MDBIcon fas icon='chart-area' className='mr-3' />
              Jobs
            </Link>

            <button
              className='text-red-600 p-4 rounded flex items-center hover:bg-red-100'
              onClick={handleLogout}
            >
              <MDBIcon fas icon='money-bill' className='mr-3' />
              Logout
            </button>
          </div>
        </div>
      </nav>

      <MDBNavbar expand='lg' className='fixed top-0 left-0 w-full bg-light'>
        <MDBContainer fluid>
          <MDBNavbarNav className='flex items-center w-auto'>
            <MDBNavbarToggler
              type='button'
              aria-label='Toggle navigation'
              onClick={toggleShow}
            >
              <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>

            <MDBNavbarBrand>
              <Link to='/' className='text-xl font-bold text-blue-600'>
                DHireventures
              </Link>
            </MDBNavbarBrand>
          </MDBNavbarNav>

          <MDBNavbarNav className='flex justify-end items-center'>
            <MDBNavbarItem className='relative'>
              <MDBDropdown>
                <MDBDropdownToggle
                  tag='a'
                  href='#!'
                  className='flex items-center'
                >
                  <MDBIcon fas icon='bell' />
                  <MDBBadge color='danger' notification pill>
                    1
                  </MDBBadge>
                </MDBDropdownToggle>

                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <Link to='#' className='block px-4 py-2'>Some news</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link to='#' className='block px-4 py-2'>Another news</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link to='#' className='block px-4 py-2'>Something else here</Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem className='mr-3 ml-3'>
              <MDBNavbarLink href='#'>
                <MDBIcon fas icon='fill-drip' />
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='mr-3'>
              <MDBNavbarLink href='#'>
                <MDBIcon fab icon='github' />
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='relative'>
              <MDBDropdown>
                <MDBDropdownToggle
                  tag='a'
                  href='#!'
                  className='flex items-center'
                >
                  <img
                    src='https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg'
                    className='rounded-full h-8 w-8'
                    alt='Profile'
                    loading='lazy'
                  />
                </MDBDropdownToggle>

                <MDBDropdownMenu className='bg-richblack-200'>
                  <MDBDropdownItem>
                    <Link to='/dashboard' className='block px-4 py-2'>My profile</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link to='#' className='block px-4 py-2'>Settings</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link to='#' className='block px-4 py-2'>Logout</Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
};

export default Sidebar;
