import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL, token } from '../../config';
import { toast } from 'react-toastify';
import HashLoader from "react-spinners/HashLoader";
import { authContext } from '../../context/AuthContext'; // Assuming you have an AuthContext defined

const Profile = () => {
    const { user } = useContext(authContext); // Accessing user from context
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        bloodType: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name,
                email: user.email,
                gender: user.gender,
                bloodType: user.bloodType
            });
        }
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const submitHandler = async (event) => {
        event.preventDefault();
    
        if (!user || !user._id) {
            toast.error("User ID not available.");
            return;
        }
    
        // Check if formData is the same as user data
        if (
            formData.name === user.name &&
            formData.email === user.email &&
            formData.gender === user.gender &&
            formData.bloodType === user.bloodType &&
            !formData.password // Assuming password is optional and this logic applies
        ) {
            toast.info("No changes made.");
            return;
        }
    
        setLoading(true);
        try {
            const res = await fetch(`${BASE_URL}/users/${user._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });
    
            const { message } = await res.json();
    
            if (!res.ok) {
                throw new Error(message);
            }
    
            setLoading(false);
            toast.success(message);
            toast.success("Please Relogin to view updated Profile")
            navigate('/users/profile/me');
        } catch (error) {
            toast.error(error.message);
            setLoading(false);
        }
    };
    

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className='mt-10'>
            <form className="py-4 md:py-0" onSubmit={submitHandler}>
                <div className="mb-5">
                    <input
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pt-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                    />
                </div>
                <div className="mb-5">
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={formData.email}
                        readOnly
                        className="w-full pt-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
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
                    />
                </div>
                <div className="mb-5">
                    <input
                        type="text"
                        placeholder="Blood Group"
                        name="bloodType"
                        value={formData.bloodType}
                        onChange={handleInputChange}
                        className="w-full pt-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                    />
                </div>
                <div className='mb-5 flex items-center justify-between'>
                    <label className='text-headingColor font-bold text-[16px] leading-7'>
                        Gender:
                        <select
                            name='gender'
                            value={formData.gender}
                            onChange={handleInputChange}
                            className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                </div>
                <div className='mt-7'>
                    <button
                        disabled={loading}
                        type='submit'
                        className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 hover:bg-green-600 transition-all duration-300'
                    >
                        {loading ? <HashLoader size={35} color="#fff" /> : 'Update Profile'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Profile;
