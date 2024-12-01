import React from 'react'
// import JoinUs from './JoinUs'
import Navbar from '../../components/Navbar'
import Footer from '../Home/Footer'
import { FaHandHoldingWater } from "react-icons/fa";
import Quality from './Quality';
import MeetChoLab from './MeetChoLab';


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
      <Quality />
      <MeetChoLab />
      {/* <JoinUs /> */}
      <div className="h-screen flex flex-col justify-center items-center">
        <h2 className="text-tertiary text-2xl sm:text-xl md:text-3xl text-center p-7">
          Join our Team :
        </h2>
        <iframe
          title='googleForm'
          src="https://docs.google.com/forms/d/e/1FAIpQLSfQrUXr6XuXEI8NLJYg4gU6UBsqndHmBcFtmYGsi_VxD5_mzw/viewform?embedded=true"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          className="w-full h-full"
          style={{ minHeight: "0", flex: "1" }}
        >
          Loading…
        </iframe>
      </div>



      <Footer />
    </>
  )
}

export default Opportunities