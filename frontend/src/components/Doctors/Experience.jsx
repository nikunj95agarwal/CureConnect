import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import { BASE_URL } from '../../config';

const DoctorAbout = ({ doctorData = {} }) => {
  const { id } = useParams();
  const { data: doctor = doctorData, loading, error } = useFetchData(`${BASE_URL}/doctors/${id}`);

  const {
    name = '',
    qualifications = [],
    experiences = [],
    bio = '',
    about = '',
    specialization = '',
    ticketPrice = 0,
    averageRating = 0,
    totalRating = 0
  } = doctor || {};

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      
      
      <div className="">
        <ul className=' md:p-5'>
          {experiences.length > 0 ? (
            experiences.map((item, index) => (
              <li key={index} className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 border border-red-300 mb-[30px] py-[30px] px-5 bg-yellow-400 rounded-2xl'>
                <div>
                  <span className='text-green-800 text-[15px] leading-6 font-semibold'>
                    {item.startingDate ? `${item.startingDate} - ${item.endingDate}` : "Update Profile"}
                  </span>
                  <p className='text-[16px] leading-6 font-medium'>
                    {item.position || "Position not added"}
                  </p>
                </div>
                <p className='text-[16px] leading-6 font-medium text-textColor'>
                  {item.hospital || "Hospital Not Added"}
                </p>
              </li>
            ))
          ) : (
            <li className='border border-red-300 mb-[30px] py-[30px] px-5 bg-yellow-400 rounded-2xl'>
              Update Profile to add Experience
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
