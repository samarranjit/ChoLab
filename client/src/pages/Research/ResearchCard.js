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

      <div className="body p-2 m-0">
        <div className="relative">
          <img
            className="float-right w-[35%] mt-8 ml-4 my-5 sm:hidden"
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

            {/* <h2 className={`text-md leading-8 sm:leading-normal sm:text-lg sm:hidden`}>
              {research.research.body[0]}
            </h2> */}
            <h2 className={`text-md leading-8 sm:leading-normal sm:text-lg  `}>
              {(() => {
                const text = research.research.body[0]; // Get the first paragraph
                const words = text.split(" "); // Split into words
                if (words.length > 120){
                  return words.slice(0, 120).join(" ") + "..." // Show only the first 10 words with ellipsis

                }else{
                  return text; // If there are 10 or fewer words, show the full text

                }
              })()}
            </h2>
          </div>
        </div>
      </div>
      <div className="">

      <button className=" border-tertiary border-[2px]  mx-auto my-9 py-2 rounded-[10px] w-[70%]  sm:w-[50%] sm:p-2 sm:my-5 flex items-center  justify-center text-center font-semibold bg-tertiary text-primary text-xl sm:text-sm border-b-[5px] hover:text-tertiary hover:bg-primary hover:border-b-[5px] transition duration-500"
        onClick={() => handleReadMore(research.research._id)}
      >
        Read More
      </button>
      </div>

      <div className="h-[3px] mt-10 bg-tertiary"></div>


    </>
  );
}

export default ResearchCard;
