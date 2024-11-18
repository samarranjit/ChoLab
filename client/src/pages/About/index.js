import React from 'react'
import Navbar from '../../components/Navbar'
import DrCho from './DrCho'
import OtherMember from './OtherMember'
import Footer from '../Home/Footer'
import { Link } from 'react-router-dom'
function index() {
  return (
    <>
    
    <Navbar />
    <DrCho />
    <OtherMember />
    <div className="">
        <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/collaborationBgImg.jpg)` }} className=" h-[90vh] overflow-hidden sm:h-[80vh] bg-fixed  bg-cover bg-bottom -mb-2">
        <div className=' w-[100%] h-[100%] bg-opacity-15 flex items-center justify-center  sm:ml-0 sm:p-2 sm:justify-center '>
              <div className="collaboration-call w-[40%] sm:w-[90%] p-10 gap-7  flex flex-col items-center justify-center bg-secondary bg-opacity-65 sm:gap-2 sm:p-4 ">
                <p className=' text-2xl text-tertiary text-center w-full font-semibold align-center justify-center sm:text-lg'>Do you want to join the team?</p>
                <h1 className=' text-3xl md:text-2xl sm:text-xl font-semibold text-primary  '>Join the Cho Lab</h1>
                <p className='text-primary '>We are building a dynamic team of undergraduate and graduate students and postdocs who share our passion to better understand hydrology and water resources in a changing climate for a sustainable environment. To achieve this, we use field observations from station data and field campaign, multiple remote sensing techniques, land surface hydrologic models, and climate models along with big-data and machine learning (ML) techniques.</p>
                <Link to="/opportunities" target='_blank' rel='noreferrer'>

              <button className='border-primary border-2 p-5 text-primary px-7 hover:bg-primary hover:text-black duration-500'>Lab Opportunities</button>
                </Link>
              </div>
            </div>
        </div>
      </div>



    <Footer />
    </>
  )
}

export default index