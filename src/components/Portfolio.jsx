import React, { useState, useEffect } from "react";
import { SiOpenmediavault } from "react-icons/si";
import { TbPhotoSearch } from "react-icons/tb";
import { MdDeveloperMode } from "react-icons/md";
import {useNavigate } from "react-router-dom";
import seo1 from "../assets/seo1.png";
import seo2 from "../assets/seo2.png";
import seo3 from "../assets/seo3.png";
import seo4 from "../assets/seo4.png";
import seo5 from "../assets/seo5.png";
import seo6 from "../assets/seo6.png";
import tangle from "../img/portfolio/tangle.png";
import mahme from "../img/portfolio/mahme.png";
import hotel from "../img/portfolio/hotel.png";
import ddmr from "../img/portfolio/ddmr.png";
import oliver from "../img/portfolio/oliver.png";
import ssin from "../img/portfolio/ssin.png";
import social1a from "../img/portfolio/social1a.jpg";
import social2 from "../img/portfolio/social2.jpg";
import social3 from "../img/portfolio/social3.jpg";
import social5 from "../img/portfolio/social5.jpg";
import social6 from "../img/portfolio/social6.jpg";
import social7 from "../img/portfolio/social7.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  const navigate = useNavigate(); 

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const [clickedCard, setClickedCard] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const imageData = [
    {
      title: "Search Engine Optimization Portfolio",
      images: [
        {
          src: seo1,
        },
        {
          src: seo2,
        },
        {
          src: seo3,
         
        },
        {
          src: seo4,
        },
        {
          src: seo5,
        },
        {
          src: seo6,
        },
      ],
    },
    {
      title: "Designing & Development Portfolio",
      images: [
        {
          src: ssin,
          link: "/portfolio/web1",
        },
        {
          src: oliver,
          link: "/portfolio/web2",
        },
        {
          src: ddmr,
          link: "/portfolio/web3",
        },
        {
          src: hotel,
          link: "/portfolio/web4",
        },
        {
          src: mahme,
          link: "/portfolio/web5",
        },
        {
          src: tangle,
          link: "/portfolio/web6",
        },
      ],
    },
    {
      title: "Social Media & Marketing Portfolio",
      images: [
        {
          src: social1a,
          link: "https://www.instagram.com/kaiane_designs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
          isExternal: true,
        },
        {
          src: social2,
          link: "https://www.instagram.com/pacificinnhotels?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
          isExternal: true,
        },
        {
          src: social3,
          link: "https://www.instagram.com/arqtrace?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
          isExternal: true,
        },
        {
          src: social5,
          link: "https://www.instagram.com/garhwalagencies?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
          isExternal: true,
        },
        {
          src: social6,
          link: "https://www.instagram.com/coffeebeanvilla?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
          isExternal: true,
        },
        {
          src: social7,
          link: "https://www.instagram.com/theuttrayan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
          isExternal: true,
        },

      ],
    },
  ];

  const handleCardClick = (index) => {
    if (clickedCard === index) {
      setClickedCard(null);
      clearInterval(intervalId);
    } else {
      setClickedCard(index);
    }
  };

  useEffect(() => {
    if (clickedCard !== null) {
      const id = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageData[clickedCard].images.length);
      }, 3000);

      setIntervalId(id);

      return () => clearInterval(id);
    }
  }, [clickedCard]);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  const showThreeImages = (index) => {
    const images = imageData[index].images;
    const displayedImages = [];
    for (let i = 0; i < 3; i++) {
      displayedImages.push(images[(currentImageIndex + i) % images.length]);
    }
    return displayedImages;
  };

  const handleImageClick = (link) => {
    navigate(link);  
  };

  return (
    <div className="text-[#7A6960]">
      <h1 className="text-3xl font-semibold text-center uppercase">Portfolio</h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-red-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        Explore our live projects and discover valuable RankMantra-related content to boost your business and career growth.
      </p>

      <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-0 p-4">
        {imageData.map((portfolio, index) => (
          <li className="nav-item" key={index}>
            <div
              onClick={() => handleCardClick(index)}
              className={`relative p-6 h-44 w-40 lg:w-5/6 lg:p-6 lg:left-8 rounded-lg shadow-md transition-all flex flex-col items-center justify-center cursor-pointer ${clickedCard === index ? "bg-blue-400" : "bg-red-600 hover:bg-gray-600 hover:shadow-xl"}`}
            >
              <div className="mb-4">
                {index === 0 ? (
                  <TbPhotoSearch className="text-5xl text-white" />
                ) : index === 1 ? (
                  <MdDeveloperMode className="text-5xl text-white" />
                ) : (
                  <SiOpenmediavault className="text-5xl text-white" />
                )}
              </div>
              <p className="text-white font-semibold text-center block">{portfolio.title}</p>
              {clickedCard === index && (
                <div className="absolute bottom-[-14px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[30px] border-r-[30px] border-t-[15px] border-transparent border-t-blue-400"></div>
              )}
            </div>
          </li>
        ))}
      </ul>

      {clickedCard !== null && (
        <div className="mt-10 sm:mt-4 flex justify-center relative">
          <div className="flex space-x-4">
          {showThreeImages(clickedCard).map((image, imgIndex) => (
  <div key={imgIndex} className="relative flex-grow-0 flex-shrink-0">
    <div className="relative w-[330px] h-[300px] p-6" onClick={scrollToTop}>
      {image.isExternal ? (
        <a href={image.link} target="_blank" rel="noopener noreferrer">
          <img
            src={image.src}
            alt={`portfolio-image-${imgIndex}`}
            className="w-full h-full object-cover transition-transform transform hover:scale-105 duration-300 ease-in-out"
          />
        </a>
      ) : (
        <div onClick={() => handleImageClick(image.link)} className="cursor-pointer">
          <img
            src={image.src}
            alt={`portfolio-image-${imgIndex}`}
            className="w-full h-full object-cover transition-transform transform hover:scale-105 duration-300 ease-in-out"
          />
        </div>
      )}
    </div>
  </div>
))}

          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {imageData[clickedCard].images.map((_, imgIndex) => (
              <div
                key={imgIndex}
                onClick={() => handleDotClick(imgIndex)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer ${currentImageIndex === imgIndex ? "bg-red-600" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
