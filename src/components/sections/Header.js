import React from 'react';
import '../../style/Header.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from './../../contexts/AuthContext';
import Logo from '../../images/logo.png';


const Header = () => {

    const { currentUser, logout } = useAuth();

    return (
        <div className="header-bg">

            <Navbar expand="lg">
                <Link to="/home" className="nav-link"> <Navbar.Brand ><img src={Logo} className="logo-img mb-4 ms-2 img-fluid" alt="logo" /></Navbar.Brand></Link>
                <Navbar.Toggle style={{ backgroundColor: '#e2f2ef' }} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='ms-3' id="basic-navbar-nav">

                    <Nav className="ms-auto">
                        <Link to="/home" className="nav-link me-3 fw-600 fs-4 text-white">Home</Link>
                        <Link to="/about" className="nav-link me-3 fw-600 fs-4 text-white">About</Link>
                        <Link to="/explore" className="nav-link me-3 fw-600 fs-4 text-white">Explore</Link>

                        {currentUser ? (
                            <div className="d-flex align-items-center">
                                <span className=" text-white me-3 fw-600 fs-4">{currentUser.displayName}</span>

                                <Link className="dashboard me-3 fw-600 fs-4 text-white" to="/dashboard">Dashboard</Link>
                                <span onClick={logout} className="text-white fw-600 fs-4 me-3">Log Out</span>
                            </div>
                        ) : (

                            <Link to="/login" className="nav-link"> <span className="text-white fw-600 fs-4 me-3">Login</span> </Link>

                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;