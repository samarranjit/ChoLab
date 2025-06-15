import React, { useContext } from 'react'
import NewsCard from '../../components/NewsCard'
import { allContexts } from '../../Context/AllContexts';
function News() {
  const { Data } = useContext(allContexts);
  // Sort news in descending order by published date
  // Sort news in descending order by published date
  const sortedNews = Data && Data.news ?
    [...Data.news].sort((a, b) => {
      // Handle multiple possible date field names
      const dateA = new Date(a.publishedAt || a.createdAt || a.date || a.published_date);
      const dateB = new Date(b.publishedAt || b.createdAt || b.date || b.published_date);
      return dateB - dateA; // Descending order (newest first)
    }) : [];

  return (
    <div className=' p-[65px] flex flex-col sm:p-7 sm:my-2 dark:bg-[#323F4B]'>
      <p className='text-tertiary text-xl '>Latest from the Lab</p>

      <div className="grid grid-cols-3 justify-evenly gap-20 width-[100%] md:grid-cols-2 sm:grid-cols-1 sm:gap-3">

        {sortedNews?.slice(0, 3).map((item) => {
          return <NewsCard key={item._id} prop={item} />
        })
        }
      </div>

    </div>
  )
}

export default News