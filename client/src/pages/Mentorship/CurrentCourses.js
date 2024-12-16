import React from 'react'
import { Link } from 'react-router-dom'

const CurrrentCourses = () => {
    return (
        <div className='h-full px-[4rem] pt-[3rem] sm:px-3 md:px-5'>
            <h1 className='text-3xl mt-5 font-semibold'>Courses Dr. Cho is Teaching</h1>
            <div className="h-[2px] my-7 bg-tertiary "></div>
            <div className="grid grid-cols-3  gap-7 sm:grid-cols-1 items-stretch h-full">
                <div className=" p-5 flex flex-col flex-grow h-full">
                    <p className="text-tertiary text-xl py-5">ENGR 3380 </p>
                    <h2 className="text-2xl font-semibold">Fluid Mechanics </h2>
                    <p className='py-5 leading-7 text-justify '>This course introduces the principles of fluid mechanics with applications in civil engineering. Topics include fluid properties, hydrostatics, fluid dynamics, pipe flow, open channel flow, and hydraulic systems. Students will develop a strong foundation in analyzing and solving problems related to fluid behavior in natural and engineered systems. The field of fluid mechanics is broad and has numerous science and engineering applications. The field of fluid mechanics is broad and has numerous science and engineering applications.</p>
                    <Link target='_blank' to={`${process.env.PUBLIC_URL}/Files/CoursesSyllabus/ENGR3380.pdf`}>
                    <button className="border-2 border-tertiary my-2 rounded-full py-5 px-7 font-semibold cursor-pointer text-tertiary  hover:text-primary hover:bg-tertiary duration-300 border-b-4">View Syllabus</button>
                    </Link>
                    <div className="bg-tertiary h-[1px] my-9"></div>

                </div>
                <div className="flex flex-col flex-grow p-5 h-full">
                    <p className="text-tertiary text-xl py-5">CE 4371</p>
                    <h2 className="text-2xl font-semibold">Hydrology</h2>
                    <p className='py-5 leading-7 text-justify'>This course delves into the fundamental principles of hydrology, focusing on the movement, distribution, and management of water across natural and built environments. Key topics include precipitation, evapotranspiration, soil infiltration, groundwater flow, surface runoff, and hydrologic modeling, with an emphasis on state-of-the-art remote sensing techniques. Students will develop practical skills in water system analysis, conceptual modeling using HEC-HMS, and applying hydrologic concepts to tackle real-world challenges in water resources management and environmental sustainability.</p>
                    <Link target='_blank' to={`${process.env.PUBLIC_URL}/Files/CoursesSyllabus/CE4371.pdf`}>
                        <button className="border-2 border-tertiary my-2 rounded-full py-5 px-7 font-semibold cursor-pointer text-tertiary  hover:text-primary hover:bg-tertiary duration-300 border-b-4">View Syllabus</button>
                    </Link>
                    <div className="bg-tertiary h-[1px] my-9"></div>

                </div>
                <div className="flex flex-col flex-grow p-5 h-full">
                    <p className="text-tertiary text-xl py-5">CE 7372</p>
                    <h2 className="text-2xl font-semibold">Water, Climate, and Disasters </h2>
                    <p className='py-5 leading-7 text-justify'>This course is designed for MS and PhD level, introducing the interactions between water and climate systems and their relationship with occurrences, magnitude, and frequencies of natural disasters with a focus on climate impacts on hydrology, water resources, and extreme events (e.g., floods, drought, heat waves, landslides, and wildfires). This course covers disaster risk management and adaptation strategies for a sustainable and resilient natural environment and human society against weather and climate extreme disasters.</p>
                    <Link to="#">
                    <button className="border-2 border-tertiary my-2 rounded-full py-5 px-7 font-semibold cursor-pointer text-tertiary  hover:text-primary hover:bg-tertiary duration-300 border-b-4">View Syllabus</button>
                    </Link>
                    <div className="bg-tertiary h-[1px] mt-9"></div>

                </div>
            </div>
        </div>
    )
}

export default CurrrentCourses