import { useContext, useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { authContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Tabs = ({ tab, setTab }) => {
  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  return (
    <div>
      <span className='lg:hidden' onClick={toggleMenu}>
        {/* Toggle menu icon */}
        <BiMenu className='w-6 h-6 cursor-pointer' />
      </span>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='lg:hidden flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md'>
          {/* Tab navigation buttons */}
          <button
            onClick={() => {
              setTab('overview');
              toggleMenu(); // Close menu on tab click
            }}
            className={`${
              tab === 'overview'
                ? 'bg-indigo-100 text-primaryColor'
                : 'bg-transparent text-headingColor'
            } w-full btn mt-0 rounded-md`}
          >
            Overview
          </button>
          <button
            onClick={() => {
              setTab('appointments');
              toggleMenu(); // Close menu on tab click
            }}
            className={`${
              tab === 'appointments'
                ? 'bg-indigo-100 text-primaryColor'
                : 'bg-transparent text-headingColor'
            } w-full btn mt-0 rounded-md`}
          >
            Appointments
          </button>
          <button
            onClick={() => {
              setTab('settings');
              toggleMenu(); // Close menu on tab click
            }}
            className={`${
              tab === 'settings'
                ? 'bg-indigo-100 text-primaryColor'
                : 'bg-transparent text-headingColor'
            } w-full btn mt-0 rounded-md`}
          >
            Profile
          </button>
          {/* Logout and Delete Account buttons */}
          <div className='mt-[20px] md:mt-[40px] w-full'>
            <button
              onClick={handleLogout}
              className='w-full bg-primaryColor hover:bg-blue-800 p-3 text-[16px] leading-7 rounded-md text-white'
            >
              Logout
            </button>
            <button className='w-full bg-red-600 p-3 text-[16px] leading-7 hover:bg-red-800 rounded-md text-white mt-4'>
              Delete Account
            </button>
          </div>
        </div>
      )}
      {/* Desktop Menu */}
      <div className='hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md'>
        {/* Tab navigation buttons */}
        <button
          onClick={() => setTab('overview')}
          className={`${
            tab === 'overview'
              ? 'bg-indigo-100 text-primaryColor'
              : 'bg-transparent text-headingColor'
          } w-full btn mt-0 rounded-md`}
        >
          Overview
        </button>
        <button
          onClick={() => setTab('appointments')}
          className={`${
            tab === 'appointments'
              ? 'bg-indigo-100 text-primaryColor'
              : 'bg-transparent text-headingColor'
          } w-full btn mt-0 rounded-md`}
        >
          Appointments
        </button>
        <button
          onClick={() => setTab('settings')}
          className={`${
            tab === 'settings'
              ? 'bg-indigo-100 text-primaryColor'
              : 'bg-transparent text-headingColor'
          } w-full btn mt-0 rounded-md`}
        >
          Profile
        </button>
        {/* Logout and Delete Account buttons */}
        <div className='mt-[20px] md:mt-[40px] w-full'>
          <button
            onClick={handleLogout}
            className='w-full bg-primaryColor hover:bg-blue-800 p-3 text-[16px] leading-7 rounded-md text-white'
          >
            Logout
          </button>
          <button className='w-full bg-red-600 p-3 text-[16px] leading-7 hover:bg-red-800 rounded-md text-white mt-4'>
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
