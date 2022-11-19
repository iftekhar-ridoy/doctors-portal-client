import React from 'react';
import bgContact from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const ContactUs = () => {
    return (
        <section style={{
            backgroundImage: `url(${bgContact})`,
        }}
            className='py-16 -mx-5'
        >
            <div className='text-center'>
                <h3 className='text-primary font-bold'>Contact Us</h3>
                <h2 className='text-4xl text-white'>Stau connected with us</h2>
            </div>
            <div className='flex flex-col justify-center items-center mt-10'>
                <div className='mb-5 w-80 lg:w-[450px]'>
                    <input type="email" name='email' placeholder="Email Address" className="input w-full text-lg" required />
                </div>
                <div className='mb-5 w-80 lg:w-[450px]'>
                    <input type="text" name='subject' placeholder="Subject" className="input w-full text-lg" required />
                </div>
                <div className='mb-5 w-80 lg:w-[450px] h-32'>
                    <textarea type='text' name='comment' className="textarea w-full h-full text-lg" placeholder="Your Message" required></textarea>
                </div>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </section>
    );
};

export default ContactUs;
