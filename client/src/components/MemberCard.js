import React from 'react';

function MemberCard(props) {
  const {name, img, position, email, linkedin, desc}= props;
  return (
    <>
      <div className="bg-[#005B96] my-10 p-7 flex flex-col justify-center items-center border-[3px] border-gray-500 sm:border-gray-250 sm:border-[1px] sm:text-left  shadow-md shadow-gray-200  rounded-[12px]">
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="w-[300px] rounded-[50%] overflow-hidden bg-no-repeat bg-cover  h-[300px] border-black border-[1px]"
        ></div>
        <div className="div p-5 sm:p-1 sm:w-full">

        <h3 className="p-5 text-3xl text-primary font-semibold sm:text-2xl sm:px-1 sm:text-left sm:justify-left">{name}</h3>
        <h2 className='text-primary text-xl px-5 font-semibold sm:font-thin sm:text-[1rem] sm:px-1 sm:text-left sm:justify-left'>{position}</h2>
        <p className="p-5 justify-center text-primary sm:px-1 sm:text-sm sm:text-left sm:justify-left">
          {desc}
        </p>
        <p className='p-5 text-primary sm:p-0 sm:text-left sm:justify-left'>
            <section className="font-bold text-xl sm:text-sm sm:p-1">
            Email : {email}
            </section>
        </p>
        <p className='p-5 text-primary sm:px-0 sm:text-left sm:justify-left'>
            <section className="font-bold text-xl sm:text-sm sm:p-1" >
            Linkedin : {linkedin}
            </section>
        </p>
        </div>
      </div>
    </>
  );
}

export default MemberCard;
