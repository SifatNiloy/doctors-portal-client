import React from 'react';
import Services from './Services';
import Banner from './Banner';
import Info from './Info';
import Exceptional from './Exceptional';
import MakeAppointment from './MakeAppointment';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Exceptional></Exceptional>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;