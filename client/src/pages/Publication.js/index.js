import React, { useContext } from 'react';
import Navbar from '../../components/Navbar';
import PublicationCard from './PublicationCard';
import { allContexts } from '../../Context/AllContexts';
import Footer from "../Home/Footer";
import { Helmet } from 'react-helmet-async';

function Publication() {
  const { Data } = useContext(allContexts);

  //Group publications by year
  const groupedPublications = Data && Data.publication
    ? Data.publication.reduce((acc, item) => {
      // Only process items with a "Published" status
      if (item.status === "Published" && item.date) {
        const year = new Date(item.date).getFullYear(); // Extract year from date
        if (!acc[year]) acc[year] = [];
        acc[year].push(item);
      }
      // console.log(new Date(item.date))
      return acc;
    }, {})
    : {};
  // console.log(groupedPublications)
  // console.log(groupedPublicationsx)
  // Sort years in descending order
  const sortedYears = Object.keys(groupedPublications).sort((a, b) => b - a);

  // console.log(sortedYears)

  const publicationsJsonLd = JSON.stringify(
    Data?.publication?.map(pub => ({
      "@context": "https://schema.org",
      "@type": "ScholarlyArticle",
      "headline": pub.title,
      "author": {
        "@type": "Person",
        "name": "Eunsang Cho"
      },
      "datePublished": new Date(pub.date).getFullYear(),
      "isPartOf": {
        "@type": "Periodical",
        "name": pub.journal
      },
      "url": pub.link,
      "image": pub.imgUrl,
      "description": pub.details,
    }))
  );

  return (
    <div className='relative'>
      <Helmet>
        <title> Publications | The Cho Lab</title>
        <meta name="description" content="Explore publications from Dr. Eunsang Cho and his team members at The Cho Lab, advancing research in hydrology, water resources, and climate science." />
        <meta
          name="keywords"
          content="research publications, Cho Lab, Texas State University, San Marcos, hydrology, climate science, water resources, environmental research, lab achievements, research publications, Cho Lab news, Eunsang Cho, hydrology research, climate change updates, water resources research, environmental science news, new findings, scientific articles, peer-reviewed papers, hydrology publications, climate research publications, water sustainability research, environmental science publications, academic publications, research articles, scientific research, hydrology and climate science, water resources publications, environmental research publications"
        />
        <link rel="canonical" href="https://cholab.science/publication" />
        <meta property="og:title" content="Publications | The Cho Lab" />
        <meta property="og:description" content="Explore publications from Dr. Eunsang Cho and his team members at The Cho Lab, advancing research in hydrology, water resources, and climate science." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cholab.science/publication" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Publications | The Cho Lab " />
        <meta name="twitter:description" content="Browse publications from Dr. Eunsang Cho and his team members at The Cho Lab, advancing research in hydrology, water resources, and climate science." />
        <meta name="twitter:image" content="https://cholab.science/ChoLabLogo.png" />
        <meta name="twitter:url" content="https://cholab.science/publication" />

        <script type="application/ld+json">{publicationsJsonLd}</script>

      </Helmet>
      <Navbar />

      <div className="publications-div relative bg-white text-secondary p-7 sm:p-5 md:top-[60px]">
        <h2 className='flex justify-center text-center p-3 text-secondary text-2xl sm:p-2'>
          <section className='inline border-b-[2px] font-semibold border-tertiary sm:text-xl sm:p-2 sm:font-semibold pb-3'>
            Eunsang Cho publications and links to papers
          </section>
        </h2>
        <div className=" h-full w-full sm:flex sm:flex-col">
          <h2 className='items-center  justify-center text-center  text-xl w-full sm:text-xl sm:p-2'>
            Follow Dr. Cho on :
          </h2>
          <div className="cards flex flex-wrap my-5 justify-evenly sm:flex-col sm:gap-y-5 sm:justify-center sm:items-center">
            <a target='_blank' rel="noreferrer" href="https://scholar.google.co.kr/citations?user=G6CX5wsAAAAJ&hl=en" className=' py-2 px-5 google-scholar  text-secondary cursor-pointer border-secondary border-[2.5px] flex sm:w-[70%] justify-center font-semibold  hover:bg-secondary hover:text-primary transition duration-500 sm:p-3  '>
              Google Scholar
            </a>
            <a target='_blank' rel="noreferrer" href="https://www.researchgate.net/profile/Eunsang-Cho" className='py-2 px-5 research-gate p-1  text-tertiary cursor-pointer  border-tertiary border-[2.5px] flex  sm:w-[70%] justify-center font-semibold hover:bg-tertiary hover:text-primary transition duration-500 sm:p-3  '>
              ResearchGate
            </a>
          </div>
        </div>
        <div className="in-revision pt-8  mx-7 justify-center items-start sm:flex-col sm:m-2 sm:p-2 text-center ">
          <h2 className=' w-[15%] md:w-[100%] text-2xl sm:text-xl text-center mx-auto  '>
            Under Review :
          </h2>
          <div className=" border-b-[2px] border-b-secondary w-[15%] mx-auto md:w-[35%] sm:w-[50%]"></div>
          <div className="publication-cards p-5 sm:p-1 sm:w-full w-[90%] flex flex-col justify-center mx-auto md:px-0">
            {Data && Data.publication && Data.publication.reverse().map((item) => (
              item.status === "Review" ?
                <PublicationCard
                  key={item._id}
                  sequence={item.publication_sequence}
                  title={item.title}
                  details={item.details}
                  link={item.link}
                  imgUrl={item.imgUrl}
                /> : <></>))}
          </div>
        </div>
        <div className='border-b-[2px] border-tertiary h-[5px]'> </div>
        <div className="published py-5 px-8  mx-7  justify-center items-start sm:flex-col md:px-0 sm:m-1">
          <h2 className='w-[12%] md:w-[100%] text-2xl sm:text-xl mx-auto text-center'>
            Published :
          </h2>
          <div className=" border-b-[2px] border-b-secondary w-[15%] mx-auto md:w-[35%] sm:w-[50%]"></div>
          <div className="publication-cards w-full md:w-full px-5 md-px-0">
            {sortedYears.map((year) => (
              <div className=" justify-center item-center">

                <div key={year} className="year-group mb-5 flex flex-col justify-center  pt-7">
                  <h3 className="text-2xl font-semibold mb-3 w-[15%] items-center sm:w-full">{year} :</h3>
                  <div className="publication-cards  w-[90%] flex flex-col justify-center mx-auto sm:w-full ">
                    {groupedPublications[year].map((item) => (
                      <PublicationCard
                        key={item._id}
                        sequence={item.publication_sequence}
                        title={item.title}
                        details={item.details}
                        link={item.link}
                        imgUrl={item.imgUrl}
                      />
                    ))}
                  </div>
                </div>
                <div className="h-[2.5px] inline-block ma-auto bg-gray-200 w-[80%] justify-center items-center"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />


    </div>
  )
}

export default Publication;
