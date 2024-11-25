import React from 'react'
import Navbar from '../../components/Navbar'
import NewsCard from '../../components/NewsCard'
import Footer from '../Home/Footer'
import { allContexts } from '../../Context/AllContexts'
function News() {
  const {Data} = React.useContext(allContexts);
  
  return (
    <>
    <Navbar/>
    <div className="">
        <h2 className='text-3xl text-center p-2  sm:pt-[80px]'><section className='border-b-tertiary border-b-[2px] inline p-2 '>Latest News</section></h2>
    </div>
    <div className="grid grid-cols-3 p-7 justify-evenly gap-20 width-[100%] sm:grid-cols-1 sm:gap-1 mb-[2rem]">
      {Data && Data.news && Data.news.map((item)=>{
        return <NewsCard key={item._id} prop={item} />
      })
      }
    </div>

    <Footer></Footer>
    </>
  )
}

export default News