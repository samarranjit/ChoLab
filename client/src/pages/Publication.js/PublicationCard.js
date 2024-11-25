import React from 'react';

function PublicationCard(props) {
  const { title, details, link, imgUrl } = props;

  return (
    <div className="cursor-pointer p-6 sm:p-2 mb-5 border-[1px] border-gray-200 bg-gradient-to-r from-secondary-50 to-secondary-100 rounded-lg shadow-lg transition-transform transform hover:translate-y-[-5px] duration-300 flex sm:flex-col sm:w-full gap-8">
      {/* Image container */}
      <div className="w-[20%] sm:w-full sm:mb-4">
        <img
          src={imgUrl}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      
      {/* Content container */}
      <div className="flex-1 flex flex-col sm:items-center sm:text-center sm:px-3">
        <p className="text-gray-900 font-semibold mb-2 text-lg sm:text-xl sm:text-justify">
          {title}
        </p>
        <p className="text-gray-700 font-normal mb-2 text-sm sm:text-lg">
          {details} |
        </p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-block text-blue-500 font-semibold hover:underline text-sm sm:text-lg"
        >
          Link
        </a>
      </div>
    </div>
  );
}

export default PublicationCard;
