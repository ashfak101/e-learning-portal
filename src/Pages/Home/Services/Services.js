import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import user from '../../../Images/ServiceImg/user 1.png'
import goal from '../../../Images/ServiceImg/goal 1.png'
import mbr from '../../../Images/ServiceImg/responsive-symbol-with-a-widescreen-monitor-a-cellphone-and-a-tablet 1.png'
import group from '../../../Images/ServiceImg/Group 3.png'
const Services = () => {
    return (
        <div>
            <h3 className='pb-4 fs-2'>Why Learning With Us</h3>
            <Container className='mt-4'>
                <Row>
                    <Col xs='12' md='3'>
                        <img src={user} alt="" />
                        <h6 className='fw-bold mt-4'>Learn The Latest Skills</h6>
                        <p>Like Business Analytic Graphic Design, Python, And More </p>

                    </Col>
                    <Col xs='12' md='3'>
                        <img src={goal} alt="" />
                        <h6 className='fw-bold mt-4'>Get Ready For A Career</h6>
                        <p>In High-Demand Fields Like IT, AI And Cloud Engineering</p>
                    </Col>
                    <Col xs='12' md='3'>
                       <img src={mbr} alt="" />
                       <h6 className='fw-bold mt-4'>Available On All Devices</h6>
                       <p>Access Course Through Your Tablet,Smartphone,Computer</p>
                    </Col>
                    <Col xs='12' md='3'>
                        <img src={group} alt="" />
                        <h6 className='fw-bold mt-4'>24/7 Support</h6>
                        <p>Our Support Team is Available Through Live Chat and Emails</p>
                    </Col>
                   
                </Row>
            </Container>

        </div>
    );
};

export default Services;