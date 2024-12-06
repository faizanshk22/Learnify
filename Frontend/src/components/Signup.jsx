import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Login from './Login';
import axios from "axios";
import toast from 'react-hot-toast';
import { useAuth } from './AuthProvider'; // Import useAuth hook

function Signup() {
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    const { setAuthUser } = useAuth(); // Accessing the setAuthUser function

    const {
        register,
        handleSubmit,
        reset, // Import reset function
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        };

        try {
            const response = await axios.post('/user/signup', userInfo);
            if (response.data) {
                toast.success('Signed up successfully');
                navigate(from, { replace: true });
                window.location.reload();
                reset();
                localStorage.setItem('Users', JSON.stringify(response.data));
                setAuthUser({ user: response.data }); // Mark user as logged in
            }
        } catch (err) {
            toast.error('Error: ' + (err.response?.data?.message || 'Something went wrong'));
        }
    };

    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <div className="w-[600px]">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Link
                                to="/"
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black"
                            >
                                ✕
                            </Link>
                            <h3 className="font-bold text-lg text-black">Signup</h3>

                            <div className="mt-4 font-light space-y-2 text-lg text-black">
                                <span>Name <span className='text-red-500'>*</span></span>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-80 px-3 py-1 border rounded-md outline-none"
                                    {...register('fullname', { required: 'Name is required' })}
                                />
                                <br />
                                {errors.fullname && (
                                    <span className="text-red-500">{errors.fullname.message}</span>
                                )}
                            </div>

                            <div className="mt-4 font-light space-y-2 text-lg text-black">
                                <span>Email <span className='text-red-500'>*</span></span>
                                <br />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-80 px-3 py-1 border rounded-md outline-none"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: 'Invalid email address',
                                        },
                                    })}
                                />
                                <br />
                                {errors.email && (
                                    <span className="text-red-500">{errors.email.message}</span>
                                )}
                            </div>

                            <div className="mt-4 font-light space-y-2 text-lg text-black">
                                <span>Password <span className='text-red-500'>*</span></span>
                                <br />
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-80 px-3 py-1 border rounded-md outline-none"
                                    {...register('password', {
                                        required: 'Password is required',
                                        minLength: {
                                            value: 6,
                                            message: 'Password must be at least 6 characters long',
                                        },
                                    })}
                                />
                                <br />
                                {errors.password && (
                                    <span className="text-red-500">{errors.password.message}</span>
                                )}
                            </div>

                            <div className="flex justify-around mt-6">
                                <button
                                    type="submit"
                                    className="bg-blue-600 -ml-[2vw] md:-ml-[2vw] text-white text-lg rounded-md px-3 py-1 hover:bg-blue-900 duration-200"
                                >
                                    Signup
                                </button>

                                <p className="mt-1 text-lg text-black">
                                    Have an account?{' '}
                                    <Link to="/"
                                        className="underline text-blue-500 cursor-pointer"
                                        // onClick={() => document.getElementById('my_modal_3').showModal()}
                                    >
                                        cancel
                                        {/* Login */}
                                    </Link>{' '}
                                    <Login />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
