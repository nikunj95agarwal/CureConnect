import React, { useRef, useEffect, useContext, useState } from 'react';
import logo from "../../assets/images/logo.png";
import userImg from "../../assets/images/user-icon.png";
import doctorimg from "../../assets/images/doctor-img03.png";
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";
import { authContext } from '../../context/AuthContext';
import "../../../src/App.css";

const navLinks = [
  { path: '/home', display: 'Home' },
  { path: '/doctors', display: 'Doctors' },
  { path: '/services', display: 'Services' },
  { path: '/contact', display: 'Contact' },
];

const Header = () => {
  const headerRef = useRef(null);
  const { user, role, token } = useContext(authContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility

  const handleScroll = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add('sticky_header');
    } else {
      headerRef.current.classList.remove('sticky_header');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close menu
  };

  return (
    <header className='header flex items-center bg-white fixed w-full z-10' ref={headerRef}>
      <div className='container mx-auto flex items-center justify-between py-4'>
        {/* Logo */}
        <div>
          <Link to="/home">
            <img className='logo' src={logo} alt='Logo' width="254px" height="34px" />
          </Link>
        </div>
        {/* Menu */}
        <div className='hidden md:flex items-center space-x-8'>
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-primaryColor text-lg font-semibold"
                  : "text-textColor text-lg font-medium hover:text-primaryColor"
              }
              onClick={closeMenu} // Close menu on item click
            >
              {link.display}
            </NavLink>
          ))}
        </div>
        {/* Nav Right */}
        <div className='flex items-center gap-4'>
          {token && user ? (
            <div className='flex items-center'>
              <Link to={role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'} className='flex items-center gap-2'>
                <figure className='w-12 h-12 rounded-full'>
                  <img
                    src={user.role === 'patient' ? userImg : doctorimg}
                    className='w-full h-full rounded-full border border-slate-700 hover:border-primaryColor hover:border-2'
                    alt='User'
                  />
                </figure>
                <h2 className="hidden md:block font-bold italic capitalize hover:text-primaryColor"> 
                  {user.role === "patient" ? (user.gender === "male" ? "Mr." : "Mrs.") + ` ${user.name}'s Home` 
                    : `Dr. ${user.name}'s Home`}
                </h2>
              </Link>
            </div>
          ) : (
            <Link to='/login'>
              <button className='bg-primaryColor py-2 px-6 text-white font-semibold h-11 flex items-center justify-center rounded-full'>
                Login
              </button>
            </Link>
          )}
          <span className='md:hidden' onClick={toggleMenu}>
            <BiMenu className={`w-6 h-6 cursor-pointer ${isMenuOpen ? 'menu-open' : ''}`} />
          </span>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className='md:hidden absolute top-full right-0 bg-white shadow-md rounded-lg mt-2'>
          <ul className='flex flex-col'>
            {navLinks.map((link, index) => (
              <li key={index} className='border-b border-gray-200'>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 text-primaryColor font-semibold"
                      : "block px-4 py-2 text-textColor font-medium hover:text-primaryColor"
                  }
                  onClick={closeMenu} // Close menu on item click
                >
                  {link.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
