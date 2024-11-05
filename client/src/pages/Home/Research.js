import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { allContexts } from '../../Context/AllContexts'

function Research() {
  const {Data} = useContext(allContexts);
  // const research_oneLine = Data?.intro?.research_oneLine;
  // console.log(research_oneLine);

  return (
    <div className='h-full  p-[65px] flex justify-center items-center sm:flex-col  md:h-[full]  sm:h-full sm:p-7'>
      <div className="left w-[65%] sm:w-[100%]">
        <p className='text-tertiary text-2xl sm:text-xl '>About Our Research</p>
        
        <div className="right w-[30%] -z-2 sm:w-[100%] hidden sm:inline sm:my-1">

      <lottie-player src="https://lottie.host/33499152-b2e8-4197-bacb-a7c3022dc1b3/8J5ZDjrToX.json"  background="transparent"  speed="1"  style={{width:" 100%", height: "100%"}} loop className='animators sm:w-[100%]' autoplay></lottie-player>


      </div>

        <h2 className='py-3 text-3xl sm:text-xl  font-semibold text-[#424242] '>{Data && Data.intro && Data.intro.research_oneLine}</h2>
        <p className='p-5 sm:p-1'>
        {Data && Data.intro.research_Desc}
        </p>
        <Link to="/research">
        
        <button className='my-10 p-5 border-secondary border-[2px] rounded-[50px] text-secondary font-semibold text-1xl hover:text-primary hover:bg-secondary transition duration-500' >Our Researches</button>
        </Link>
      </div>
      <div className="right w-[30%] -z-2 sm:w-[100%] sm:hidden">

      <lottie-player src="https://lottie.host/33499152-b2e8-4197-bacb-a7c3022dc1b3/8J5ZDjrToX.json"  background="transparent"  speed="1"  style={{width:" 100%", height: "100%"}} loop className='animators sm:w-[100%]' autoplay></lottie-player>


      </div>
      </div>
  )
}

export default Research