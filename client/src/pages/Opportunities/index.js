import React, { useEffect, useState } from 'react'
// import JoinUs from './JoinUs'
import Navbar from '../../components/Navbar'
import Footer from '../Home/Footer'
import { FaHandHoldingWater } from "react-icons/fa";
import Quality from './Quality';
import MeetChoLab from './MeetChoLab';
import VacancyAnnouncement from './VacancyAnnouncement';
import { allContexts } from '../../Context/AllContexts';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Opportunities() {
  const { Data } = React.useContext(allContexts);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Scroll to the section when the hash changes
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1)); // Remove '#' from the hash
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  useEffect(() => {
    if (Data === undefined) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [Data]);

  return (
    <>

      <Helmet>
        <title>Opportunities | The Cho Lab </title>
        <meta
          name="description"
          content="Explore current research, internship, and fellowship opportunities at the Cho Lab, Texas State University. Join our team and contribute to water sustainability research."
        />
        <meta
          name="keywords"
          content="research opportunities, Cho Lab, Texas State University, San Marcos, graduate assistantship, undergraduate internship, postdoctoral fellowship, hydrology jobs, climate science jobs, water sustainability, environmental research positions"
        />
        <link rel="canonical" href="https://cholab.science/opportunities" />
        <meta property="og:title" content="Opportunities | The Cho Lab" />
        <meta property="og:description" content="Explore current research, internship, and fellowship opportunities at the Cho Lab, Texas State University. Join our team and contribute to water sustainability research." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cholab.science/opportunities" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Opportunities | The Cho Lab" />
        <meta name="twitter:description" content="Explore current research, internship, and fellowship opportunities at the Cho Lab, Texas State University. Join our team and contribute to water sustainability research." />
        {/* JSON-LD for all opportunities */}
      </Helmet>
      <Navbar />

      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/StaticImages/Opportunities.jpg)`,
        }}
        className="h-[90vh] overflow-hidden bg-fixed bg-cover bg-top -mb-2 sm:bg-center sm:bg-scroll sm:h-[100vh]"
      >
        <div className="w-[100%] h-[100%] bg-opacity-15 flex items-center justify-center sm:ml-0 sm:p-2 sm:justify-center">
          <div className="collaboration-call w-[40%] sm:w-[90%] md:w-[70%] p-9 gap-0 flex flex-col items-center justify-center bg-secondary bg-opacity-80 sm:gap-0.5 sm:p-4 mt-9">
            <div className="icon flex align-center justify-center text-3xl">
              <div className="bg-secondary rounded-full p-3">
                <FaHandHoldingWater className="text-primary text-6xl" />
              </div>
            </div>
            <h2 className="text-tertiary mt-1 sm:text-md sm:mt-0">SCIENCE FOR IMPACT</h2>
            <div className="joinUs-text text-3xl font-bold p-3 text-primary sm:my-0 sm:p-0.5">
              Join the Cho Lab.
            </div>
            <p className="leading-relaxed sm:text-justify text-primary">
              We are building a dynamic team of undergraduate and graduate students, as well as
              postdoctoral researchers, who share a passion for advancing our understanding of
              hydrology and water resources in a changing climate to promote a sustainable
              environment. We value self-motivation, a collaborative spirit, and a commitment to
              collective success. Our lab fosters an inclusive and diverse environment where everyone
              is empowered to thrive and contribute meaningfully.
            </p>

            <div>
              <Link to="/opportunities#vacancyAnnouncement">
                <div className="bg-opacity-0 border-[2px] p-3 px-5 mt-2 font-semibold text-primary cursor-pointer hover:bg-tertiary border-tertiary duration-500">
                  HIRING NOW!
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Quality />
      <MeetChoLab />

      {!isLoading && Data && Data.opporutunitiesAnnouncement && Data.opporutunitiesAnnouncement[0].announcementStatus ? (
        <VacancyAnnouncement
          id="vacancyAnnouncement"
          Data={Data.opporutunitiesAnnouncement[0]}
          className=""
        />
      ) : (
        ''
      )}

      <Footer />
    </>
  );
}

export default Opportunities;