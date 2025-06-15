import React, { useContext } from 'react'
import Navbar from '../../components/Navbar'
import DrCho from './DrCho'
import OtherMember from './OtherMember'
import Footer from '../Home/Footer'
import { Helmet } from 'react-helmet-async'
import { allContexts } from '../../Context/AllContexts'
function About() {
  const { Data } = useContext(allContexts);

  const teamJsonLd = Data?.team
    ? JSON.stringify(
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Dr. Eunsang Cho",
        "jobTitle": "Principal Investigator, Assistant Professor",
        "image": "https://www.cholab.science/ChoLabLogo.png",
        "email": "eunsang.cho@txstate.edu",
        "sameAs": [
          "https://www.linkedin.com/in/eunsang-cho-b455a8126/",
          "https://www.researchgate.net/profile/Eunsang-Cho",
          "https://scholar.google.co.kr/citations?user=G6CX5wsAAAAJ&hl=en"
        ],
        "description": "Dr. Eunsang Cho is an Assistant Professor at Texas State University, specializing in hydrology, water resources, and climate research. His work focuses on understanding the impacts of climate change on water systems.",
        "affiliation": "Texas State University",
        "url": "https://cholab.science/about"
      },
      Data.team.map(member => ({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": member.name,
        "jobTitle": member.position,
        "image": member.img,
        "email": member.email,
        "sameAs": member.linkedin,
        "description": member.desc,
        "affiliation": "Texas State University",
        "url": "https://cholab.science/about"
      }))
    )
    : "[]";
  return (
    <>
      <Helmet>
        <title>About Team | The Cho Lab</title>
        <meta name="description" content="Meet the Cho Lab team at Texas State University. Learn about our members, mission, and research focus on hydrology, water resources, and climate." />
        <link rel="canonical" href="https://cholab.science/about" />


        <meta property="og:title" content="About The Team | The Cho Lab" />
        <meta property="og:description" content="Meet the Cho Lab team at Texas State University. Learn about our members, mission, and research focus on hydrology, water resources, and climate." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cholab.science/about" />


        <script type="application/ld+json">{teamJsonLd}</script>
      </Helmet>
      <Navbar />
      <DrCho />
      <OtherMember />
      <div className="">
        <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/StaticImages/Opportunities.jpg)` }} className=" h-[90vh] overflow-hidden sm:h-[80vh] bg-fixed  bg-cover bg-bottom -mb-[5.5rem]">
          <div className=' w-[100%] h-[100%] bg-opacity-15 flex items-center justify-center  sm:ml-0 sm:p-2 sm:justify-center '>
            <div className="collaboration-call w-[40%] sm:w-[90%] md:w-[70%] p-10 gap-7  flex flex-col items-center justify-center bg-secondary bg-opacity-65 sm:gap-2 sm:p-4 ">
              <p className=' text-2xl text-tertiary text-center w-full font-semibold align-center justify-center sm:text-lg'>Do you want to join the team?</p>
              <h1 className=' text-3xl md:text-2xl sm:text-xl font-semibold text-primary  '>Join the Cho Lab</h1>
              <p className='text-primary '>We are building a dynamic team of undergraduate and graduate students and postdocs who share our passion to better understand hydrology and water resources in a changing climate for a sustainable environment. To achieve this, we use field observations from station data and field campaign, multiple remote sensing techniques, land surface hydrologic models, and climate models along with big-data and machine learning (ML) techniques.</p>
              <a href="/opportunities" target='_blank' rel='noreferrer'>

                <button className='border-primary border-2 p-5 text-primary px-7 hover:bg-primary hover:text-black duration-500'>Lab Opportunities</button>
              </a>
            </div>
          </div>
        </div>
      </div>



      <Footer />
    </>
  )
}

export default About