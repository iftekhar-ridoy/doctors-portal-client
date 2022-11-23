import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostkey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    const { data: specialities, isLoading } = useQuery({
        queryKey: ['speciality'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpeciality');
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = (data) => {
        // console.log(data)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostkey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                // console.log(imgData);
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        image: imgData.data.url
                    }

                    // save doctors data to the database
                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);
                            navigate('/dashboard/manage-doctor')
                        })


                }
            })
    }

    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='w-96 p-5 max-w-[350px] shadow-xl rounded-xl mx-auto lg:mx-0'>
            <h3 className='text-3xl mb-5'>Add A Doctor</h3>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span> </label>
                    <input type="text"
                        {...register("name", { required: "Name is required" })}
                        className="input input-bordered w-full max-w-xs" />

                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span> </label>
                    <input type="email"
                        {...register("email", { required: "Email Address is required" })}
                        className="input input-bordered w-full max-w-xs" />

                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Speciality</span> </label>
                    <select
                        {...register("speciality", { required: "Speciality is required" })}
                        className="select input-bordered w-full max-w-xs">
                        {
                            specialities?.map(speciality => <option
                                key={speciality._id}
                                value={speciality.name}
                            >{speciality.name}</option>)
                        }
                    </select>

                    {errors.speciality && <p className='text-red-600'>{errors.speciality?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Image</span> </label>
                    <input type="file"
                        {...register("image", { required: "Image is required" })}
                        className="input input-bordered w-full max-w-xs h-fit p-2" />

                    {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                </div>

                {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}

                <input className='btn btn-accent w-full mt-4 max-w-xs' value='Add Doctor' type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;