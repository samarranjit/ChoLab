import React from 'react'
import { GiComputerFan , GiMaterialsScience} from 'react-icons/gi'
import { ImFlickr2 } from 'react-icons/im'

const CoreValues = () => {
  return (
    <div className="themes bg-secondary h-full p-8 pb-10 ">
        <div className="title text-center text-tertiary font-semibold text-3xl my-5 mb-0">Themes in Our Work</div>

        <div className="grid grid-cols-3 p-10 text-center gap-10  sm:grid-cols-1 sm:px-3">

          <div className="flex w-[100%]   justify-center items-center text-center  text-primary">
            <div className=" flex justify-center items-center flex-col">
              <div className="bg-tertiary p-4 my-5 text-secondary text-4xl rounded-full">
                <ImFlickr2></ImFlickr2>
              </div>
              <div className="my-4 text-2xl mb-5">Interdisciplinary Research</div>
              <h2 className='text-center p-3q'>We use computational engineering tools and integrate hydrology, data science, and policy analysis.</h2>

            </div>
          </div>

          <div className="flex w-[100%]   justify-center items-center text-center  text-primary">
            <div className=" flex justify-center items-center flex-col">
              <div className="bg-tertiary p-4 my-5 text-secondary text-4xl  rounded-full">
              <GiComputerFan/>

              </div>
              <div className="my-4 text-2xl mb-5">Computational Modeling</div>
              <h2 className='text-center p-3q'>We use computational experiments to build socio-ecological systems theory around why solutions work in some contexts but not others.</h2>

            </div>
          </div>

          <div className="flex w-[100%]   justify-center items-center text-center  text-primary">
            <div className=" flex justify-center items-center flex-col">
              <div className="bg-tertiary p-4 my-5 text-secondary text-4xl rounded-full">
              <GiMaterialsScience/>

              </div>
              <div className="my-4 text-2xl mb-5">Impact Driven Science</div>
              <h2 className='text-center p-3q'>We choose questions to support decision-making around critical environmental challenges, like climate change. </h2>

            </div>
          </div>

        </div>
      </div>
  )
}

export default CoreValues