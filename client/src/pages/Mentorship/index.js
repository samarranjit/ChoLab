import React from 'react'
import Navbar from '../../components/Navbar'
import Heading from './Heading'
import CoreValues from './CoreValues'
import Footer from '../Home/Footer'
import CurrrentCourses from './CurrentCourses'

const index = () => {
  return (
    <div className="">

    <Navbar />
    <div className="bg-secondary h-full w-full bg-opacity-[0.05]">

          <Heading />
          <CoreValues />
          <CurrrentCourses />

          <Footer />

              
            </div>
                </div>
  )
}

export default index
