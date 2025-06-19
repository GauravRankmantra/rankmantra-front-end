import React, { useEffect } from "react";
import director from "../img/team/director.jpg";
import ceo from "../img/team/ceo.jpeg";
import founder from "../img/team/founder.jpeg";
import { FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="text-[#7A6960]">
      <h1 data-aos="fade-right" className="text-3xl font-semibold text-center uppercase">
        Team
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-red-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        Custom Web Development Services to Elevate Your Digital Presence with RankMantra
      </p>

      <div className="flex flex-wrap justify-center items-center gap-6 p-5 lg:p-0">
    
        <div className="relative w-full sm:w-[250px]">
          <img
            src={ceo}
            alt="Walter White"
            className="w-full h-[250px] sm:h-[250px] rounded-full object-cover"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <a
              href="https://www.linkedin.com/in/priyanka-anand-13a359b6/"
              className="text-blue-400 text-4xl mx-3 p-2 rounded-full hover:bg-blue-600 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold">Priyanka Anand</h3>
            <p className="text-sm">CEO</p>
          </div>
        </div>

        <div className="relative w-full sm:w-[250px]">
          <img
            src={founder}
            alt="Sarah Jhonson"
            className="w-full h-[250px] sm:h-[250px] rounded-full object-cover"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <a
              href="https://www.linkedin.com/in/abhishek-anand-47265815/"
              className="text-blue-400 text-4xl mx-3 p-2 rounded-full hover:bg-blue-600 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold">Abhishek Anand</h3>
            <p className="text-sm">Co-Founder</p>
          </div>
        </div>

        <div className="relative w-full sm:w-[250px]">
          <img
            src={director}
            alt="William Anderson"
            className="w-full h-[250px] sm:h-[250px] rounded-full object-cover"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <a
              href="https://www.linkedin.com/in/paras-arora-7289253b/"
              className="text-blue-400 text-4xl mx-3 p-2 rounded-full hover:bg-blue-600 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold">Paras Arora</h3>
            <p className="text-sm">Director</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
