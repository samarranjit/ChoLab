import React, {useContext} from 'react'
import NewsCard from '../../components/NewsCard'
import { allContexts } from '../../Context/AllContexts';
function News() {
  const {Data} = useContext(allContexts);
  return (
    <div className=' p-[65px] flex flex-col sm:p-7 sm:my-2 dark:bg-[#323F4B]'>
        <p className='text-tertiary text-xl '>Latest from the Lab</p>

        <div className="grid grid-cols-3 justify-evenly gap-20 width-[100%] md:grid-cols-2 sm:grid-cols-1 sm:gap-3">

        {Data && Data.news && Data.news.slice(0, 3).map((item)=>{
        return <NewsCard key={item._id} prop={item} />
      })
      }
        </div>

      </div>
  )
}

export default News