import React from 'react';
import img1 from '../../../assets/images/treatment.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const Treatment = () => {
    return (
        <div className="hero mt-28">
            <div className="hero-content flex-col lg:flex-row ">
                <img className='lg:w-[458px] rounded-lg' src={img1} alt='treatment' />
                <div className='lg:w-[497px] lg:ml-20'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Show More</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Treatment;