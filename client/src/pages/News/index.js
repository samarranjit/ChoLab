import React from 'react'
import Navbar from '../../components/Navbar'
import NewsCard from '../../components/NewsCard'
import Footer from '../Home/Footer'
import { allContexts } from '../../Context/AllContexts'
import { Helmet } from 'react-helmet-async'
function News() {
  const { Data } = React.useContext(allContexts);



  // Sort news in descending order by published date
  const sortedNews = Data && Data.news ?
    [...Data.news].sort((a, b) => {
      // Handle multiple possible date field names
      const dateA = new Date(a.publishedAt || a.createdAt || a.date || a.published_date);
      const dateB = new Date(b.publishedAt || b.createdAt || b.date || b.published_date);
      return dateB - dateA; // Descending order (newest first)
    }) : [];


  return (
    <>

      <Helmet>
        <title>News | The Cho Lab </title>
        <meta name="description" content="Latest news and updates from the Cho Lab at Texas State University. Stay informed about our research, publications, achievements, and events." />
        <link rel="canonical" href="https://cholab.science/news" />
        <meta property="og:title" content="News | The Cho Lab" />
        <meta
          name="keywords"
          content="Research News, Cho Lab, Texas State University, San Marcos, updates, hydrology, climate science, water sustainability, environmental research, lab achievements, research publications, Cho Lab news, Eunsang Cho, hydrology research, climate change updates, water resources research, environmental science news"
        />
        <meta property="og:description" content="Latest news and updates from the Cho Lab at Texas State University. Stay informed about our research, publications, achievements, and events." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cholab.science/news" />
      </Helmet>
      <Navbar />
      <div className="relative md:top-[100px]">
        <div className=" ">
          <h2 className='text-3xl text-center p-2 '><section className='border-b-tertiary border-b-[2px] inline p-2 '>Latest News</section></h2>
        </div>
        <div className="grid grid-cols-3 p-7 justify-evenly gap-20 width-[100%] md:grid-cols-2 sm:grid-cols-1 sm:gap-1 mb-[2rem] items-center ">
          {sortedNews?.map((item) => {
            return <NewsCard key={item._id} prop={item} />
          })
          }
        </div>
      </div>

      <Footer></Footer>
    </>
  )
}

export default News