import React from 'react';
import img1 from '../../assets/images/fluoride.png';
import img2 from '../../assets/images/cavity.png';
import img3 from '../../assets/images/whitening.png';
import Service from './Service';


const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Fluoride Treatment',
            icon: img1,
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 2,
            title: 'Cavity Filling',
            icon: img2,
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 3,
            title: 'Teeth Whitening',
            icon: img3,
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
    ]
    return (
        <div className='mt-16'>
            <div className='text-center mb-16'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our Services</h3>
                <h2 className='text-3xl'>Services we provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;