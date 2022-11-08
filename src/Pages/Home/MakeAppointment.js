import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section style={{background:`url(${appointment})`}} className='flex justify-center items-center mt-20'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Make Appointment</h3>
                <h2 className='text-3xl text-white font-bold'>Make an appointment today</h2>
                <p className='text-white'>To book a Medical Home Visit or Online Consultation you can simply contact us every day from 08.30 am to 05.30 pm, at 020 36375657, or through our website form or chat. We will take care of your request and arrange the home appointment as soon as possible and according to the very first availability and your schedule.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;