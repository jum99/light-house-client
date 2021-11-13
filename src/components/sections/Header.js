
import React from 'react';
import '../../style/Header.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from './../../contexts/AuthContext';
import Logo from '../../images/logo.png';


const Header = () => {

    const { currentUser, logout } = useAuth();

    return (
        <div className="container header-bg">
            <Navbar expand="lg">
                {/* <div > */}

                <Link to="/home" className="nav-link"> <Navbar.Brand ><img src={Logo} className="logo-img img-fluid" alt="logo" /></Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">

                        <Link to="/home" className="nav-link me-3 fw-bold fs-4 text-white">Home</Link>
                        <Link to="/about" className="nav-link me-3 fw-bold fs-4 text-white">About</Link>
                        <Link to="/explore" className="nav-link me-3 fw-bold fs-4 text-white">Explore</Link>


                        {currentUser ? (
                            <div className="d-flex align-items-center">
                                <span className=" text-white me-3 fw-bold fs-4">{currentUser.displayName}</span>

                                <Link className="dashboard me-3 fw-bold fs-4 text-white" to="/dashboard">Dashboard</Link>
                                <span onClick={logout} className="text-white fw-bold fs-4">LogOut</span>
                            </div>
                        ) : (
                            <button className="loginBtn me-3">
                                <Link to="/login" className="nav-link text-white fw-bold">Sign In</Link>
                            </button>
                        )}
                    </Nav>
                </Navbar.Collapse>

                {/* </div> */}


            </Navbar>
            <hr className="mt-2 hr-style" />
        </div>
    );
};

export default Header;