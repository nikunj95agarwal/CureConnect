import React, { useState } from 'react';
import signUpImg from "../assets/images/signup.gif";
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../config';
import { toast } from 'react-toastify';
import HashLoader from "react-spinners/HashLoader";

const Signup = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        role: "patient",
        specialization: "", // Added state for specialization
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        if (e.target.type === 'select-one') {
            setFormData({ ...formData, [e.target.name]: e.target.options[e.target.selectedIndex].value });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const submitHandler = async (event) => {
        event.preventDefault();

        // Check if gender is not selected
        if (formData.gender === "" || formData.gender === "select-gender") {
            toast.info("Please select a gender");
            return;
        }
        
        setLoading(true);
        try {
            const res = await fetch(`${BASE_URL}/auth/register`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const { message } = await res.json();

            if (!res.ok) {
                throw new Error(message);
            }

            setLoading(false);
            toast.success(message);
            navigate('/login');
        } catch (error) {
            toast.error(error.message);
            setLoading(false);
        }
    };

    return (
        <section className='px-5 xl:px-0 pt-40'>
            <div className='max-w-[1170px] mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    {/* img */}
                    <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
                        <figure className='rounded-l-lg'>
                            <img src={signUpImg} alt='' className='w-full rounded-l-lg' />
                        </figure>
                    </div>
                    {/* form */}
                    <div className='rounded-l-lg lg:pl-16 py-10'>
                        <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
                            Create An <span className='text-primaryColor'>Account</span>
                        </h3>
                        <form className="py-4 md:py-0" onSubmit={submitHandler}>
                            <div className="mb-5">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full pt-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                                    required
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full pt-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                                    required
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full pt-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                                    required
                                />
                            </div>
                            <div className='mb-5 flex items-center justify-between'>
                                <label className='text-headingColor font-bold text-[16px] leading-7'>
                                    Are You a:
                                    <select name='role' value={formData.role} onChange={handleInputChange} className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                                        <option value="patient">Patient</option>
                                        <option value="doctor">Doctor</option>
                                    </select>
                                </label>
                                
                            
                            <div className=' flex items-center justify-between'>
                                <label className='text-headingColor font-bold text-[16px] leading-7'>
                                    Gender:
                                    <select name='gender' value={formData.gender} onChange={handleInputChange} className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                                        <option value="">Select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </label>
                            </div></div>
                            {formData.role === "doctor" && (
                                    <label className='text-headingColor font-bold text-[16px] leading-7'>
                                        Specialization:
                                        <select name='specialization' value={formData.specialization} onChange={handleInputChange} className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                                        <option value="">Select</option>
                                        <option value="surgeon">Surgeon</option>
                                         <option value="neurologist">Neurologist</option>
                                         <option value="dermatologist">Dermatologist</option> 
                                        </select>
                                    </label>
                                )}
                            <div className='mt-7'>
                                <button
                                    disabled={loading}
                                    type='submit'
                                    className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>
                                    {loading ? <HashLoader size={35} color="#fff" /> : 'Sign Up'}
                                </button>
                            </div>
                            <p className='mt-5 text-textColor text-center'>
                                Already have an account?
                                <Link
                                    to="/login"
                                    className='text-primaryColor font-medium ml-1'>
                                    Login
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;
