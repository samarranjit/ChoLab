import React, { useContext } from 'react'
import { Typewriter } from "react-simple-typewriter"
import { allContexts } from '../../Context/AllContexts'
import Loader from '../../components/Loader';

function Intro() {
  const { Data, showLoading } = useContext(allContexts);
  const img = `${process.env.PUBLIC_URL}/StaticImages/HomeBgImg.jpg`;


  return (
    <>
      <div className="Intro-bg-img-div -z-10 ">
        {showLoading ? <Loader /> :
          <div
            className=" h-[90vh] sm:h-[60vh] bg-fixed bg-cover bg-no-repeat bg-right-bottom  sm:bg-center sm:bg-scroll "
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="bg-secondary h-full w-full bg-opacity-[0.05] relative">


              <div className='bg-secondary w-[100%] h-[100%] bg-opacity-15 items-center justify-center'>
                <div className="intro-text w-[100%] h-[100%] flex flex-col items-center justify-center">
                  <h1 className=' text-5xl md:text-4xl text-center sm:text-2xl lg:mt-[-90px] p-7 pt-[7rem] font-semibold text-primary sm:hidden '>"{<Typewriter words={[`${Data?.intro?.slogan}`]} typeSpeed={50}>  </Typewriter>}"</h1>
                  <h1 className=' text-5xl md:text-4xl text-center sm:text-2xl lg:mt-[-90px] p-7 pt-[7rem] font-semibold text-primary hidden sm:inline-block'>{Data?.intro?.slogan}</h1>
                  {/* <button className='p-3 z-2 w-[15%] sm:w-[50%] text-2xl text-[white]  text-black border-none bg-tertiary transition duration-500  hover:bg-primary hover:border-tertiary hover:text-tertiary rounded-[5%] border-[2px] '>
                  <section className=''>
                  Our Works
                  </section>
                </button> */}
                </div>
              </div>
              <div className="custom-shape-divider-bottom-1732665275 sm:hidden">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
                </svg>
              </div>
            </div>
          </div>

        }
      </div>


    </>
  )
}

export default Intro