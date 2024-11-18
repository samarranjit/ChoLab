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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In sequi assumenda at aperiam recusandae consequuntur nam soluta repudiandae vel, doloribus ipsa quos natus rerum dignissimos magnam obcaecati veritatis? Accusantium odio hic cumque aperiam ea quidem mollitia ut provident doloremque commodi enim ipsam dolorum itaque atque, saepe excepturi quas iste tenetur.
          </p>
        </div>
      </div>
      <div className="bg-secondary  text-primary p-7 sm:p-2">
        <h2 className='text-center p-9 text-3xl sm:text-2xl'>We seek researchers with expertise in one or more of these areas:  </h2>
        <div className="h-[2px] bg-tertiary mx-10"></div>
        <div className="grid grid-cols-3 text-center gap-5 sm:grid-cols-1">
          <div className="skillsList my-7">
            <p className='text-tertiary text-lg'>01</p>
            <h2 className="text-2xl p-2 ">Mathematical Modeling</h2>
            <p className='p-5 leading-loose'>Strong quantitative foundation (e.g. degree in math, physics, or computer science) and an interest in applying computational engineering to water resources.</p>

          </div>
          <div className="skillsList my-7">
            <p className='text-tertiary text-lg'>02</p>
            <h2 className="text-2xl p-2 ">Policy Analysis</h2>
            <p className='p-5 leading-loose'> Training and experience in policy analysis or environmental justice, with in interest in bridging social science and engineering.</p>
          </div>
          <div className="skillsList my-7">
            <p className='text-tertiary text-lg'>03</p>
            <h2 className="text-2xl p-2 ">Water Resources</h2>
            <p className='p-5 leading-loose'>Expertise in hydrology and water resources engineering and interest in developing strong computational skills.</p>
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