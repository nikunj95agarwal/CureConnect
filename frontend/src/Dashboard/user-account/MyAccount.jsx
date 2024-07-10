import { useState, useContext } from "react";
import userImg from "../../assets/images/user-icon.png";
import { authContext } from "../../context/AuthContext";
import MyBookings from "./MyBookings";
import Profile from "./Profile";
import { BASE_URL } from "../../config";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import useFetchData from "../../hooks/useFetchData";

const MyAccount = () => {
  const { dispatch } = useContext(authContext);
  const [tab, setTab] = useState('bookings'); // Set default tab to 'bookings'
  

  const { data: userData, loading, error } = useFetchData(`${BASE_URL}/users/profile/me`);

  console.log(userData, "userData");

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <section className="pt-20">
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loading />}
        {error && !loading && <Error errMessage={error} />}
        <div className="grid md:grid-cols-3 gap-10">
          <div className="pb-[50px] px-[30px] mt-[20px] rounded-md">
            <div className="text-center mt-4">
              <div className="flex justify-center items-center">
                <img
                  src={userImg}
                  className="w-20 h-20 md:w-50 md:h-50 lg:w-60 lg:h-60 rounded-full border-[1px] border-slate-700 p-0.5 hover:border-blue-400 hover:bg-yellow-200 hover:border-[3px]"
                  alt=""
                />
              </div>
              <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                {userData.name}
              </h3>
              <p className="text-textColor text-[15px] leading-6 font-medium">
              {userData.email}
              </p>
              <p className="text-textColor text-[15px] leading-6 font-medium">
                Blood Type:<span className="ml-2 text-headingColor text-[22px] leading-8" >
                {userData.bloodType || "N/A"}
                </span>

              </p>
            </div>
            <div className="mt-[20px] md:mt-[40px] ">
              <button
                onClick={handleLogout}
                className="w-full bg-primaryColor hover:bg-blue-800 p-3 text-[16px] leading-7 rounded-md text-white"
              >
                Logout
              </button>
              <button className="w-full bg-red-600 p-3 text-[16px] leading-7 hover:bg-red-800 rounded-md text-white mt-4">
                Delete Account
              </button>
            </div>
          </div>
          <div className="md:col-span-2 md:px-[30px] pt-20">
            <div className="flex justify-center">
              <button
                onClick={() => setTab('bookings')}
                className={`${tab === "bookings" && "bg-primaryColor text-white font-normal"} p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
              >
                My Bookings
              </button>
              <button
                onClick={() => setTab('settings')}
                className={`${tab === "settings" && "bg-primaryColor text-white font-normal"} p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
              >
                Profile Settings
              </button>
            </div>
            {tab === 'bookings' && <MyBookings />}
            {tab === 'settings' && <Profile user ={userData} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
