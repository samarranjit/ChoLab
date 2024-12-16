import React from 'react'

const Heading = () => {
  return (
    <div className="">
        <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/StaticImages/AlkekLib.jpg)` }} className=" h-[90vh] overflow-hidden md:h-[80vh] bg-fixed  bg-cover bg-top -mb-2 sm:bg-center sm:bg-scroll ">
        <div className=' w-[100%] h-[100%] bg-opacity-15 flex items-center justify-center  sm:ml-0 sm:p-2 sm:justify-center '>
              <div className="collaboration-call w-[40%] sm:w-[90%] md:w-[60%] p-10 gap-7  flex flex-col items-center justify-center bg-secondary bg-opacity-65 sm:gap-2 sm:p-4 ">
                <p className=' text-2xl text-tertiary text-center w-full font-semibold align-center justify-center sm:text-lg'>Teaching and Mentorship</p>
                <h1 className=' text-3xl md:text-2xl sm:text-xl font-semibold text-primary text-center  '>Committed to equity, excellence, and growth.</h1>
                <p className='text-primary text-center text-lg '>
                We challenge each other to grow and push the boundaries of science, while using transparent expectations and evidence-based best practices to create a classroom and lab environment that is welcoming to all.
                </p>
                <a href="mailto:eunsangcho86@gmail" target='_blank' rel='noreferrer'>

              {/* <button className='border-primary border-2 p-5 text-primary px-7 hover:bg-primary hover:text-black duration-500'>Email Dr. Cho</button> */}
                </a>
              </div>
            </div>
        </div>
      </div>
  )
}

export default Heading