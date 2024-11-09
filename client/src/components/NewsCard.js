import React from 'react';
import { useNavigate } from 'react-router-dom';

function NewsCard(props) {
  const {_id, heading, body, mainImage, date} = props.prop;
  const navigate = useNavigate();
  const handleReadMore =() =>{

    navigate(`/news/${_id}`);
    window.scrollTo({ top: 0 });
    
  }

  return (
    <>
      <div className="bg-primary  shadow-md shadow-gray-400 my-10 p-7 justify-center items-center rounded-[12px] sm:my-5 relative">
        {/* <div className="date bg-primary w-[35%] text-tertiary font-semibold text-center p-2 rounded-[5%] absolute top-7 right-7 border-[1px] border-primary shadow-md shadow-gray-500 sm:top-7 sm:right-3x sm:text-xs">{date}</div> */}
        <div
          style={{ backgroundImage: `url(${mainImage})` }}
          className="w-[100%] overflow-hidden bg-no-repeat bg-cover rounded-[12px] h-[300px]"
        ></div>
        <h3 className="p-5 text-2xl text-secondary font-semibold sm:text-xl sm:px-0">{heading}</h3>
        <p className='px-5 py-4 pt-2 text-gray-400 text-left'>Date: {date}</p>
        <p className="px-5 justify-center sm:px-0">
          {body[0].length > 150 ? body[0].substring(0, 150) + "..." : body[0]}
        </p>
        <button className="m-5 border-tertiary border-[2px] px-5 py-4 rounded-[10px] w-[70%] sm:w-[50%] sm:p-2 sm:my-5 flex items-center mx-auto justify-center text-center font-semibold bg-tertiary text-primary text-xl sm:text-sm border-b-[5px] hover:text-tertiary hover:bg-primary hover:border-b-[5px] transition duration-500"
        onClick={()=>handleReadMore()}  
        >
          Read More
        </button>
      </div>
    
    </>
  );
}

export default NewsCard;
