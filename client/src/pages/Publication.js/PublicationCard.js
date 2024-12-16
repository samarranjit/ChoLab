import React from 'react';
import { Link } from 'react-router-dom';

function PublicationCard(props) {
  const { title, details, link, imgUrl } = props;
  console.log(link)

  const renderFormattedText = (text) => {
    const parts = text.split(/(\*.*?\*)/); // Split text into segments with and without *
    return parts.map((part, index) => {
      if (part.startsWith("*") && part.endsWith("*")) {
        // Remove * and wrap in <strong> for bold text
        return (
          <strong key={index}>
            {part.slice(1, -1)} {/* Slice to remove the asterisks */}
          </strong>
        );
      }
      return part; // Return normal text
    });
  };

  return (
    <Link
    to={link}
    target="_blank"
    rel="noreferrer"
    className=" font-semibold hover:underline text-sm sm:text-sm p-2 rounded-sm text-primary"
  >
    <div className="cursor-pointer p-6 sm:p-2 md:p-3 mb-5 border-[1px] border-gray-200 bg-gradient-to-r from-secondary-50 to-secondary-100 rounded-lg shadow-lg transition-transform transform hover:translate-y-[-5px] duration-300 flex sm:flex-col md:w-[100%] gap-8">
      {/* Image container */}
      <div className="w-[10%] sm:w-full sm:my-2 sm:px-9 md:w-[20%]">
        <img
          src={imgUrl}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      
      {/* Content container */}
      <div className="flex-1 flex flex-col sm:items-center sm:text-center sm:px-3">
        <p className="text-gray-900 font-semibold mb-2 text-lg sm:text-md sm:text-justify text-left">
          {title}
        </p>
        <p className="text-gray-700 font-normal mb-2 text-sm sm:text-sm text-justify">
          {/* {details} | */}
          {renderFormattedText(details)}
        </p>
        <div className="p-2 flex justify-left sm:mb-5 ">

        <Link
          to={link}
          target="_blank"
          rel="noreferrer"
          className=" font-semibold hover:underline text-sm sm:text-sm bg-tertiary p-2 rounded-sm text-primary"
        >
          Link to Paper
        </Link>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default PublicationCard;
