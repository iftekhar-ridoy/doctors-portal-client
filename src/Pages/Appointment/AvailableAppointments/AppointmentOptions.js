import React from 'react';

const AppointmentOptions = ({ option, setTreatment }) => {
    const { name, slots } = option;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold text-secondary"> {name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        htmlFor="my-modal-3"
                        className="btn btn-primary bg-gradient-to-r from-primary to-secondary mt-3"
                        onClick={() => setTreatment(option)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;