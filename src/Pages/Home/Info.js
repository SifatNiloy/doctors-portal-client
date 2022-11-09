import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
            <InfoCard cardTitle="Visit Our Location" bgClass="bg-neutral" img={clock}></InfoCard>
            <InfoCard cardTitle="Contact Us" bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
            
        </div>
    );
};

export default Info;