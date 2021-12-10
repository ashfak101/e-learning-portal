import React from 'react';
import {  Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../Images/logo/logo.png'
const Header = () => {
    return (
        <div className="container">
           <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                   
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets">Home</Nav.Link>
                    <Nav.Link >
                       courses
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;