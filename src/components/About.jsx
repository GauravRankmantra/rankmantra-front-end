import React, { useEffect, useState } from "react";
import CtaButton from "./CtaButton";
import about from "../assets/about.jpg";
import { BsPeople } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  });

  const [show, setShow] = useState(false);

  const videoStartHandler = () => {
    const video = document.querySelector("#video");
    video.currentTime = 0;
    video.load();
    setShow(true);
  };

  const clickHandler = () => {
    const video = document.querySelector("#video");
    video.pause();
    setShow(false);
  };

  return (
    <div className="relative lg:mx-30">
      <h1
        data-aos="fade-down"
        className="text-3xl font-semibold text-center text-[#7A6960]"
      >
        ABOUT US.
      </h1>
      <div className="flex justify-center items-center mt-2 mb-10">
        <div className="bg-red-600 h-1 w-16 rounded"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:gap-10 secondary-font">
        <div
          data-aos="fade-up"
          className="lg:w-1/2 w-full md:w-3/4 py-16 px-10 md:px-0"
        >
          <img className="w-full ml-2" src={about} alt="img" />
        </div>
        <div className="lg:w-1/2 w-full md:w-3/4 px-10 md:p-0">
          <div data-aos="fade-left">
           
            <p className="text-lg mt-5 text-gray-600 primary-font">
            RankMantra offers a range of services, including expert SEO, SMM, PPC, and web development. We help businesses enhance their online presence, drive traffic, and boost conversions through tailored strategies and cutting-edge technology, ensuring measurable growth and success.
            </p>
          </div>

          <div
            data-aos="zoom-in"
            className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5"
          >
            <div
              className="bg-red-600 w-fit p-2 md:p-5 rounded"
              style={{ color: "white" }}
            >
              <BsPeople size={"28px"} />
            </div>
            <div className="w-full">
              <h2 className="text-[#7A6960] text-xl font-medium">
              Expert Mentorship:
              </h2>
              <p className="text-base text-gray-600 primary-font lg:mt-1 mt-2">
              Personalized guidance from industry professionals to help you achieve your learning goals.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5"
          >
            <div
              className="bg-red-600 w-fit p-2 md:p-5 rounded"
              style={{ color: "white" }}
            >
              <BsPeople size={"28px"} />
            </div>
            <div className="w-full">
              <h2 className="text-[#7A6960] text-xl font-medium">
              Skill Development: 
              </h2>
              <p className="text-base text-gray-600 primary-font lg:mt-1 mt-2">
              Focus on real-world skills that enhance your career prospects.
              </p>
            </div>
          </div>

          <p
            data-aos="zoom-in"
            className="text-lg mt-5 text-gray-600 primary-font"
          >
           Our tailored strategies have consistently driven increased online visibility, enhanced brand engagement, and significant growth in traffic and conversions, delivering measurable success for our clients.
          </p>
          <div className="flex flex-col justify-center sm:flex-row items-center mb-12 lg:mb-0 lg:flex-row gap-10 mt-10">
            <div>
              <a href="/Rankmantra/#contact" className="">
                <CtaButton name={"Get Started"} />
              </a>
            </div>
         
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
