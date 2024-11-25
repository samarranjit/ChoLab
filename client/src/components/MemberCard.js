import React from 'react';
import { Link } from 'react-router-dom';

function MemberCard(props) {
  const {name, img, position, email, linkedin, desc}= props;
  return (
    <>
      <div className="bg-[#005B96] my-10 p-5 flex flex-col  justify-center items-center border-[3px] border-gray-500 sm:border-gray-250 sm:border-[1px] sm:text-left  shadow-md shadow-gray-200  ">
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="w-[200px] rounded-[50%] overflow-hidden bg-no-repeat bg-cover  h-[200px] border-black border-[1px]"
        ></div>
        <div className="div p-5 sm:p-1 sm:w-full">

        <h3 className="p-5 text-xl text-primary font-semibold sm:text-base sm:px-1 sm:text-left sm:justify-left">{name}</h3>
        <h2 className='text-primary text-base px-5 font-semibold sm:font-thin sm:text-[1rem] sm:px-1 sm:text-left sm:justify-left'>{position}</h2>
        <p className="p-2 px-5 text-sm justify-center text-primary sm:px-1 sm:text-sm sm:text-left sm:justify-left">
          {desc}
        </p>
        <p className='p-5 text-primary sm:p-0 sm:text-left sm:justify-left'>
          <Link to={`mailto:${email}`}>
            <section className="font-bold  sm:text-sm sm:p-1">
            Email : {email}
            </section>
          </Link>
        </p>

        <p className='p-5 text-primary sm:px-0 sm:text-left sm:justify-left font-bold  sm:text-sm sm:p-1'>
          <Link target='_blank' to={`${linkedin}`}>

            Linkedin : {linkedin}
          </Link>
        </p>
        </div>
      </div>
    </>
  );
}

export default MemberCard;
