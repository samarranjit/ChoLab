import React from 'react';
import { useNavigate } from 'react-router-dom';

function ResearchCard(research) {
  const navigate = useNavigate()
  console.log(research)
  const handleReadMore = (_id) => {
    navigate(`/ourResearch/${_id}`);
    window.scrollTo({ top: 0 });

  }

  return (
    <div className='bg-primary my-5  shadow-tertiary drop-shadow-lg shadow-sm'>

      <div className="body p-2 m-0 ">
        <div style={{ backgroundImage: `url(${research.research.mainImage})` }} className="mx-auto w-[90%] min-h-[full] h-[18rem] ml-4 my-5  bg-contain bg-no-repeat bg-center md:my-2"></div>
        {/* <img
            className="w-[90%] min-h-[full] max-h-[25rem] mt-8 ml-4 my-5 sm:hidden"
            src={research.research.mainImage}
            alt="Research"
          /> */}
        <div className="px-3 flex mx-auto">

          <div className="flex flex-col items-center justify-center">
            <h2 className='text-md pt-5 leading-normal font-semibold  sm:text-xl min-h-[5rem] md:pt-0 md:min-h-[3rem] '>{
              (() => {
                const text = research.research.title; // Get the first paragraph
                const words = text.split(" "); // Split into words
                if (words.length > 17) {
                  return words.slice(0, 17).join(" ") + "..." // Show only the first 10 words with ellipsis

                } else {
                  return text; // If there are 10 or fewer words, show the full text

                }
              })()
            }</h2>
            <div className="text-xs w-[100%] text-opacity-2  grid grid-cols-5 md:grid-cols-1 sm:grid-cols-5 gap-x-2 items-stretch justify-center align-center text-left">
              {
                research && (research.research.period !== "") &&
              <div className="period my-2 flex flex-col col-span-2 break-all flex-wrap ">
                <p className='font-semibold mr-2 mb-2 text-left'>

                  Period:
                </p>
                <span> {` ${research.research.period}`} </span>
              </div>
              }
            

              {
                research && (research.research.sponsors !== "") &&
                <div className="sponsor my-2 flex flex-col col-span-3 break-all flex-wrap ">
                  <p className='font-semibold mr-2  mb-2 text-left'>

                  Sponsors:
                  </p>
                  <span> {` ${research.research.sponsors}`} </span>
                </div>

              }

              {
                research && (research.research.collaborators !== "") &&

                <div className="collaborators my-2 text-left flex flex-col col-span-5 break-all flex-wrap ">
                  <p className='font-semibold mr-2  mb-2 text-left'>

                  Collaborators:
                  </p>
                  <span> {` ${research.research.collaborators}`} </span>
                </div>
              }
            </div>


            {/* <h2 className={`text-md leading-8 sm:leading-normal sm:text-lg sm:hidden`}>
              {research.research.body[0]}
            </h2> */}
            <h2 className={`text-sm leading-normal sm:leading-normal sm:text-lg my-5 `}>
              {(() => {
                const text = research.research.body[0]; // Get the first paragraph
                const words = text.split(" "); // Split into words
                if (words.length > 50) {
                  return words.slice(0, 50).join(" ") + "..." // Show only the first 10 words with ellipsis

                } else {
                  return text; // If there are 10 or fewer words, show the full text

                }
              })()}
            </h2>
          </div>
        </div>
      </div>
      <div className="">

        <button className=" border-tertiary border-[2px]  mx-auto mb-9 py-2 rounded-[10px] w-[70%]  sm:w-[50%] sm:p-2 sm:my-5 flex items-center  justify-center text-center font-semibold bg-tertiary text-primary text-xl sm:text-sm border-b-[5px] hover:text-tertiary hover:bg-primary hover:border-b-[5px] transition duration-500"
          onClick={() => handleReadMore(research.research._id)}
        >
          Read More
        </button>
      </div>

      {/* <div className="h-[3px] mt-10 bg-tertiary bg-opacity-15  "></div> */}


    </div>
  );
}

export default ResearchCard;


