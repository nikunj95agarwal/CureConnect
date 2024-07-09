import React, { useState } from 'react';
import doctorImg from "../../assets/images/doctor-img02.png";
import starIcon from "../../assets/images/star.png";
import DoctorAbout from './DoctorAboutLogin';
import Experience from '../../components/Doctors/Experience';
import SidePanel from '../../components/Doctors/SidePanel';
import { useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import { BASE_URL } from '../../config';
import DoctorAboutList from './DoctorAboutList';
const DoctorDetails = () => {
  const [tab, setTab] = useState('about');
  const {id} = useParams();
  const{data:doctor, loading,error} = useFetchData(`${BASE_URL}/doctors/${id}`)
  
  const {name,qualification,experience,timeSlots,bio,about,specialization,ticketPrice, avgerageRating, totalRating} = doctor
  return (
    <section className="pt-40">
      <div className="max-w-[1170px] px-5 mx-auto">
      {loading && <loading/>}
      {error && <error/>}
        {!loading && !error && 
        (<div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img src={doctorImg} alt="Doctor" className="w-full" />
              </figure>
              <div>
                <span className="bg-[#CCF0F3] text-irisBlueColor capitalize py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                  {specialization}
                </span>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                  {"Dr. " + name}
                </h3>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                    <img src={starIcon} alt="Rating" /> {avgerageRating}
                  </span>
                  <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                    {(totalRating)}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-[50px] border-b border-solid border-primaryColor">
              <button
                onClick={() => setTab('about')}
                className={`
                  ${tab === 'about' && 'border-b border-solid border-primaryColor'}
                  py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold
                `}
              >
                About
              </button>
              <button
                onClick={() => setTab('Experience')}
                className={`
                  ${tab === 'Experience' && 'border-b border-solid border-primaryColor'}
                  py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold
                `}
              >
                Experience
              </button>
            </div>

            <div className="mt-[50px]">
              {tab === 'about' && <DoctorAboutList />}
              {tab === 'Experience' && <Experience />}
            </div>
          </div>
          <div className="md:col-span-1 md:order-last order-last">
            <SidePanel doctorId={doctor._id} ticketPrice = {ticketPrice} timeSlots={timeSlots} />
          </div>
        </div>)}
      </div>
    </section>
  );
};

export default DoctorDetails;
