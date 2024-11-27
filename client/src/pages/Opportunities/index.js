import React from 'react'
import JoinUs from './JoinUs'
import Navbar from '../../components/Navbar'
import Footer from '../Home/Footer'
import { FaHandHoldingWater } from "react-icons/fa";


function Opportunities() {
  return (
    <>
      <Navbar />
      <div className="flex h-[70vh] justify-center items-center text-center  sm:h-full sm:pt-[80px] sm:py-10">
        <div className="w-[50%] sm:w-full p-5 ">
          <div className="icon flex align-center justify-center text-3xl p-5 ">
            <div className="  bg-secondary rounded-full p-3">

              <FaHandHoldingWater className=' text-primary text-6xl' />
            </div>

          </div>
          <h2 className='text-tertiary'>SCIENCE FOR IMPACT</h2>

          <div className="joinUs-text text-3xl font-bold p-5">
            Join the Cho Lab.

          </div>
          <p className='leading-relaxed sm:text-justify'>
          We are building a dynamic team of undergraduate and graduate students, as well as postdoctoral researchers, who share a passion for advancing our understanding of hydrology and water resources in a changing climate to promote a sustainable environment. We value self-motivation, a collaborative spirit, and a commitment to collective success. Our lab fosters an inclusive and diverse environment where everyone is empowered to thrive and contribute meaningfully.
          </p>
        </div>
      </div>
      <div className="bg-secondary  text-primary p-7 sm:p-2">
        <h2 className='text-center p-9 text-3xl sm:text-2xl'>We seek researchers with expertise in one or more of these areas:  </h2>
        <div className="h-[2px] bg-tertiary mx-10"></div>
        <div className="grid grid-cols-3 text-center gap-5 sm:grid-cols-1">
          <div className="skillsList my-7">
            <p className='text-tertiary text-lg'>01</p>
            <h2 className="text-2xl p-2 ">Hydrology and Climate</h2>
            <p className='p-5 leading-loose'> Investigating hydrological processes under changing climate conditions using land surface and climate models.</p>

          </div>
          <div className="skillsList my-7">
            <p className='text-tertiary text-lg'>02</p>
            <h2 className="text-2xl p-2 ">Remote Sensing and Data Analytics</h2>
            <p className='p-5 leading-loose'>Applying satellite/UAV sensing and AI/machine learning to predict water systems, crop productivity, and extreme events.</p>
          </div>
          <div className="skillsList my-7">
            <p className='text-tertiary text-lg'>03</p>
            <h2 className="text-2xl p-2 ">Sustainable Water Management</h2>
            <p className='p-5 leading-loose'> Developing solutions for drought, flooding, and water quality challenges to support resilient communities and environmental justice.</p>
          </div>

        </div>
        <div className="h-[2px] bg-tertiary mx-10 mb-10"></div>
      </div>
      <JoinUs />


      <Footer />
    </>
  )
}

export default Opportunities