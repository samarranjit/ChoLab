import React from 'react'
import { FaGithub, FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <div className='relative mt-2 pt-[5rem] '>
      <div className='py-5 bg-secondary text-primary flex flex-col justify-left relative   items-center  sm:text-center sm:p-0 text-left  border-secondary md:p-1 pb-[5px]'>
        <div className="custom-shape-divider-top-1730592413 ">
          <svg className='z-[100]  ' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>
        <div className="grid grid-cols-3 justify-between p-10 border-secondary  md:grid-cols-2 sm:grid-cols-1 md:p-1 sm:pt-5">

          <div className="Cho flex justify-center m-auto items-center w-[90%] sm:w-[70%] ">
            <div className="ml-10 sm:ml-0 w-[70%] p-[1.5rem] sm:p-[0.75rem] aspect-square overflow-hidden sm:h-full bg-white rounded-full flex justify-center items-center  shadow-lg sm:w-[55%] " >

              <img className='bg-white w-full h-full object-contain flex items-center justify-center my-[50px]   ' src={`${process.env.PUBLIC_URL}/ChoLabLogo.png`} alt="" />
            </div>

          </div>
          <div className="contact flex flex-col text-3xl text-center text-tertiary font-semibold  items-center  justify-start sm:col-span-1 ">
            <p className='block p-5  sm:p-0 pb-2 mb-3 text-left items-start sm:text-[2rem] sm:text-center sm:w-full my-5'>
              <section className=' border-b-[2px] border-tertiary w-full inline text-center'>

                Contact
              </section>
            </p>
            <div className="address text-primary font-light text-sm  text-left sm:text-center">
              <p className='p-2 sm:p-0 text-tertiary py-5 text-2xl sm:text-xl my-2'>

                Mailing Address:
              </p>
              <p className='p-2 sm:p-0 text-xl sm:text-sm sm:py-2'>

                Bruce and Ingram, Room 5311
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
              <a href="https://github.com/echo-hydro" >

                <FaGithub className='text-5xl sm:text-3xl' />
              </a>

              <a href="https://x.com/Eunsang_UNH" target='_blank' rel='noreferrer'>
                <FaTwitter className='text-5xl sm:text-3xl'></FaTwitter>
              </a>
              <a href="mailto:eunsang.cho@txstate.edu" target='_blank' rel='noreferrer'>
                <IoMail className='text-5xl sm:text-3xl'></IoMail>
              </a>
            </div>
          </div>
          <div className="quick-links  flex-col  text-3xl text-center text-tertiary font-semibold flex items-center md:w-[100%] justify-center md:jusitfy-around  md:col-span-2 sm:col-span-1">
            <p className='block p-5 my-5 border-b-[2px] border-tertiary pb-2 mb-7 sm:text-2xl sm:flex sm:text-center  sm:justify-center sm:items-center'>

              Quick Links
            </p>

            <div className="links text-xl  flex flex-col md:grid md:grid-cols-3 gap-x-7 text-primary sm:text-sm md:mx-auto text-center md:w-[100%] justify-center items-center md:col-span-2">
              <Link to="/about" className='p-2 sm:p-1 font-light  my-2  hover:border-b-2 hover:border-tertiary transition duration-150'>PEOPLE</Link>
              <Link to="/news" className='p-2 sm:p-1 font-light  my-2  hover:border-b-2 hover:border-tertiary transition duration-150'>LATEST NEWS</Link>
              <Link to="/publication" className='p-2 sm:p-1 font-light   my-2 hover:border-b-2 hover:border-tertiary transition duration-150'>PUBLICATIONS</Link>
              <Link to="/research" className='p-2 sm:p-1 font-light   my-2 hover:border-b-2 hover:border-tertiary transition duration-150'>RESEARCH</Link>
              <Link to="/opportunities" className='p-2 sm:p-1 font-light   my-2 hover:border-b-2 hover:border-tertiary transition duration-150'>OPPORTUNITIES</Link>
              <Link to="/mentorship" className='p-2 sm:p-1 font-light   my-2 hover:border-b-2 hover:border-tertiary transition duration-150'>MENTORSHIP</Link>
            </div>
          </div>

        </div>
        <div className="copyright border-t-2 sm:text-sm sm:pb-5 sm:w-[80%] border-tertiary w-full text-center p-3 pb-0 mb-0 text-xl pt-5">

          <p>Copyright &copy; 2024 Eunsang Cho. All rights Reserved.</p>
          <Link to={`https://samarranjit.com.np`} target='_blank'>
            <p className='pt-5 text-sm'>Designed by Samar Ranjit</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer