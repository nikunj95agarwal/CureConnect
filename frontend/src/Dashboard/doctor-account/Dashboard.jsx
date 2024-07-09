import React, { useState } from 'react';
import Loading from '../../components/Loader/Loading';
import Error from '../../components/Error/Error';
import useFetchData from '../../hooks/useFetchData'; // Adjust the import as per your file structure
import Tabs from './Tabs';
import { useContext } from 'react';
import { authContext } from '../../context/AuthContext';
import { BASE_URL } from '../../config'; // Ensure BASE_URL is correctly imported
import doctorimg from "../../assets/images/doctor-img03.png"
import starIcon from "../../assets/images/star.png"
import Profile from './Profile';
import Appointments from './Appointments';
import DoctorAboutLogin from '../../pages/Doctors/DoctorAboutLogin';
const Dashboard = () => {
 
  const { data, loading, error } = useFetchData(`${BASE_URL}/doctors/profile/me`);
  const [tab, setTab] = useState('overview');
  const { user } = useContext(authContext);

  return (
    <section className='pt-40'>
      <div className='max-w-[1170px] px-5 mx-auto'>
        <div className='grid lg:grid-cols-3 gap-[30px] lg:gap-[50px] '>
          <Tabs tab={tab} setTab={setTab} />
          <div className='lg:col-span-2'>
            {data && console.log('data.isApproved:', data.isApproved) && data.isApproved === 'pending' && (
              <div className='flex p-4 mb-4 text-yellow-800 rounded-lg'>
                <span className='sr-only'>Info</span>
                <div className='ml-3 text-sm font-medium'>
                  To get approval please complete your profile
                </div>
              </div>
            )}
            <div className='mt-8'>
              {tab === "overview" && <div className="mt-8">
  {tab === "overview" && (
    <div>
      <div className="flex items-center gap-4 mb-10">
        <figure className="max-w-[200px] max-h-[200px]">
          <img src={doctorimg} alt="" className="w-full" />
        </figure>
        <div>
          <span className="bg-[#CCF0F3] text-irisBlueColor py-1  lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold capitalize">
          {user.specialization ? user.specialization : " Update Profile to add details!"}
          </span>
          <h3 className="text-[22px] leading-9 font-bold text-headingColor mt-3">
            {"Dr. " + user?.name}
          </h3>
          <div className="flex items-center gap-[6px]">
            <span className="flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
              <img src={starIcon} alt="" />
              4.5
            </span>
            <span className="text-textColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
             (233)
            </span>
          </div>
          <p className='text_para font-[15px] lg:max-w-[390px] leading-6'>
          {user.bio ? user.bio : "Your bio will be shown here, Update Profile!"}

          </p>
        </div>
      </div>
      <DoctorAboutLogin name={data.name} about={data.about} qualifications={data.qualifications}
        experiences={data.experiences}
      />
    </div>

  )}
</div>
}
              {tab === "appointments" && <div><Appointments appointments={data.appointments}/></div>}
              {tab === "settings" && <div><Profile/></div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
