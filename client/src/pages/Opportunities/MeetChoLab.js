import React from 'react'

const MeetChoLab = () => {
  return (
    <div className='h-full pt-[5rem] sm:pt-5'>
        <h2 className='text-center text-2xl text-tertiary sm:text-xl'>Meet The Cho Lab!</h2>
        <div className=" flex align-center justify-center items-center p-9 sm:px-2">
            <img src={`${process.env.PUBLIC_URL}/StaticImages/group_photo.jpg`} className="w-[70%] sm:w-full" alt="" />
        </div>
        <div className="bg-tertiary h-[1.5px] w-[50%] m-auto"></div>
        <div className="mx-auto text-center p-5 font-semibold ">
            <p>"A team of "</p>
        </div>
        <div className="bg-tertiary h-[1.5px] w-[50%] m-auto"></div>
    
    </div>
  )
}

export default MeetChoLab