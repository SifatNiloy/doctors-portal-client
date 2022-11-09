import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';
import Footer from '../Home/Footer';

const Appoinement = () => {
    const [date, setDate]= useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointments date={date} setDate={setDate}></AvailableAppointments>
            <Footer></Footer>
        </div>
    );
};

export default Appoinement;