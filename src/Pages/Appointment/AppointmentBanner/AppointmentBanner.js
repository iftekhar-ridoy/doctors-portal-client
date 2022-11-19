import React from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectDate, setSelectDate }) => {
    return (
        <header>
            <div className="hero bgBannerImg">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div className='mr-6'>
                        <DayPicker
                            mode='single'
                            selected={selectDate}
                            onSelect={setSelectDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;