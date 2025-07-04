import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Button } from 'antd';

function MemberCard(props) {
  const { name, img, position, email, linkedin, desc, setIsModalOpen } = props;
  return (
    <>
      <div className="bg-[#005B96] mt-10 py-5 flex flex-col  justify-center items-center border-[3px] border-gray-500 border-opacity-10 sm:border-gray-250 sm:border-[1px] sm:text-left min-h-[600px] shadow-md shadow-gray-200 sm:my-5 md:my-5 ">
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="w-[200px] rounded-[50%] overflow-hidden bg-no-repeat bg-cover  h-[200px] border-black border-[1px]"
        ></div>
        <div className="div py-5 sm:p-1 sm:w-full text-center align-middle ">

          <h3 className="p-5 text-xl text-tertiary text-center font-semibold sm:text-2xl sm:px-1 sm:text-center sm:justify-center ">{name}</h3>
          <h2 className='text-primary text-base px-5 font-semibold sm:font-thin sm:text-[1rem] sm:px-1 sm:text-left sm:justify-left'>{position}</h2>
          <p className="p-2 px-5 text-sm justify-center text-primary sm:px-1 sm:text-sm sm:text-left sm:justify-left text-wrap  break-words ">
            {desc}
          </p>
          <div className="flex justify-around text-4xl sm:my-5 lg:px-[3rem]">

            {email ?
              <p className='p-5 text-primary sm:p-0 sm:text-left sm:justify-left'>
                <Link to={`mailto:${email}`}>
                  <section className="font-bold   sm:p-1">
                    <IoMail />
                  </section>
                </Link>
              </p>
              : ""}

            {linkedin ?
              <p className='p-5 text-primary sm:px-0 sm:text-left sm:justify-left font-bold   sm:p-1 break-keep'>
                <Link target='_blank' to={`${linkedin}`}>
                  <FaLinkedin />
                </Link>
              </p>
              : ""}


          </div>
          {/* View Details Button */}
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-200 font-medium px-6 py-2 h-auto rounded-lg"
            size="middle"
          >
            View Details
          </Button>

        </div>
      </div>
    </>
  );
}

export default MemberCard;
