import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../Context/AuthProvider';
import toast from 'react-hot-toast';



const BookingModal = ({ treatment, selectDate, setTreatment, refetch }) => {
    const { name, slots } = treatment;
    const date = format(selectDate, 'PP');
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const fullname = form.fullname.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: fullname,
            slot,
            email,
            phone
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking confirmed');
                    refetch();
                }
                else {
                    toast.error(data.message);
                }
            })

    }

    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-6 mt-10'>
                        <input type="text" value={date} disabled className="input input-bordered w-full" />

                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, idx) => <option
                                    key={idx}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>

                        <input name='fullname' type="text"
                            placeholder="Full Name" defaultValue={user?.displayName} className="input input-bordered w-full" required />
                        <input name='email' type="email" placeholder="Email Address" defaultValue={user?.email} disabled className="input input-bordered w-full" required />
                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full" required />
                        <input type="submit" value="Submit" className='btn btn-accent w-full' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;