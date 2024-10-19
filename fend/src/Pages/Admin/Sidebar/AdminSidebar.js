import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBListGroup,
  MDBListGroupItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBRipple,
  MDBBadge,
  MDBNavbarItem
} from 'mdb-react-ui-kit';
import UserContext from '../../../Context/userContext';

function AdminSidebar() {
  const [showShow, setShowShow] = useState(false);
  const { logoutAdmin } = useContext(UserContext);
  const navigate = useNavigate();

  const toggleShow = () => setShowShow(!showShow);

  const handleLogout = async () => {
    await logoutAdmin();
    navigate('/admin-login');
  };

  return (
    <div className='w-[20%] h-screen'>
      <MDBCollapse show={showShow} tag="nav" className="d-lg-block bg-white sidebar">
        <div className="sticky">
          <MDBListGroup flush className="mx-3 mt-4">
            <MDBRipple rippleTag="span">
              <MDBListGroupItem active style={{ backgroundColor: '#0174BE' }} className="border-0 border-bottom">
                <MDBIcon fas icon="tachometer-alt me-3" />
                <Link to="/dashboard" className="text-white">Profile</Link>
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag="span">
              <MDBListGroupItem className="border-0 border-bottom">
                <MDBIcon fas icon="chart-area me-3" />
                <Link to="/admin-dashboard/create-jobs" className="text-dark">Create Job</Link>
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag="span">
              <MDBListGroupItem className="border-0 border-bottom">
                <MDBIcon fas icon="chart-area me-3" />
                <Link to="/admin-dashboard/all-users" className="text-dark">All Users</Link>
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag="span" style={{ color: 'red', cursor: 'pointer' }}>
              <MDBListGroupItem className="border-0" onClick={handleLogout}>
                <MDBIcon fas icon="money-bill me-3" />
                Logout
              </MDBListGroupItem>
            </MDBRipple>
          </MDBListGroup>
        </div>
      </MDBCollapse>

      <MDBNavbar expand="lg" className="fixed-top bg-richblack-50" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarNav className="d-flex flex-row align-items-center w-auto">
            <MDBNavbarToggler type="button" aria-label="Toggle navigation" onClick={toggleShow}>
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>
            <MDBNavbarBrand>
              <Link to="/" className="fs-3 fw-bold" style={{ color: '#0174BE' }}>
                DHireventures
              </Link>
            </MDBNavbarBrand>
          </MDBNavbarNav>

          <MDBNavbarNav className="d-flex flex-row justify-content-end w-auto">
            <MDBNavbarItem className="me-3 me-lg-0 d-flex align-items-center">
              <MDBDropdown>
                <MDBDropdownToggle tag="a" href="!" className="hidden-arrow nav-link">
                  <MDBIcon fas icon="bell" />
                  <MDBBadge color="danger" notification pill>1</MDBBadge>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <Link to="#" className="dropdown-item">Some news</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link to="#" className="dropdown-item">Another news</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link to="#" className="dropdown-item">Something else here</Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem className="me-3 me-lg-0">
              <Link to="#" className="nav-link">
                <MDBIcon fas icon="fill-drip" />
              </Link>
            </MDBNavbarItem>

            <MDBNavbarItem className="me-3 me-lg-0">
              <Link to="#" className="nav-link">
                <MDBIcon fab icon="github" />
              </Link>
            </MDBNavbarItem>

            <MDBNavbarItem className="me-3 me-lg-0 d-flex align-items-center">
              <MDBDropdown>
                <MDBDropdownToggle tag="a" href="!" className="hidden-arrow nav-link">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                    className="rounded-full "
                    height="22"
                    alt=""
                    loading="lazy"
                  />
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <Link to="#" className="dropdown-item">My profile</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link to="#" className="dropdown-item">Settings</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link to="#" className="dropdown-item">Logout</Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default AdminSidebar;
