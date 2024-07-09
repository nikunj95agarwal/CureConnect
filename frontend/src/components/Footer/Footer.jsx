import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

const socialLinks = [
 
  {
    path: "https://github.com/nikunjagarwal95",
    icon: <AiFillGithub className="group-hover: text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/nikunjagarwal95/",
    icon: <AiOutlineInstagram className="group-hover: text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/in/nikunjagarwal95/",
    icon: <RiLinkedinFill className="group-hover: text-white w-4 h-5" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About US",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];

const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Get Appointment",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get a Opinion",
  },
];

const quickLinks03 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Footer = () => {
    const year = new Date().getFullYear();
  return (
  
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div className="footer-top" >
            <img src={logo} alt="" className="w-60" />
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4 ml-6">
              Copyright [{year}] developed by NIKUNJ AGARWAL.
               All rights reserved.
            </p>
            <div className="flex items-center gap-3 mt-4 ml-5">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group bg-cyan-800 hover:bg-primaryColor hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex gap-20 footer-right">
          <ul >
            <h2 className="mb-6 font-bold text-2xl" >Quick Links</h2>
           
              {quickLinks01.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.display}</Link>
                </li>
              ))}
            </ul>
            <ul>
            <h2 className="mb-6 font-bold text-2xl" >Avail Facilities </h2>
              {quickLinks02.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.display}</Link>
                </li>
              ))}
            </ul>
            <ul>
            <h2 className="mb-6 font-bold text-2xl" >Get Support </h2>
              {quickLinks03.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.display}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;