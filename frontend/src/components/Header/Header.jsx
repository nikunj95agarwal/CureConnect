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
  const menuRef = useRef(null);
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
    <header className='header flex items-center bg-white fixed' ref={headerRef}>
      <div className='container opacity-[100]'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div>
            <Link to="/home"><img className='logo' src={logo} alt='Logo' width="254px" height="34px" /></Link>
          </div>
          {/* Menu */}
          <div className={`navigation ${isMenuOpen ? 'show_menu' : ''}`} ref={menuRef}>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                    onClick={closeMenu} // Close menu on item click
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Nav Right */}
          <div className='flex items-center gap-4'>
            {token && user ? (
              <div className='flex items-center'>
                <Link to={role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'} className='flex items-center gap-2'>
                  <figure className='w-[50px] h-[50px] rounded-full'>
                    <img
                      src={user.role === 'patient' ? userImg : doctorimg}
                      className='w-full h-full rounded-full border-[1px] border-slate-700  hover:border-primaryColor hover:border-[2px]'
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
                <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>
                  Login
                </button>
              </Link>
            )}
            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className={`w-6 h-6 cursor-pointer ${isMenuOpen ? 'menu-open' : ''}`} />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
