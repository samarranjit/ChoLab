import React, { useContext } from 'react';
import Navbar from '../../components/Navbar';
import PublicationCard from './PublicationCard';
import { allContexts } from '../../Context/AllContexts';
import Footer from "../Home/Footer";

function Publication() {
  const { Data } = useContext(allContexts);

  return (
    <>
      <Navbar />
      <div className="header flex flex-col justify-center items-center h-[70vh] bg-fixed bg-top bg-secondary sm:h-[100vh]">
        <section className='text-white font-semibold text-4xl sm:text-3xl'>
          Publications
        </section>
        <div className=" h-[40vh] w-full sm:flex sm:flex-col">
          <h2 className='items-center text-primary justify-center text-center p-10 text-2xl w-full sm:text-xl sm:p-2'>
            Follow Dr. Cho on :
          </h2>
          <div className="cards flex flex-wrap my-5 justify-evenly sm:flex-col sm:gap-y-5 sm:justify-center sm:items-center">
            <a target='_blank' rel="noreferrer" href="https://scholar.google.co.kr/citations?user=G6CX5wsAAAAJ&hl=en" className='className="google-scholar p-2 py-5 text-primary cursor-pointer rounded-[10px] border-primary border-[2.5px] flex w-[35%] sm:w-[70%] justify-center font-semibold  hover:bg-primary hover:text-secondary transition duration-500 sm:p-3  '>
              Google Scholar
            </a>
            <a target='_blank' rel="noreferrer" href="https://www.researchgate.net/profile/Eunsang-Cho" className='research-gate p-2 py-5 text-tertiary cursor-pointer rounded-[10px] border-tertiary border-[2.5px] flex w-[35%] sm:w-[70%] justify-center font-semibold hover:bg-tertiary hover:text-primary transition duration-500 sm:p-3  '>
              Research Gate
            </a>
          </div>
        </div>
      </div>
      <div className="publications-div bg-primary text-secondary p-7 sm:p-5">
        <h2 className='flex justify-center text-center p-7 text-secondary text-2xl sm:p-2'>
          <section className='inline border-b-[2px] font-semibold border-tertiary sm:text-xl sm:p-2 sm:font-semibold'>
            Eunsang Cho publications and links to papers
          </section>
        </h2>
        <div className="in-revision p-7 flex mx-7 justify-center items-start flex-col-2 gap-5 sm:flex-col sm:m-2 sm:p-2">
          <h2 className=' w-[15%] sm:w-[100%] text-2xl sm:text-xl'>
            In Review :
          </h2>
          <div className="w-[70%] publication-cards p-5 sm:p-1 sm:w-full">
            {Data && Data.publication && Data.publication.reverse().map((item) => {
              if (item.status === "Review") {
                return (
                  <PublicationCard 
                    key={item._id} 
                    sequence={item.publication_sequence}
                    title={item.title}
                    details={item.details}
                    link={item.link}
                    linkTag={item.linkTag}
                  />
                );
              }
            })}
          </div>
        </div>
        <div className='border-b-[2px] border-tertiary h-[5px]'> </div>
        <div className="published p-7 mx-7 flex justify-center items-start sm:flex-col sm:px-0 sm:m-1">
          <h2 className=' w-[15%] sm:w-[100%] text-2xl sm:text-xl'>
            Published :
          </h2>
          <div className="publication-cards w-[70%] sm:w-full p-5">
            {Data && Data.publication && Data.publication.reverse().map((item) => {
              if (item.status === "Published") {
                return (
                  <PublicationCard 
                    key={item._id} 
                    sequence={item.publication_sequence}
                    title={item.title}
                    details={item.details}
                    link={item.link}
                    linkTag={item.linkTag}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Publication;
