import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Services/>
            <Courses/>
        </div>
    );
};

export default Home;