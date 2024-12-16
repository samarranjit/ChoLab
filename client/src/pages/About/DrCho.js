import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

function DrCho() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <div id='DrChoInfo' className='px-[5rem] py-5  flex sm:flex-col  sm:p-7  gap-[7rem] items-center justify-center md:px-8 md:pt-[80px]'>
      <div className="flex gap-[2rem] sm:gap-0 mx-auto sm:flex-col items-center">

        <div className="left w-[30%] sm:flex sm:justify-center sm:h-full md:w-[55%] sm:items-center sm:my-10 items-right ">
            <div className="image flex items-center justify-left md:w-[100%] items-right">
            <img className='rounded-[50%] w-[100%] sm:w-[100%] flex items-center justify-center my-[50px] sm:mt-5 sm:mb-0 md:w-[100%]'  src="https://media.licdn.com/dms/image/v2/D4E03AQHm3YHSVPrgOw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696147453955?e=1735171200&v=beta&t=v0NXFeq5YL_H38F3fwz3CnwPa1QOxhozHfIbthEiLak" alt="" />
            </div>
        </div>
        <div className="right w-[60%] flex flex-col justify-center  sm:w-full mr-0 ml-auto">
            <p className='text-2xl text-tertiary sm:text-xl'>

            Meet the PI
            </p>
            <div className="flex items-baseline gap-3 border-b-[2.5px] border-b-[50%] mb-5 border-b-tertiary p-2 sm:text-xl sm:p-1 sm:pl-0 sm:mb-5 md:flex-col">

            <h1 className='text-2xl '>Dr. Eunsang Cho</h1>
            <h2 className='text-xl  '>(Assistant Professor)</h2>
            </div>

            <p className='leading-loose md:leading-relaxed'>Hi! I am a hydrologist who focuses on accurate and timely estimations and predictions of critical hydrologic fluxes, storages, and processes to advance water resources management, hydroclimate extreme prediction, and sustainable infrastructure design in a changing climate. For this, I use field observations, multiple remote sensing techniques (active and passive microwave, infrared, thermal, and gamma radiation) via UAV, aircraft, and satellite platforms, and climate and hydrological model simulations along with big-data analytics. I am currently an Assistant Professor at Texas State University, San Marcos, TX, starting in Fall 2023. Prior to this, I was a Postdoctoral/Assistant Research Scientist at Hydrological Sciences Laboratory, NASA Goddard Space Flight Center & Earth System Science Interdisciplinary Center, University of Maryland at College Park. I also worked with Dr. Jennifer Jacobs at University of New Hampshire, where I obtained a Ph.D. in Civil and Environmental Engineering in May 2020.</p>
        </div>
      </div>
    </div>
  )
}

export default DrCho