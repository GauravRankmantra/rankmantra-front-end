import React from "react";

const Card = ({ title, desc, img }) => {
  return (
    <div className="relative bg-white lg:min-w-3/12 lg:min-h-[280px] h-fit p-10 shadow-md rounded mx-5 lg:m-0 group cursor-pointer transition-all duration-300">
      <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-80 transition-all duration-300 z-10 rounded-lg"></div>

      <div className="relative z-20">
        <div className="text-4xl">{img}</div>
        <h1 className="lg:text-2xl text-lg font-semibold mt-3 mb-5">{title}</h1>
        <p className="lg:text-base text-sm text-zinc-700">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
