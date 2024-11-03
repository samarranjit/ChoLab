import React from 'react'

function DrCho() {
  return (
    <div className='p-10 flex sm:flex-col  sm:p-7 '>
        <div className="left lg:h-[80vh] w-[60%] sm:flex sm:justify-center sm:h-full sm:w-[100%] sm:items-center sm:my-10">
            <div className="image flex items-center justify-center sm:w-[100%]">
            <img className='rounded-[50%] w-[50%] sm:w-[100%] flex items-center justify-center my-[50px] sm:mt-5 sm:mb-0'  src="https://media.licdn.com/dms/image/v2/D4E03AQHm3YHSVPrgOw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696147453955?e=1735171200&v=beta&t=v0NXFeq5YL_H38F3fwz3CnwPa1QOxhozHfIbthEiLak" alt="" />

            </div>
        </div>
        <div className="right w-[50%] sm:w-full">
            <p className='text-2xl text-tertiary sm:text-xl'>

            Meet the PI
            </p>

            <h1 className='text-4xl font-semibold mt-10 sm:text-2xl sm:w-[100%] sm:mt-5'>Dr. Eunsang Cho</h1>
            <h2 className='text-2xl border-b-[2.5px] border-b-[50%] mb-10 border-b-tertiary p-2 sm:text-xl sm:p-1 sm:pl-0 sm:mb-5'>Assistant Professor</h2>

            <p>Hi! I am a hydrologist who focuses on accurate and timely estimations and predictions of critical hydrologic fluxes, storages, and processes to advance water resources management, hydroclimate extreme prediction, and sustainable infrastructure design in a changing climate. For this, I use field observations, multiple remote sensing techniques (active and passive microwave, infrared, thermal, and gamma radiation) via UAV, aircraft, and satellite platforms, and climate and hydrological model simulations along with big-data analytics. I am currently an Assistant Professor at Texas State University, San Marcos, TX, starting in Fall 2023. Prior to this, I was a Postdoctoral/Assistant Research Scientist at Hydrological Sciences Laboratory, NASA Goddard Space Flight Center & Earth System Science Interdisciplinary Center, University of Maryland at College Park. I also worked with Dr. Jennifer Jacobs at University of New Hampshire, where I obtained a Ph.D. in Civil and Environmental Engineering in May 2020.</p>
        </div>
    </div>
  )
}

export default DrCho