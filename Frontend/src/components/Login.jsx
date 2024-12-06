import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";


function Login() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const modalRef = useRef(null);
    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        };

        try {
            const response = await axios.post("/user/login", userInfo);
            if (response.data) {
                toast.success("Logged in successfully");
                reset();
                closeModal(); 
                setTimeout(()=>{ localStorage.setItem("Users", JSON.stringify(response.data));
                    window.location.reload();},1000)
               
            }
        } catch (err) {
            toast.error("Error: " + (err.response?.data?.message || "Something went wrong"));
            setTimeout(()=>{},2000)
        }
    };

    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal" ref={modalRef}>
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Link to="/"
                            type="button"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black"
                            onClick={closeModal}
                        >
                            ✕
                        </Link>
                        <h3 className="font-bold text-lg text-black">Login</h3>
                        <div className="mt-4 font-light text-black space-y-2">
                            <span>Email</span><br/>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-500">Email is required</span>}
                        </div>
                        <div className="mt-8 font-light text-black space-y-2">
                            <span>Password</span>
                            <br/>
                            <input
                                type="password"
                                placeholder="Enter your Password"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className="text-red-500">Password is required</span>}
                        </div>
                        <div className="flex justify-around mt-6">
                            <button
                                type="submit"
                                className="bg-blue-600 -ml-[2vw] text-white rounded-md px-3 py-1 hover:bg-blue-900 duration-200"
                            >
                                Login
                            </button>
                            <p className="mt-1 text-lg font-normal text-black">
                                Not registered yet?{" "}
                                <Link to="/signup" className="underline text-blue-500">
                                    Signup
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;
