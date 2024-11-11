import React, { useContext } from 'react'
import Navbar from '../../components/Navbar'
import { allContexts } from '../../Context/AllContexts'
import Loader from '../../components/Loader'
import Footer from '../Home/Footer'
function Research() {
  const { showLoading} = useContext(allContexts)
  return (
    <div>
      <Navbar></Navbar>

      <div className="Intro-bg-img-div -z-10 ">
        {showLoading ? <Loader /> :
          <div className=" h-[100vh] overflow-hidden sm:h-[80vh] bg-fixed  bg-[url('https://images.unsplash.com/photo-1669077411489-aecca1c06d92?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-bottom">
            <div className=' w-[100%] h-[100%] bg-opacity-15 flex items-center justify-left ml-[15%] sm:ml-0 sm:p-2 sm:justify-center '>
              <div className="intro-text w-[30%] sm:w-[90%] p-10 gap-7  flex flex-col items-center justify-around bg-secondary bg-opacity-65 sm:gap-2 sm:p-4 ">
                <p className=' text-2xl text-tertiary text-left w-full font-semibold align-left justify-left sm:text-lg'>Our Research</p>
                <h1 className=' text-4xl md:text-4xl sm:text-2xl font-semibold text-primary  '>Hydrology and Water Resources in a Changing Climate for a Sustainable Environment</h1>
                <p className='text-primary '>We are building a dynamic team of undergraduate and graduate students and postdocs who share our passion to better understand hydrology and water resources in a changing climate for a sustainable environment. To achieve this, we use field observations from station data and field campaign, multiple remote sensing techniques, land surface hydrologic models, and climate models along with big-data and machine learning (ML) techniques.</p>
              </div>
            </div>
          </div>

        }
      </div>

      <div className="themes bg-secondary h-[250px] ">
        <div className="grid grid-cols-3 p-5 text-center font">
          <div className="flex w-[25%]">Theme1</div>
          <div className="flex w-[25%]">Theme2</div>
          <div className="flex w-[25%]">Theme3</div>
        </div>
      </div>

      <div className="h-full p-[7rem] research-div bg-primary sm:p-4 sm:py-[4.5rem]">
        <h2 className='text-tertiary text-2xl sm:text-lg sm:font-semibold'>
          
        Research:
        </h2>

        <h2 className='text-2xl py-7 sm:text-xl '>Satellite Enhanced Snowmelt Flood Predictions in the Red River of the North Basin supported by the NASA Water Resources Applied Sciences Program (Aug 2015 - Dec 2019)</h2>
        
        <h2 className='text-xl pl-7 leading-8 sm:leading-normal sm:text-lg'>We propose to enhance the North Central River Forecast Center’s (NCRFC) snowmelt flood predictions capacity through the inclusion of remotely sensed snow and soil moisture products in the NCRFC’s river forecast system. The National Oceanic and Atmospheric Administration (NOAA) National Weather Service’s (NWS) network of River Forecast Centers (RFCs) are responsible for providing river flood forecasts and warnings to protect people and assets. Additionally, these thirteen RFCs, covering the entire United States, support the optimal use of reservoirs and river related economic and environmental functions. The NCRFC models river flow in three major basins, Great Lakes, Hudson Bay, and Mississippi river, and issues forecasts at 426 forecast points for 1173 subwatersheds. This project targets the 100,000+km2 Red River of the North Basin (RRB) in the Hudson Bay drainage area. Co-PI Restrepo is the Hydrologist in Charge of the NCRFC of the NWS and is responsible for the NCRFC’s river models and forecasts. The RFCs use river forecast models to estimate the volume and stage of water flowing through the US Rivers. These models estimate the amount of runoff a precipitation or snowmelt event generates, compute how the water will move downstream, and then predict the flow of water at a given location throughout the forecast period. Longer-range forecasts (90 days) are produced monthly starting in January using probabilistic methods based on the current conditions of the basin. Deterministic forecasts are made for shortrange outlooks to predict flood potential (every six hours, out 3 to 5 days). To forecast precipitation or snowmelt events, the river model requires initial state variables (e.g., snowpack, snow covered area, soil moisture, etc.) and uses both observed and forecast precipitation and temperature to predict the river levels. Daily, hydrometeorologists at the NWS RFCs collect and quality control observations and forecasts. State variables are established using model output or observations. RFC hydrologists enter these data into their river models. Model output is examined and adjusted to produce the best forecast possible. The river forecasts are sent to the NWS Weather Forecast Offices (WFOs), who in turn issue flood watches and warnings to the public.</h2>
      </div>

      <Footer/>
    </div>
  )
}

export default Research