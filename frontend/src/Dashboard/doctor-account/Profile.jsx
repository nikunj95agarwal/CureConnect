

import React, { useState, useEffect, useContext } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { BASE_URL } from '../../config';
import { authContext } from '../../context/AuthContext';

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bio: '',
    gender: '',
    specialization: '',
    ticketPrice: 0,
    qualifications: [{ startingDate: "", endingDate: "", degree: "", university: "" }],
    experiences: [{ startingDate: "", endingDate: "", position: "", hospital: "" }],
    timeSlots: [{ day: '', startingTime: '', endingTime: '' }],
    about: ''
  });

  const { user } = useContext(authContext);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (user) {
      setFormData({
        ...formData,
        ...user,
        qualifications: user.qualifications || formData.qualifications,
        experiences: user.experiences || formData.experiences,
        timeSlots: user.timeSlots || formData.timeSlots,
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNestedInputChange = (e, index, type) => {
    const { name, value } = e.target;
    const updatedItems = formData[type].map((item, idx) => idx === index ? { ...item, [name]: value } : item);
    setFormData({ ...formData, [type]: updatedItems });
  };

  const updateProfileHandler = async (e) => {
    e.preventDefault();
  
    // Check if formData is equal to user data
    const isFormDataChanged = JSON.stringify(formData) !== JSON.stringify(user);
  
    if (!isFormDataChanged) {
      toast.info("No changes made.");
      return;
    }
  
    try {
      const res = await fetch(`${BASE_URL}/doctors/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
  
      const result = await res.json();
  
      if (!res.ok) {
        throw new Error(result.message);
      }
  
      // Update the local state with the new user data
      setFormData({
        ...formData,
        ...result.data,
        qualifications: result.data.qualifications || formData.qualifications,
        experiences: result.data.experiences || formData.experiences,
        timeSlots: result.data.timeSlots || formData.timeSlots,
      });
  
      toast.success(result.message);
      toast.info("Re-login to view updated profile");
    } catch (err) {
      console.error("Profile update error:", err);
      toast.error(err.message);
    }
  };

  const addItem = (key, item) => {
    setFormData(prevFormData => ({ ...prevFormData, [key]: [...prevFormData[key], item] }));
  };

  const deleteItem = (key, index) => {
    setFormData(prevFormData => ({ ...prevFormData, [key]: prevFormData[key].filter((_, i) => i !== index) }));
  };

  const addQualification = (e) => {
    e.preventDefault();
    addItem('qualifications', { startingDate: "", endingDate: "", degree: "", university: "" });
  };

  const deleteQualification = (e, index) => {
    e.preventDefault();
    deleteItem('qualifications', index);
  };

  const addExperience = (e) => {
    e.preventDefault();
    addItem('experiences', { startingDate: "", endingDate: "", position: "", hospital: "" });
  };

  const deleteExperience = (e, index) => {
    e.preventDefault();
    deleteItem('experiences', index);
  };

  const addTimeSlot = (e) => {
    e.preventDefault();
    addItem('timeSlots', { day: '', startingTime: '', endingTime: '' });
  };

  const deleteTimeSlot = (e, index) => {
    e.preventDefault();
    deleteItem('timeSlots', index);
  };
  return (
    <div>
      <h2 className='text-headingColor font-bold text-[24px] leading-9 mb-10'>Profile Information</h2>
      <form>
        <div className='mb-5'>
          <p className='form_label'>Name*</p>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            placeholder='Full Name'
            className='form_input'
          />
        </div>
        <div className='mb-5'>
          <p className='form_label'>Email*</p>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            placeholder='Email ID'
            className='form_input'
            readOnly
          />
        </div>
        <div className='mb-5'>
          <p className='form_label'>Phone*</p>
          <input
            type='number'
            name='phone'
            value={formData.phone}
            onChange={handleInputChange}
            placeholder='Phone Number'
            className='form_input'
          />
        </div>
        <div className='mb-5'>
          <p className='form_label'>Bio*</p>
          <input
            type='text'
            name='bio'
            value={formData.bio}
            onChange={handleInputChange}
            placeholder='Enter Bio'
            className='form_input'
            maxLength={100}
          />
        </div>
        <div className='mb-5'>
          <div className='grid grid-cols-3 gap-5 mb-[30px]'>
            <div>
              <p className='form_label'>Gender</p>
              <select
                name='gender'
                value={formData.gender}
                onChange={handleInputChange}
                className='form_input py-3.5'
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <p className='form_label'>Specialization*</p>
              <select
                name='specialization'
                value={formData.specialization}
                onChange={handleInputChange}
                className='form_input py-3.5'
              >
                <option value="">Select</option>
                <option value="surgeon">Surgeon</option>
                <option value="neurologist">Neurologist</option>
                <option value="dermatologist">Dermatologist</option>
              </select>
            </div>
            <div>
              <p className='form_label'>Ticket Price</p>
              <input
                type='number'
                name='ticketPrice'
                value={formData.ticketPrice}
                onChange={handleInputChange}
                placeholder='Enter Fees'
                className='form_input py-3'
              />
            </div>
          </div>
        </div>
        <div className="mb-5">
          <p className="form_label">Qualifications</p>
          {formData.qualifications.map((item, index) => (
            <div key={index} className="grid grid-cols-2 gap-5 mb-3">
              <div>
                <p className="form_label">Starting Date</p>
                <input
                  type="date"
                  name="startingDate"
                  value={item.startingDate}
                  onChange={(e) => handleNestedInputChange(e, index, 'qualifications')}
                  className="form_input"
                />
              </div>
              <div>
                <p className="form_label">Ending Date</p>
                <input
                  type="date"
                  name="endingDate"
                  value={item.endingDate}
                  onChange={(e) => handleNestedInputChange(e, index, 'qualifications')}
                  className="form_input"
                />
              </div>
              <div>
                <p className="form_label">Degree*</p>
                <input
                  type="text"
                  name="degree"
                  value={item.degree}
                  onChange={(e) => handleNestedInputChange(e, index, 'qualifications')}
                  className="form_input"
                />
              </div>
              <div>
                <p className="form_label">University*</p>
                <input
                  type="text"
                  name="university"
                  value={item.university}
                  onChange={(e) => handleNestedInputChange(e, index, 'qualifications')}
                  className="form_input"
                />
                <button
                  onClick={(e) => deleteQualification(e, index)}
                  className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer'>
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
          <button onClick={addQualification} className='bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer'>
            Add Qualification
          </button>
        </div>
        <div className="mb-5">
          <p className="form_label">Experiences</p>
          {formData.experiences.map((item, index) => (
            <div key={index} className="grid grid-cols-2 gap-5 mb-3">
              <div>
                <p className="form_label">Starting Date</p>
                <input
                  type="date"
                  name="startingDate"
                  value={item.startingDate}
                  onChange={(e) => handleNestedInputChange(e, index, 'experiences')}
                  className="form_input"
                />
              </div>
              <div>
                <p className="form_label">Ending Date</p>
                <input
                  type="date"
                  name="endingDate"
                  value={item.endingDate}
                  onChange={(e) => handleNestedInputChange(e, index, 'experiences')}
                  className="form_input"
                />
              </div>
              <div>
                <p className="form_label">Position*</p>
                <input
                  type="text"
                  name="position"
                  value={item.position}
                  onChange={(e) => handleNestedInputChange(e, index, 'experiences')}
                  className="form_input"
                />
              </div>
              <div>
                <p className="form_label">Hospital*</p>
                <input
                  type="text"
                  name="hospital"
                  value={item.hospital}
                  onChange={(e) => handleNestedInputChange(e, index, 'experiences')}
                  className="form_input"
                />
                <button
                  onClick={(e) => deleteExperience(e, index)}
                  className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer'>
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
          <button onClick={addExperience} className='bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer'>
            Add Experience
          </button>
        </div>
        <div className="mb-5">
          <p className="form_label">Time Slots</p>
          {formData.timeSlots.map((item, index) => (
            <div key={index} className="grid grid-cols-3 gap-5 mb-3">
              <div>
                <p className="form_label">Day*</p>
                <select
                  name='day'
                  value={item.day}
                  onChange={(e) => handleNestedInputChange(e, index, 'timeSlots')}
                  className='form_input py-3.5'
                >
                  <option value=''>Select</option>
                  <option value='Monday'>Monday</option>
                  <option value='Tuesday'>Tuesday</option>
                  <option value='Wednesday'>Wednesday</option>
                  <option value='Thursday'>Thursday</option>
                  <option value='Friday'>Friday</option>
                  <option value='Saturday'>Saturday</option>
                  <option value='Sunday'>Sunday</option>
                </select>
              </div>
              <div>
                <p className="form_label">Starting Time</p>
                <input
                  type="time"
                  name="startingTime"
                  value={item.startingTime}
                  onChange={(e) => handleNestedInputChange(e, index, 'timeSlots')}
                  className="form_input"
                />
              </div>
              <div>
                <p className="form_label">Ending Time</p>
                <div className='flex'>
                  <input
                    type="time"
                    name="endingTime"
                    value={item.endingTime}
                    onChange={(e) => handleNestedInputChange(e, index, 'timeSlots')}
                    className="h-14 form_input"
                  />
                  <button
                    onClick={(e) => deleteTimeSlot(e, index)}
                    className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 ml-2 mb-[30px] cursor-pointer'>
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button onClick={addTimeSlot} className='bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer'>
            Add Time Slot
          </button>
        </div>
        <div className='mb-5'>
          <p className='form_label'>About*</p>
          <textarea
            name='about'
            className='form_input'
            rows={5}
            value={formData.about}
            placeholder='Write about yourself'
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className='mt-7'>
          <button type='submit' onClick={updateProfileHandler} className='bg-primaryColor text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg hover:bg-green-600 transition-all duration-300'>
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
