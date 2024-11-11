import React from 'react';

function PublicationCard(props) {
  const {title, details, link, imgUrl} = props;
  
  return (
    <div className="cursor-pointer p-6 sm:p-3 mb-5 border-[1px] border-gray-200 bg-gradient-to-r from-secondary-50 to-secondary-100 rounded-lg shadow-lg transition-transform transform hover:translate-y-[-5px] duration-300 flex">
      <div className="w-[30%]">
        <img src={imgUrl} alt="" />
      </div>
      <div className="flex items-start">
        {/* <section className="text-2xl font-semibold text-gray-900">{sequence}.</section> */}
        <div className="flex-1 ml-4">
          <p className="text-gray-900 font-semibold  mb-2">
            {title}
          </p>
          <p className="text-gray-700 font-normal mb-2">
            {details} |
          </p>
          <a href={link} target='_blank' rel="noreferrer" className="inline-block text-blue-500 font-semibold hover:underline">
            {link}
          </a>
        </div>
      </div>
    </div>
  );
}

export default PublicationCard;
