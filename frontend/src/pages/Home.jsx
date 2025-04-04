import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs'; // Corrected icon import
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import faqImg from "../assets/images/faq-img.png"
import ServiceList from '../components/Services/ServiceList';
import DoctorList from '../components/Doctors/DoctorList';
import FaqList from '../components/Faq/FaqList';
// import ServiceList from '../components/Services/ServiceList';

const Home = () => {
  return (
    <>
      <section className='hero_section pt-[60px] 2xl:h-[800px]'>
        <div className='container mt-12'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            {/* Hero content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  CureConnect helps patients live a healthy, longer life.
                </h1>
                <p className="text_para">
                  Our platform connects you with top healthcare providers to ensure you receive the best medical care. From routine check-ups to specialized treatments, we are here to support your journey to better health.
                </p>
                <Link to="/doctors">
                <button className="btn mt-4 px-6 py-2
                 bg-blue-500 text-white rounded-full appointment-btn
                  hover:bg-green-600 transition-all duration-300">Request an Appointment</button></Link>
              </div>
              {/* Hero counter */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px] experience-section">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Clinic Locations-India</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Patient Satisfaction</p>
                </div>
              </div>
            </div>
            {/* Hero images */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full mt-[25px]" src={heroImg01} alt="Hero 1" />
              </div>
              <div className="">
                <img src={heroImg02} alt="Hero 2" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="Hero 3" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section>
        <div className='container'>
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>
              Providing the best medical services
            </h2>
            <p className='text_para text-center'>
              World class care for everyone. Our health system offers unmatched, expert health care.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] 
          lg:mt-[55px]'>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon01} alt='Icon 1'/>
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Find a Doctor
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  World-class care for everyone. Our health system offers unmatched, expert health care.  From the lab to the clinic.
                </p>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight />
                </Link>
              </div>
            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon02} alt='Icon 2'/>
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Find a Location
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.
                </p>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight />
                </Link>
              </div>
            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon03} alt='Icon 3'/>
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Book Appointment

                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.
                </p>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}

      <div className='xl:w-[470px] mx-auto'>
                <h2 className='heading text-center'>Our Medical Services</h2>
                <p className='text_para text-center'> World-class care for everyone. Our health System offers unmatched, expert health care.</p>
            </div>
      <ServiceList/>

      {/* Doctors */}
      <section className="hero_section">
        <div className='container'>
           <div className='xl:w-[470px] mx-auto'>
                <h2 className='heading text-center'>Meet Our Doctors</h2>
                <p className='text_para text-center'> World-class care for everyone. Our health System offers unmatched, expert health care.</p>
            </div>
            <DoctorList/>
        </div>
      </section>
      
      {/* FAQ SECTION */}

      <section>
        <div className='container'>
            <div className='flex justify-between gap-[50px] lg:gap-0'>
                <div className='w-1/2 hidden md:block'>
                    <img src={faqImg} alt=''/>
                </div>
                <div className='w-full md:w-1/2 mt-5'>
                    <h2 className='heading'>
                        Frequently Asked Question By Patients
                    </h2>
                    <FaqList/>
                </div>
            </div>
        </div>
      </section>

    </>
  );
}

export default Home;
