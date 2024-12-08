import React, { useEffect, useState } from 'react'
// import JoinUs from './JoinUs'
import Navbar from '../../components/Navbar'
import Footer from '../Home/Footer'
import { FaHandHoldingWater } from "react-icons/fa";
import Quality from './Quality';
import MeetChoLab from './MeetChoLab';
import VacancyAnnouncement from './VacancyAnnouncement';
import { allContexts } from '../../Context/AllContexts';


function Opportunities() {
  const { Data, setData } = React.useContext(allContexts);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (Data === undefined) {
      setIsLoading(true);
    }
    else {
      setIsLoading(false)
    }
  }, [Data])
  return (
    <>
      <Navbar />



      <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/StaticImages/Opportunities.jpg)` }} className=" h-[90vh] overflow-hidden  bg-fixed  bg-cover bg-top -mb-2 sm:bg-center sm:bg-scroll sm:h-[100vh]">
        <div className=' w-[100%] h-[100%] bg-opacity-15 flex items-center justify-center  sm:ml-0 sm:p-2 sm:justify-center '>
          <div className="collaboration-call w-[40%] sm:w-[90%] p-9 gap-0  flex flex-col items-center justify-center bg-secondary bg-opacity-80 sm:gap-0.5 sm:p-4 mt-9">

            <div className="icon flex align-center justify-center text-3xl ">
              <div className="  bg-secondary rounded-full p-3">

                <FaHandHoldingWater className=' text-primary text-6xl' />
              </div>

            </div>
            <h2 className='text-tertiary mt-1 sm:text-md sm:mt-0'>SCIENCE FOR IMPACT</h2>

            <div className="joinUs-text text-3xl font-bold p-3 text-primary sm:my-0 sm:p-0.5">
              Join the Cho Lab.

            </div>
            <p className='leading-relaxed sm:text-justify text-primary'>
              We are building a dynamic team of undergraduate and graduate students, as well as postdoctoral researchers, who share a passion for advancing our understanding of hydrology and water resources in a changing climate to promote a sustainable environment. We value self-motivation, a collaborative spirit, and a commitment to collective success. Our lab fosters an inclusive and diverse environment where everyone is empowered to thrive and contribute meaningfully.
            </p>


          </div>
        </div>
      </div>




      {/* <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/StaticImages/Opportunities.jpg)` }} className="flex h-[100vh] justify-center items-center text-center bg-fixed sm:h-full sm:pt-[80px] sm:py-10 bg-cover">
          

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
        </div> */}
      <Quality />
      <MeetChoLab />

      {
        (!isLoading && Data &&
          Data.opporutunitiesAnnouncement &&
          Data.opporutunitiesAnnouncement[0].announcementStatus === true) ? (
          <VacancyAnnouncement Data={Data.opporutunitiesAnnouncement[0]} />
        ) : ""
      }

      {/* <JoinUs /> */}
      {/* <div className="h-screen flex flex-col justify-center items-center">
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
      </div> */}



      <Footer />
    </>
  )
}

export default Opportunities