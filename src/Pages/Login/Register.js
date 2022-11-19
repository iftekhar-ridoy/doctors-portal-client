import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { signUpUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate();

    const handleRegister = data => {
        console.log(data);
        setSignUpError('');

        signUpUser(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
                toast.success('user created successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        navigate('/');
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => {
                console.error(err.message)
                setSignUpError(err.message)
            })
    }


    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 max-w-[350px] shadow-xl rounded-xl p-5'>
                <h2 className='text-xl mb-10 text-center'>Register</h2>

                <form onSubmit={handleSubmit(handleRegister)}>

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
                        <label className="label"> <span className="label-text">Password</span> </label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must include atleast one upperCase letter, special-character and number' }
                            })}
                            className="input input-bordered w-full max-w-xs" />

                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>

                    {signUpError && <p className='text-red-600'>{signUpError}</p>}

                    <input className='btn btn-accent w-full mt-4' value='Register' type="submit" />
                </form>

                <p className='text-sm text-center mt-3'>Already Have an account? <Link to='/login' className='text-secondary hover:underline'>Login</Link> </p>
                <div className='divider'>OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default Register;