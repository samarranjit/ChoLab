// import React from 'react'
import Navbar from '../../components/Navbar'
import Intro from './Intro'
import Research from './Research'
import Publications from './Publications'
import News from './News'
import Footer from './Footer'
import EachSectionConnection from './EachSectionConnection'
function Home() {
  return (
    <>
        <Navbar/>
        <Intro />
        <Research />
        <Publications />
        <News />
        <EachSectionConnection/>

        <div className=" my-1 scroll-none p-10 flex flex-col justify-center items-center">

          <h2 className='text-2xl text-tertiary py-2 text-left justify-left'>Follow Dr. Cho on Linkedin: </h2>
          <div className="w-[80%] sm:w-[100%]">

        <iframe src='https://widgets.sociablekit.com/linkedin-profile-posts/iframe/25488565' className='scroll-none m-auto' frameborder='0' width='100%' height='1000'></iframe>
          </div>
        </div>


        <Footer />
    </>
  )
}

export default Home
