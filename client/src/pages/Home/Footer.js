import React from 'react'
import { FaGithub, FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <div className='relative'>
      <div className='p-5 bg-secondary text-primary flex flex-col justify-left relative   items-center  sm:text-center sm:p-0 text-left  '>
      <div className="custom-shape-divider-top-1730592413 ">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>  
        <div className="grid grid-cols-3 justify-between p-10   sm:grid-cols-1">

          <div className="Cho flex justify-center items-center">
            <img className='rounded-[50%] w-[70%] sm:w-[100%] flex items-center justify-center my-[50px] sm:mt-5 sm:mb-0' src="https://media.licdn.com/dms/image/v2/D4E03AQHm3YHSVPrgOw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696147453955?e=1735171200&v=beta&t=v0NXFeq5YL_H38F3fwz3CnwPa1QOxhozHfIbthEiLak" alt="" />

          </div>
          <div className="contact flex flex-col text-3xl text-center text-tertiary font-semibold  items-center sm:items-start justify-start sm:justify-left sm:text-left">
            <p className='block p-5  sm:p-0 pb-2 mb-3 text-left items-start sm:text-2xl sm:text-center sm:w-full my-5'>
              <section className=' border-b-[2px] border-tertiary w-full inline text-center'>

              Contact
              </section>
              </p>
              <div className="address text-primary font-light text-sm  text-left">
                <p className='p-2 sm:p-0 text-tertiary py-5 text-2xl sm:text-xl my-2'>

                Mailing Address:
                </p>
                <p className='p-2 sm:p-0 text-xl sm:text-sm sm:py-2'>

                Bruce and Ingram, Room 5313
                </p>
                <p className='p-2 sm:p-0 text-xl sm:text-sm sm:py-2'>
                  Texas State University
                </p>
                <p className='p-2 sm:p-0 text-xl sm:text-sm sm:py-2'>
                  San Marcos, Texas - 78666
                </p>
              </div>
              <div className="text-2xl text-left p-7 sm:p-0 sm:text-sm sm:my-2 cursor-pointer">
              eunsang.cho@txstate.edu
              </div>
              <div className="social flex w-[50%] my-7 text-left justify-around items-center sm:w-[100%]">
                <a href="https://github.com/echo-hydro" target='_blank' rel='noreferrer'>

                <FaGithub className='text-5xl sm:text-3xl' />
                </a>

                <a href="https://x.com/Eunsang_UNH" target='_blank' rel='noreferrer'>
                  <FaTwitter className='text-5xl sm:text-3xl'></FaTwitter>
                </a>
                <a href="mailto:eunsangcho86@gmail" target='_blank' rel='noreferrer'>
                  <IoMail className='text-5xl sm:text-3xl'></IoMail>
                </a>
              </div>
          </div>
          <div className="quick-links  flex-col  text-3xl text-center text-tertiary  font-semibold flex items-start  sm:w-[100%]  justify-start ">
            <p className='block p-5 border-b-[2px] border-tertiary pb-2 mb-7 sm:text-2xl sm:flex sm:text-center  sm:justify-center sm:items-center'>

            Quick Links
            </p>

            <div className="links text-xl text-left flex flex-col sm:grid sm:grid-cols-2 gap-x-7 text-primary sm:text-sm">
              <Link to="/about" className='p-2 sm:p-1 font-light  my-2  hover:border-b-2 hover:border-tertiary transition duration-150'>ABOUT US</Link>
              <Link to="/news" className='p-2 sm:p-1 font-light  my-2  hover:border-b-2 hover:border-tertiary transition duration-150'>LATEST NEWS</Link>
              <Link to="/publication" className='p-2 sm:p-1 font-light   my-2 hover:border-b-2 hover:border-tertiary transition duration-150'>PUBLICATIONS</Link>
              <Link to="/research" className='p-2 sm:p-1 font-light   my-2 hover:border-b-2 hover:border-tertiary transition duration-150'>RESEARCH</Link>
            </div>
          </div>

        </div>
        <div className="copyright border-t-2 sm:text-sm sm:pb-5 sm:w-[80%] border-tertiary w-full text-center p-3 text-xl pt-5">

          <p>Copyright &copy; 2024 Eunsang Cho. All rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer