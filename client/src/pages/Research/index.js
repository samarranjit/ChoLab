import React, { useContext } from 'react'
import Navbar from '../../components/Navbar'
import { allContexts } from '../../Context/AllContexts'
import Loader from '../../components/Loader'
import Footer from '../Home/Footer'
// import { ImFlickr2 } from "react-icons/im";
import { GiComputerFan, GiMaterialsScience } from 'react-icons/gi'
import ResearchCard from './ResearchCard'
// import axiosInstance from '../../axios/axiosInstance'
import { FaSatelliteDish } from "react-icons/fa";

import { useResearchContext } from '../../Context/ResearchContext'
import { Helmet } from 'react-helmet-async'

function Research() {
  const { showLoading } = useContext(allContexts)
  const bgImg = `${process.env.PUBLIC_URL}/StaticImages/BGRESEARCH.jpg` || "https://res.cloudinary.com/cholab/image/upload/v1736473392/BGRESEARCH_gdpudo.jpg";
  const { researchData } = useResearchContext();
  // const ResearchContext = createContext({})



  return (
    <div>
      <Helmet>
        <title>Research | The Cho Lab at Texas State</title>
        <meta name="description" content="Discover the Cho Lab's research projects in hydrology, water resources, climate change, and environmental sustainability." />
        <meta
          name="keywords"
          content="researches, Cho Lab, Texas State University, San Marcos, hydrology, climate scienceobs, water sustainability, environmental research, study, new findings,hydrology research, climate change study, water resources research, environmental science research, hydrology and climate science, water resources study, environmental research study, hydrology projects, climate change projects, water sustainability projects, environmental science projects, hydrology and climate projects, water resources projects, environmental research projects"
        />
        <link rel="canonical" href="https://cholab.science/research" />
        <meta property="og:title" content="Research | The Cho Lab at Texas State" />
        <meta property="og:description" content="Discover the Cho Lab's research projects in hydrology, water resources, climate change, and environmental sustainability." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cholab.science/research" />
      </Helmet>
      <Navbar></Navbar>
      <div className="Intro-bg-img-div -z-10 ">
        {showLoading ? <Loader /> :
          <div style={{ backgroundImage: `url(${bgImg})` }} className=" h-[90vh] overflow-hidden sm:h-[100vh] bg-fixed  bg-cover bg-top bg sm:bg-center sm:bg-scroll sm:pt-[65px]">
            <div className=' w-[100%] h-[100%] bg-opacity-15 flex items-center justify-left ml-[15%] sm:ml-0 sm:p-2 sm:justify-center '>
              <div className="intro-text w-[40%] sm:w-[90%] md:w-[70%] p-10 gap-7  flex flex-col items-center justify-around bg-secondary bg-opacity-65 sm:gap-2 sm:p-4 md:py-4 ">
                <p className=' text-2xl text-tertiary text-left w-full font-semibold align-left justify-left sm:text-lg'>Our Research</p>
                <h1 className=' text-4xl md:text-4xl sm:text-2xl font-semibold text-primary  '>Hydrology and Water Resources in a Changing Climate for a Sustainable Environment</h1>
                <p className='text-primary '>We are building a dynamic team of undergraduate and graduate students and postdocs who share our passion to better understand hydrology and water resources in a changing climate for a sustainable environment. To achieve this, we use field observations from station data and field campaign, multiple remote sensing techniques, land surface hydrologic models, and climate models along with big-data and machine learning (ML) techniques.</p>
              </div>
            </div>
          </div>

        }
      </div>

      <div className="themes bg-secondary h-full p-8 pb-10 ">
        <div className="title text-center text-tertiary font-semibold text-3xl my-5 mb-0">Themes in Our Work</div>

        <div className="grid grid-cols-3 p-10 text-center gap-10  sm:grid-cols-1 sm:px-3">


          <div className="flex w-[100%]   justify-center items-center text-center  text-primary">
            <div className=" flex justify-center items-center flex-col">
              <div className="bg-tertiary p-4 my-5 text-secondary text-4xl rounded-full">
                <GiMaterialsScience />

              </div>
              <div className="my-4 text-2xl mb-5">Impact Driven Science</div>
              <h2 className='text-center p-3q'> Our research addresses real-world challenges in water resources, climate change, and extreme events to drive meaningful societal and environmental impacts.</h2>

            </div>
          </div>


          <div className="flex w-[100%]   justify-center items-center text-center  text-primary">
            <div className=" flex justify-center items-center flex-col">
              <div className="bg-tertiary p-4 my-5 text-secondary text-4xl  rounded-full">
                <GiComputerFan />

              </div>
              <div className="my-4 text-2xl mb-5">Computational Modeling</div>
              <h2 className='text-center p-3q'>We apply advanced computational tools and AI/ML-driven models to simulate complex hydrological, cryosphere, and agricultural systems for informed decision-making. </h2>

            </div>
          </div>

          <div className="flex w-[100%]   justify-center items-center text-center  text-primary">
            <div className=" flex justify-center items-center flex-col">
              <div className="bg-tertiary p-4 my-5 text-secondary text-4xl rounded-full">
                <FaSatelliteDish />
              </div>
              <div className="my-4 text-2xl mb-5">Remote Sensing</div>
              <h2 className='text-center p-3q'>Using satellite and UAV-based remote sensing, we collect high-resolution data to monitor and analyze Earth's dynamic water systems.</h2>

            </div>
          </div>


        </div>
      </div>

      <div className=" inline-block h-[full]  p-[5rem] research-div bg-white sm:p-4 sm:py-9 pb-[0rem] sm:pb-0">
        <h2 className='text-tertiary text-2xl sm:text-lg sm:font-semibold'>

          Our Research Projects:
        </h2>
        <div className="h-[3px] bg-tertiary my-3 w-[27%]"></div>
        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1  mt-5 mb-0 gap-7">


          {
            researchData && researchData.map(item => (
              <ResearchCard key={item.id} research={item} />

            ))
          }
        </div>
      </div>



      <div className="translate-y-[5.6rem]">
        <div style={{ backgroundImage: `url(https://res.cloudinary.com/cholab/image/upload/v1736473223/Home_ResearchBgImage_ntjeir.jpg)` }} className=" h-[90vh] overflow-hidden sm:h-[80vh] bg-fixed  bg-cover bg-top ">
          <div className=' w-[100%] h-[100%] bg-opacity-15 flex items-center justify-center  sm:ml-0 sm:p-2 sm:justify-center '>
            <div className="collaboration-call w-[40%] sm:w-[90%]  md:w-[70%] p-10 gap-7  flex flex-col items-center justify-center bg-secondary bg-opacity-65 sm:gap-2 sm:p-4 ">
              <p className=' text-2xl text-tertiary text-center w-full font-semibold align-center justify-center sm:text-lg'>Want to Collaborate?</p>
              <h1 className=' text-2xl md:text-2xl sm:text-xl font-semibold text-primary  '>Let's work together to create change</h1>
              <p className='text-primary '>We are building a dynamic team of undergraduate and graduate students and postdocs who share our passion to better understand hydrology and water resources in a changing climate for a sustainable environment. To achieve this, we use field observations from station data and field campaign, multiple remote sensing techniques, land surface hydrologic models, and climate models along with big-data and machine learning (ML) techniques.</p>
              <a href="mailto:eunsang.cho@txstate.edu" target='_blank' rel='noreferrer'>

                <button className='border-primary border-2 p-5 text-primary px-7 hover:bg-primary hover:text-black duration-500'>Email Dr. Cho</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Research