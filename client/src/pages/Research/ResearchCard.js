import React from 'react';
import { useNavigate } from 'react-router-dom';

function ResearchCard(research) {
  const navigate = useNavigate()
  // console.log(research.research._id)
  const handleReadMore = (_id) => {
    navigate(`/ourResearch/${_id}`);
    window.scrollTo({ top: 0 });

  }

  return (
    <>

      <div className="body p-4 m-7">
        <div className="relative">
          <img
            className="float-right w-[35%] mt-10 ml-4 my-5 sm:hidden"
            src={research.research.mainImage}
            alt="Research"
          />

          <div className="">
            <h2 className='text-2xl py-5   sm:text-xl '>{research.research.title}</h2>
            <img
              className={`hidden w-[100%]  my-5 sm:inline`}
              src={research.research.mainImage}
              alt="Research"
            />

            <h2 className={`text-md leading-8 sm:leading-normal sm:text-lg sm:hidden`}>
              {research.research.body[0]}
            </h2>
            <h2 className={`text-md leading-8 sm:leading-normal sm:text-lg hidden sm:inline`}>
              {/* {research.research.body[0].slice(0,500)}... */}
              {(() => {
                const text = research.research.body[0];
                const words = text.split(" "); // Split the text into words
                return words.length > 50
                  ? words.slice(0, 50).join(" ") + "..." // Show first 50 words with ellipsis
                  : text; // Show full text if 50 words or less
              })()}
            </h2>
          </div>
        </div>
      </div>
      <button className=" border-tertiary border-[2px] px-5 my-5 py-4 rounded-[10px] w-[70%] sm:w-[50%] sm:p-2 sm:my-5 flex items-center mx-auto justify-center text-center font-semibold bg-tertiary text-primary text-xl sm:text-sm border-b-[5px] hover:text-tertiary hover:bg-primary hover:border-b-[5px] transition duration-500"
        onClick={() => handleReadMore(research.research._id)}
      >
        Read More
      </button>

      <div className="h-[3px] my-10 bg-tertiary"></div>


    </>
  );
}

export default ResearchCard;
