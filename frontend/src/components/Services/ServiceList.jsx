import React from 'react'
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
const ServiceList = () => {
  return (
   <>
            {/* <ServiceList/> */}
            <section className='pt-2'>
        <div className='container'>
         
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] 
          lg:mt-[55px]'>
            <div className='py-[30px] px-5 py-5 hover:bg-yellow-400 hover:rounded-2xl'>
             
              <div className='mt-[30px] '>
              <div className='flex'>
              <span className='w-[44px] h-[44px] text-orange-600 bg-orange-200  border-[#181A1E] flex items-center justify-center group hover:border-none'>1</span>
              <h2 className='text-[26px] mx-2 leading-9 text-headingColor font-[700] text-center flex'>
                 Bone Health
                </h2>
              </div>
               
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-left'>
                  World-class care for everyone. Our health system offers unmatched, expert health care.  From the lab to the clinic.
                </p>
                <div className='flex'>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight />
                </Link>
                
                </div>
              </div>
            </div>
            <div className='py-[30px] px-5  py-5 hover:bg-yellow-400 hover:rounded-2xl'>
             
              <div className='mt-[30px] '>
              <div className='flex'>
              <span className='w-[44px] h-[44px] text-violet-600 bg-violet-200  border-[#181A1E] flex items-center justify-center group  hover:border-none'>2</span>
              <h2 className='text-[26px] mx-2 leading-9 text-headingColor font-[700] text-center flex'>
              Labor & Delivery
                </h2>
              </div>
               
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-left'>
                  World-class care for everyone. Our health system offers unmatched, expert health care.  From the lab to the clinic.
                </p>
                <div className='flex'>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight />
                </Link>
                
                </div>
              </div>
            </div>
            <div className='py-[30px] px-5  py-5 hover:bg-yellow-400 hover:rounded-2xl'>
             
              <div className='mt-[30px] '>
              <div className='flex'>
              <span className='w-[44px] h-[44px] text-blue-600 bg-blue-200  border-[#181A1E] flex items-center justify-center group  hover:border-none'>3</span>
              <h2 className='text-[26px] mx-2 leading-9 text-headingColor font-[700] text-center flex'>
              Heart & Vascular
                </h2>
              </div>
               
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-left'>
                  World-class care for everyone. Our health system offers unmatched, expert health care.  From the lab to the clinic.
                </p>
                <div className='flex'>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight />
                </Link>
                
                </div>
              </div>
            </div>
            <div className='py-[30px] px-5  py-5 hover:bg-yellow-400 hover:rounded-2xl'>
             
              <div className='mt-[30px] '>
              <div className='flex'>
              <span className='w-[44px] h-[44px] text-blue-600 bg-blue-200  border-[#181A1E] flex items-center justify-center group  hover:border-none'>4</span>
              <h2 className='text-[26px] mx-2 leading-9 text-headingColor font-[700] text-center flex'>
              Mental Health
                </h2>
              </div>
               
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-left'>
                  World-class care for everyone. Our health system offers unmatched, expert health care.  From the lab to the clinic.
                </p>
                <div className='flex'>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight />
                </Link>
                
                </div>
              </div>
            </div>
            <div className='py-[30px] px-5  py-5 hover:bg-yellow-400 hover:rounded-2xl'>
             
              <div className='mt-[30px] '>
              <div className='flex'>
              <span className='w-[44px] h-[44px] text-orange-600 bg-orange-200  border-[#181A1E] flex items-center justify-center group  hover:border-none'>5</span>
              <h2 className='text-[26px] mx-2 leading-9 text-headingColor font-[700] text-center flex'>
              Neurology
                </h2>
              </div>
               
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-left'>
                  World-class care for everyone. Our health system offers unmatched, expert health care.  From the lab to the clinic.
                </p>
                <div className='flex'>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight />
                </Link>
                
                </div>
              </div>
            </div>
            <div className='py-[30px] px-5  py-5 hover:bg-yellow-400 hover:rounded-2xl'>
             
              <div className='mt-[30px] '>
              <div className='flex'>
              <span className='w-[44px] h-[44px] text-violet-600 bg-violet-200  border-[#181A1E] flex items-center justify-center group  hover:border-none'>6</span>
              <h2 className='text-[26px] mx-2 leading-9 text-headingColor font-[700] text-center flex'>
              Burn Treatment

                </h2>
              </div>
               
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-left'>
                  World-class care for everyone. Our health system offers unmatched, expert health care.  From the lab to the clinic.
                </p>
                <div className='flex'>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight />
                </Link>
                
                </div>
              </div>
            </div>
         
          </div>
        </div>
      </section>
</>
  )
}

export default ServiceList
