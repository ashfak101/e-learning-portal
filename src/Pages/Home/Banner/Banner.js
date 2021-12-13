import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bannerImg from '../../../Images/Banner/e-learning 1@2x.png';
import './Banner.css'
const Banner = () => {
    return (
        <>
            <div >
            <Container className=' '>
                <Row  className="align-items-lg-center">
                    <Col xs="12" md="7" lg="6" className='text-start sm:text-center ps-2'>
                        <h3 className='fs-1 lh-sm banner-text d' >Get Yourself An Upgrade</h3>
                        <h4 className='fs-4 lh-sm'>Gain A New Skill, Get A New Job</h4>
                        <p className=' lh-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem rem officia blanditiis quo sunt, dignissimos labore aperiam cupiditate aliquam? Voluptatibus, ut repudiandae velit odit accusantium numquam cum vel omnis obcaecati.Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem rem officia blanditiis</p>
                    </Col>
                    <Col xs="12" md="6">
                        <img className='sm:img-fluid w-100' src={bannerImg} alt="" />
                    </Col>
                </Row>
            </Container>
        
            </div>
        
        </>
    );
};

export default Banner;