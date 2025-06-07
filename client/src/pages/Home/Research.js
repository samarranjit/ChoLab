import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { allContexts } from '../../Context/AllContexts'

function Research() {
  const { Data } = useContext(allContexts);
  // const research_oneLine = Data?.intro?.research_oneLine;
  // console.log(research_oneLine);

  return (
    <div className='h-[90vh] px-[50px] py-[50px]  flex justify-center items-center sm:flex-col md:justify-around md:h-full md:p-7 dark:bg-slate-800 '>
      <div className="left w-[55%] md:w-[100%] p-5 md:p-1  ">
        <p className='text-tertiary text-2xl sm:text-xl '>About Our Research</p>

        <div className="right w-[50%] -z-2 sm:w-[100%] hidden sm:inline sm:my-1 ">



        </div>

        <h2 className='py-2  text-3xl sm:text-xl  font-semibold text-[#424242] dark:text-primary '>{Data && Data.intro && Data.intro.research_oneLine}</h2>
        <div className="right w-[30%] sm:w-[100%] hidden sm:inline-block">

          {/* <lottie-player src="https://lottie.host/33499152-b2e8-4197-bacb-a7c3022dc1b3/8J5ZDjrToX.json"  background="transparent"  speed="1"  style={{width:" 100%", height: "100%"}} loop className='animators sm:w-[100%]' autoplay></lottie-player> */}
          <img alt='' src={`${process.env.PUBLIC_URL}/StaticImages/Home_ResearchBgImage.jpg`} className='p-2 -translate-y-5 sm:translate-y-[0]' />


        </div>
        <p className='p-5 sm:p-1 sm:text-justify dark:text-white lg:pl-0'>
          {Data && Data?.intro?.research_Desc}
        </p>

        <Link to="/research">

          <button className='my-10 p-5 border-secondary border-[2px] rounded-[50px] text-secondary font-semibold text-1xl hover:text-primary hover:bg-secondary transition duration-500' >Our Research</button>
        </Link>
      </div>
      <div className="right w-[30%] -z-2 md:w-[75%] sm:w-[100%] sm:hidden pb-[4rem]">

        {/* <lottie-player src="https://lottie.host/33499152-b2e8-4197-bacb-a7c3022dc1b3/8J5ZDjrToX.json"  background="transparent"  speed="1"  style={{width:" 100%", height: "100%"}} loop className='animators sm:w-[100%]' autoplay></lottie-player> */}
        <img alt='' src={`${process.env.PUBLIC_URL}/StaticImages/Home_ResearchBgImage.jpg`} className='p-2 -translate-y-5' />


      </div>
    </div>
  )
}

export default Research