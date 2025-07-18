import React, { useContext } from 'react'
import Navbar from '../../components/Navbar'
import DrCho from './DrCho'
import OtherMember from './OtherMember'
import Footer from '../Home/Footer'
import { Helmet } from 'react-helmet-async'
import { allContexts } from '../../Context/AllContexts'
import { Link } from 'react-router-dom'
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
        <div
          style={{ backgroundImage: `url(/StaticImages/Opportunities.jpg)` }}
          className="h-[80vh] md:h-[90vh] overflow-hidden bg-fixed bg-cover bg-bottom -mb-[5.5rem]"
        >
          <div className='w-[100%] h-[100%] bg-opacity-15 flex items-center justify-center ml-0 p-2 md:ml-0 md:p-2'>
            <div className="collaboration-call w-[90%] md:w-[70%] lg:w-[40%] p-4 gap-2 md:gap-7 md:p-10 flex flex-col items-center justify-center bg-secondary bg-opacity-65">
              <p className='text-lg md:text-2xl text-tertiary text-center w-full font-semibold align-center justify-center'>
                Do you want to join the team?
              </p>
              <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary'>
                Join the Cho Lab
              </h1>
              <p className='text-primary'>
                We are building a dynamic team of undergraduate and graduate students and postdocs who share our passion to better understand hydrology and water resources in a changing climate for a sustainable environment. To achieve this, we use field observations from station data and field campaign, multiple remote sensing techniques, land surface hydrologic models, and climate models along with big-data and machine learning (ML) techniques.
              </p>
              <Link href="/opportunities">
                <button className='border-primary border-2 p-5 text-primary px-7 hover:bg-primary hover:text-black duration-500'>
                  Lab Opportunities
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>



      <Footer />
    </>
  )
}

export default About