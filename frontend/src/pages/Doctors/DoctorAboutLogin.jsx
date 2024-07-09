import React, { useContext } from 'react';
import { authContext } from '../../context/AuthContext';

const DoctorAboutLogin = ({ doctorData = {} }) => {
  const { user } = useContext(authContext);

  // Use nullish coalescing to ensure values are defined
  const name = user?.name ?? doctorData.name ?? 'Name not available';
  const about = user?.about ?? doctorData.about ?? 'About information not available';
  const qualifications = user?.qualifications ?? doctorData.qualifications ?? [];
  const experience = user?.experiences ?? doctorData.experiences ?? [];

  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About 
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            {"Dr." + name}
          </span>
        </h3>
        <p className="text__para">
          {about ? about : "Add about yourself, Update Profile!"}
        </p>
      </div>
      
      <div className="mt-1">
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>
        <ul className='pt-4 md:px-5'>
          {qualifications.length > 0 ? (
            qualifications.map((item, index) => (
              <li key={index} className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 border border-red-300 mb-[30px] py-[30px] px-5 bg-yellow-400 rounded-2xl'>
                <div>
                  <span className='text-red-800 text-[15px] leading-6 font-semibold'>
                    {item.startingDate ? `${item.startingDate} - ${item.endingDate}` : "Update Profile to add Qualifications"}
                  </span>
                  <p className='text-[16px] leading-6 font-medium uppercase'>
                    {item.degree || "Degree not added"}
                  </p>
                </div>
                <p className='text-[16px] leading-6 font-medium text-textColor'>
                  {item.university || "University not added"}
                </p>
              </li>
            ))
          ) : (
            <li className='border border-red-300 mb-[30px] py-[30px] px-5 bg-yellow-400 rounded-2xl'>
              Update Profile to add Qualifications
            </li>
          )}
        </ul>
      </div>
      
      <div className="mt-1">
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Experience</h3>
        <ul className='pt-4 md:p-5'>
          {experience.length > 0 ? (
            experience.map((item, index) => (
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

export default DoctorAboutLogin;
