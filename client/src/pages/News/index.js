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
        <h2 className='text-3xl text-center p-2 m-2 sm:m-0'><section className='border-b-tertiary border-b-[2px] inline p-2'>News</section></h2>
    </div>
    <div className="grid grid-cols-3 p-7 justify-evenly gap-20 width-[100%] sm:grid-cols-1 sm:gap-1">
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