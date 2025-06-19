import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Faquestions from "./Faquestions";

const FreqAskedQues = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div data-aos="fade-up" className="text-[#7A6960]">
      <h1 className="text-3xl font-semibold text-center">
        Frequently Asked Questions
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-red-600 h-1 w-16 rounded"></div>
      </div>
    

      <div data-aos="fade-right">
        <Faquestions />
      </div>
    </div>
  );
};

export default FreqAskedQues;
