import React from 'react'

const Quality = () => {
  return (
    <div className="bg-secondary  text-primary p-7 sm:p-2">
        <h2 className='text-center p-9 text-3xl sm:text-2xl'>We seek researchers with expertise in one or more of these areas:  </h2>
        <div className="h-[2px] bg-tertiary mx-10"></div>
        <div className="grid grid-cols-3 text-center gap-5 sm:grid-cols-1">
          <div className="skillsList my-7">
            <p className='text-tertiary text-lg'>01</p>
            <h2 className="text-2xl p-2 ">Hydrology and Climate</h2>
            <p className='p-5 leading-loose'> Investigating hydrological processes under changing climate conditions using land surface and climate models.</p>

          </div>
          <div className="skillsList my-7">
            <p className='text-tertiary text-lg'>02</p>
            <h2 className="text-2xl p-2 ">Remote Sensing and Data Analytics</h2>
            <p className='p-5 leading-loose'>Applying satellite/UAV sensing and AI/machine learning to predict water systems, crop productivity, and extreme events.</p>
          </div>
          <div className="skillsList my-7">
            <p className='text-tertiary text-lg'>03</p>
            <h2 className="text-2xl p-2 ">Sustainable Water Management</h2>
            <p className='p-5 leading-loose'> Developing solutions for drought, flooding, and water quality challenges to support resilient communities and environmental justice.</p>
          </div>

        </div>
        <div className="h-[2px] bg-tertiary mx-10 mb-10"></div>
      </div>
  )
}

export default Quality