import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentOptions from './AppointmentOptions';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../Shared/Loader/Loader';


const AvailableAppointments = ({ selectDate }) => {

    const [treatment, setTreatment] = useState(null);
    const date = format(selectDate, 'PP');

    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            .then(res => res.json())
    });

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <section className='lg:-mt-14 mt-6'>
            <p className='text-secondary text-xl text-center mx-14'>Available Appointments on {format(selectDate, 'PP')} </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mt-24 mt-14 lg:mx-12 mx-7'>
                {
                    appointmentOptions.map(option => <AppointmentOptions
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></AppointmentOptions>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selectDate={selectDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;