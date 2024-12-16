import React from 'react'
import { Link } from 'react-router-dom'

const MeetChoLab = () => {
  return (
    <div className='h-full pt-9 sm:pt-5'>
        <h2 className='text-center text-2xl text-tertiary sm:text-xl'>Meet The Cho Lab!</h2>
        <div className=" flex align-center justify-center items-center p-9 sm:px-2">
          <Link to={"/about#DrChoInfo"} className='flex align-center items-center justify-center'>
            <img src={`${process.env.PUBLIC_URL}/StaticImages/group_photo.jpg`} className="w-[70%] md:w-[90%] sm:w-full" alt="" />
          </Link>
        </div>
        <div className="bg-tertiary h-[1.5px] w-[50%] m-auto "></div>
       
    
    </div>
  )
}

export default MeetChoLab