import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Courses.css'
const Courses = () => {
    return (
        <div className='bg-course'>
            <Container>
                <Row>
                    <Col xs='12' md='5'>
                        <h3>Check Out Our Popular Courses</h3>
                        <p>Explore Now Skills, Deepen Existing Passions And Get Lost In Creativity. What You Find Just Might Surprise And Inspire You</p>
                        <button className='btn course-btn'>See All Courses</button>
                    </Col>
                    <Col xs='12' md='7'></Col>
                    
                </Row>
            </Container>
        </div>
    );
};

export default Courses;