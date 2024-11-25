import React from 'react'

const CurrrentCourses = () => {
  return (
    <div className='h-full p-[4rem] sm:px-3'>
        <h1 className='text-3xl mt-5 font-semibold'>Current Courses Dr. Cho is Teaching</h1>
        <div className="h-[2px] my-7 bg-tertiary "></div>
        <div className="grid grid-cols-3  gap-7 sm:grid-cols-1 ">
            <div className=" p-5">
                <p className="text-tertiary text-xl py-5">CEE 266G: fall 2022</p>
                <h2 className="text-2xl font-semibold">Stochastic hydrology</h2>
                <p className='py-5 leading-7 sm:text-justify'>Hydrological processes like precipitation, streamflow, and groundwater flow are highly variable over time and across locations. Quantifying the uncertainty in hydrological models and simulating future conditions is critical for informing the development and management of civil infrastructure systems. This course introduces students to statistical methods used in hydrology for data analysis, risk and uncertainty analysis, and simulation. Topics include: flood and drought frequency, time series analysis, and synthetic streamflow generation.</p>
                <button className="border-2 border-tertiary my-2 rounded-full py-5 px-7 font-semibold cursor-pointer text-tertiary  hover:text-primary hover:bg-tertiary duration-300 border-b-4">View Syllabus</button>
                <div className="bg-tertiary h-[1px] my-9"></div>

            </div>
            <div className=" p-5">
                <p className="text-tertiary text-xl py-5">CEE 266G: fall 2022</p>
                <h2 className="text-2xl font-semibold">Stochastic hydrology</h2>
                <p className='py-5 leading-7 sm:text-justify'>Hydrological processes like precipitation, streamflow, and groundwater flow are highly variable over time and across locations. Quantifying the uncertainty in hydrological models and simulating future conditions is critical for informing the development and management of civil infrastructure systems. This course introduces students to statistical methods used in hydrology for data analysis, risk and uncertainty analysis, and simulation. Topics include: flood and drought frequency, time series analysis, and synthetic streamflow generation.</p>
                <button className="border-2 border-tertiary my-2 rounded-full py-5 px-7 font-semibold cursor-pointer text-tertiary  hover:text-primary hover:bg-tertiary duration-300">View Syllabus</button>
                <div className="bg-tertiary h-[1px] my-9"></div>

            </div>
            <div className=" p-5">
                <p className="text-tertiary text-xl py-5">CEE 266G: fall 2022</p>
                <h2 className="text-2xl font-semibold">Stochastic hydrology</h2>
                <p className='py-5 leading-7 sm:text-justify'>Hydrological processes like precipitation, streamflow, and groundwater flow are highly variable over time and across locations. Quantifying the uncertainty in hydrological models and simulating future conditions is critical for informing the development and management of civil infrastructure systems. This course introduces students to statistical methods used in hydrology for data analysis, risk and uncertainty analysis, and simulation. Topics include: flood and drought frequency, time series analysis, and synthetic streamflow generation.</p>
                <button className="border-2 border-tertiary my-2 rounded-full py-5 px-7 font-semibold cursor-pointer text-tertiary  hover:text-primary hover:bg-tertiary duration-300">View Syllabus</button>
                <div className="bg-tertiary h-[1px] my-9"></div>

            </div>
        </div>
    </div>
  )
}

export default CurrrentCourses