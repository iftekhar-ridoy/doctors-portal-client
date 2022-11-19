import React from 'react';
import img1 from '../../../assets/images/doctor.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import './MakeAppointment.css';
const MakeAppointment = () => {
    return (
        <section className='bgMakeAppointment mt-32 lg:h-[508px] -mx-5'>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img1} alt='makeAppointment' className='-mt-36 hidden md:block lg:w-[636px]' />
                    <div className='w-full'>
                        <h4 className='text-secondary mb-5'>Appointment</h4>
                        <h1 className="text-4xl font-bold mb-5 text-white">Make an appointment Today</h1>
                        <p className="font-semibold text-white mb-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English.Many desktop publishing packages and web page.</p>
                        <PrimaryButton>Get Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;