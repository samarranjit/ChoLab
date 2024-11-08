import React, { useContext } from 'react'
import { Typewriter } from "react-simple-typewriter"
import { allContexts } from '../../Context/AllContexts'
import Loader from '../../components/Loader';

function Intro() {
  const { Data, showLoading } = useContext(allContexts);
  const img = `${process.env.PUBLIC_URL}/TxstNightTimeImage.jpg`;


  return (
    <>
      <div className="Intro-bg-img-div -z-10 ">
        {showLoading ? <Loader /> :
          <div
            className=" h-[100vh] sm:h-[80vh] bg-fixed bg-cover bg-right-bottom"
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="bg-secondary h-full w-full bg-opacity-[0.05]">


              <div className='bg-secondary w-[100%] h-[100%] bg-opacity-15 items-center justify-center'>
                <div className="intro-text w-[100%] h-[100%] flex flex-col items-center justify-center">
                  <h1 className=' text-5xl md:text-4xl text-center sm:text-2xl lg:mt-[-90px] p-7 pt-[7rem] font-semibold text-primary  '>"{<Typewriter words={[`${Data?.intro?.slogan}`]} typeSpeed={50}>  </Typewriter>}"</h1>
                  {/* <button className='p-3 z-2 w-[15%] sm:w-[50%] text-2xl text-[white]  text-black border-none bg-tertiary transition duration-500  hover:bg-primary hover:border-tertiary hover:text-tertiary rounded-[5%] border-[2px] '>
                  <section className=''>
                  Our Works
                  </section>
                </button> */}
                </div>
              </div>
            </div>
          </div>

        }
      </div>


    </>
  )
}

export default Intro