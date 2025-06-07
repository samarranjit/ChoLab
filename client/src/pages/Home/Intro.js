import React, { useContext } from 'react'
import { allContexts } from '../../Context/AllContexts'
import Loader from '../../components/Loader';

function Intro() {
  const { Data, showLoading } = useContext(allContexts);
  console.log(Data)
  const img = `${process.env.PUBLIC_URL}/StaticImages/HomeBgImg.jpg`;


  return (
    <>
      <div className="Intro-bg-img-div -z-10 ">
        {showLoading ? <Loader /> :
          <div
            className=" h-[90vh] sm:h-[60vh] bg-fixed bg-cover bg-no-repeat bg-right-bottom  md:bg-center sm:bg-scroll "
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="bg-secondary h-full w-full bg-opacity-[0.05] relative">


              <div className='bg-secondary w-[100%] h-[100%] bg-opacity-15 items-center justify-center'>
                <div className="intro-text w-[100%] h-[100%] flex flex-col items-center justify-center  lg:translate-y-[0px] md:translate-y-[-10px] sm:translate-y-[20px]">
                  <p className='font-bold text-primary text-5xl md:text-5xl sm:text-2xl'>The Cho Lab at TXST</p>
                  <h1 className=' text-2xl md:text-2xl  text-center sm:text-sm    md:mt-0 p-7  md:pt-2 font-semibold text-primary leading-normal  '>" {Data?.intro?.slogan} "</h1>
                </div>
              </div>
              <div className="custom-shape-divider-bottom-1732665275 sm:hidden md:bottom-[-2px]">
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