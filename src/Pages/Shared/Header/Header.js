import React from 'react';
import {  Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../Images/logo/logo.png'
import './Header.css';
import icons from '../../../Images/login-svgrepo-com.svg'
const Header = () => {
    return (
        <div className="container header-bg">
           <Navbar collapseOnSelect expand="lg"    variant="light">
                <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                   
                    </Nav>
                    <Nav>
                    <Nav.Link className="header-nav-menu me-3">Home</Nav.Link>
                    <Nav.Link  className="header-nav-menu me-3">
                       courses
                    </Nav.Link>
                    <Nav.Link className="header-nav-menu">Login <img className='icons' src={icons} alt="" />
                            
                        </Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;