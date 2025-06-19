import React from "react";

const Card = ({ title, price, headings }) => {
  const videoStartHandler = () => {
    const video = document.querySelector("#video");
    video.currentTime = 0;
    video.load();
    setShow(true);
  };

  return (
    <div className="relative bg-white lg:min-w-3/12 lg:min-h-[380px] h-fit p-10 shadow-md rounded mx-5 lg:m-0 group cursor-pointer transition-all duration-300">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-all duration-300 z-10 rounded-lg"></div>

      <div className="relative z-20">
        <h1 className="lg:text-2xl text-2xl font-semibold mt-3 mb-5">{title}</h1>
        
        <div className="lg:text-3xl text-2xl font-semibold mt-5 text-green-600">{price}</div>
        
        <ul className="mt-5 list-disc pl-5 space-y-2">
          {headings && headings.map((heading, index) => (
            <li key={index} className="text-md text-gray-600">{heading}</li>
          ))}
        </ul>
        
        <div className="mt-5">
          <button
            className="bg-red-600 text-white py-2 px-5 rounded-xl lg:text-lg text-md transition-all duration-300 transform hover:bg-red-800 hover:scale-110 hover:shadow-lg"
            onClick={videoStartHandler} 
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
