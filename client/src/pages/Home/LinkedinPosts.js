import React from 'react'

const LinkedinPosts = () => {
  return (
    <div className="">
        
        <div className=" my-1 scroll-none p-10 flex flex-col justify-center items-center">

          <h2 className='text-2xl text-tertiary py-2 text-left justify-left'>Follow Dr. Cho on Linkedin: </h2>
          <div className="w-[80%] sm:w-[100%]">

        <iframe src='https://widgets.sociablekit.com/linkedin-profile-posts/iframe/25488565' 
        style={{ overflow: 'hidden', scrollbarWidth: 'none' }}
        className='scroll-none m-auto overflow-hidden' frameborder='0' width='100%' height='1000'></iframe>
          </div>
        </div>
    </div>
  )
}

export default LinkedinPosts