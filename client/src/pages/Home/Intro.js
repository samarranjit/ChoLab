import React, { useContext } from 'react'
import { Typewriter } from "react-simple-typewriter"
import { allContexts } from '../../Context/AllContexts'
import Loader from '../../components/Loader';

function Intro() {
  const { Data, showLoading } = useContext(allContexts);

  return (
    <>
      <div className="Intro-bg-img-div -z-10 ">
        {showLoading ? <Loader /> :
          <div className=" h-[100vh] sm:h-[80vh] bg-fixed  bg-[url('https://plus.unsplash.com/premium_photo-1665311554931-5f8b7dc3d7a5?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-top">
            <div className='bg-secondary w-[100%] h-[100%] bg-opacity-15 items-center justify-center'>
              <div className="intro-text w-[100%] h-[100%] flex flex-col items-center justify-center">
                <h1 className=' text-5xl md:text-4xl sm:text-2xl p-7 pt-[7rem] font-semibold text-primary  '>"{<Typewriter words={[`${Data?.intro?.slogan}`]} typeSpeed={50}>  </Typewriter>}"</h1>
                {/* <button className='p-3 z-2 w-[15%] sm:w-[50%] text-2xl text-[white]  text-black border-none bg-tertiary transition duration-500  hover:bg-primary hover:border-tertiary hover:text-tertiary rounded-[5%] border-[2px] '>
                  <section className=''>
                    Our Works
                  </section>
                </button> */}
              </div>
            </div>
          </div>

        }
      </div>


    </>
  )
}

export default Intro