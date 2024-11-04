import React, { useContext } from 'react'
import '../../index.css'
import { Link } from 'react-router-dom'
import { allContexts } from '../../Context/AllContexts'
function Publications() {
    const { Data } = useContext(allContexts);
    // console.log(Data?.intro?.publication_desc);
    return (
        <div className="h-[full] p-[65px] sm:p-7 bg-secondary flex justify-center items-center wave-top sm:h-full sm:flex-col relative">
            <div className="custom-shape-divider-top-1730584481 sm:translate-y-10 sm:rotate-180">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className="right w-[30%] sm:hidden">

                <lottie-player src="https://lottie.host/d4376f48-0ec5-4610-b145-93b753ff97f1/PpU2an7jpl.json" background="transparent" speed="1" style={{ width: " 100%", height: "100%" }} loop autoplay></lottie-player>


            </div>
            <div className="left w-[65%] sm:w-[100%] ">
                <p className='text-tertiary text-2xl text-right font-semibold px-5 sm:p-0 sm:text-xl sm:text-left'>Publications</p>
                <h2 className='py-5 text-3xl font-semibold text-[#f9f9f9] sm:text-xl '>

                    {Data && Data.intro && Data.intro.publication_oneLine}

                </h2>
                <p className='p-5 sm:p-1 text-primary text-right sm:text-left'>

                    {Data && Data.intro && Data.intro.publication_desc}

                </p>
                <Link to="/publication">
                    <button className='my-10 p-5 flex  right-0 ml-auto mx-5  border-tertiary border-[2px] rounded-[50px] text-primary bg-tertiary font-semibold text-1xl hover:text-secondary hover:bg-primary hover:border-secondary transition duration-500' >Our Publications</button>
                </Link>


            </div>

            <div className="right w-[90%] hidden sm:inline">

                <lottie-player src="https://lottie.host/d4376f48-0ec5-4610-b145-93b753ff97f1/PpU2an7jpl.json" background="transparent" speed="1" style={{ width: " 100%", height: "100%" }} loop autoplay></lottie-player>


            </div>

        </div>
    )
}

export default Publications