import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";
import CtaButton from "./CtaButton";
import emailjs from "emailjs-com";
import {Link} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast'; 

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const contentData = [
    {
      title: "DIGITAL PERFECTION",
      description: "Build your digital footprint with us",
    },
    {
      title: "REMARKABLE SOLUTIONS",
      description: "Elevate your brand's digital presence",
    },
    {
      title: "WEB DEVELOPMENT SERVICE",
      description: "Learn about more web development service",
    },
  ];

  useEffect(() => {
    AOS.init();
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % contentData.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".arrow-button",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    gsap.to(".popup", {
      opacity: 0,
      duration: 0.3,
      onComplete: () => setShowPopup(false),
    });
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, message } = formData;
    
    if (!fullName || !email || !message) {
      toast.error("All fields are required!");
      return;
    }

    const templateParams = {
      fullName,
      email,
      message,
    };

    emailjs
      .send("service_ljo66f9", "template_j4ir9hp", templateParams, "uHsVm0ME3aGvogZom")
      .then(
        (result) => {
          toast.success("Your message has been sent successfully!");
          setFormData({
            fullName: "",
            email: "",
            message: "",
          }); 
        },
        (error) => {
          toast.error("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="relative w-full h-screen flex flex-col-reverse lg:flex-row items-center lg:gap-10 secondary-font overflow-hidden">
      <div className="absolute w-full h-full">
        <video
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source
            src="https://videos.pexels.com/video-files/7989443/7989443-sd_640_360_25fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white z-20">
        <div className="text-center z-30 mt-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            {contentData[bgIndex].title}
          </h2>
          <p className="mt-3 text-md sm:text-xl lg:text-xl">
            {contentData[bgIndex].description}
          </p>
         <Link to="/about-us">
          <p className="mt-8">
            <CtaButton name={"Read More"} />
          </p>
          </Link>
        </div>
      </div>

      {showPopup && (
        <div
          className="popup fixed inset-0 lg:top-22 top-24 lg:bottom-0 bottom-4 left-0 right-4 flex justify-center items-center z-50 w-full lg:px-0 px-4"
          style={{
            transition: "opacity 0.3s ease",
          }}
        >
          <div
            className="max-w-3xl w-full lg:px-8 lg:py-8 px-10 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg relative sm:w-11/12 md:w-10/12 lg:w-7/12 xl:w-6/12"
          >
            <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-8">
              <div className="w-full lg:w-1/2">
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-left">
                  Let’s Build Something Great! 🚀
                </h2>
                <div className="text-gray-700 mt-8 text-left">
                  Get a Website or Boost Your <span className="underline">Business Online</span> Contact Us Today!
                </div>
                <div className="flex justify-between lg:pr-5 lg:mt-5 pr-6 mt-0">
                  <div className="border border-zinc-400 p-2 rounded-full hover:border-red-600 hover:text-red-600">
                    <a
                      href="https://www.facebook.com/rankmantra/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoFacebook size={"26px"} />
                    </a>
                  </div>

                  <div className="border border-zinc-400 p-2 rounded-full hover:border-red-600 hover:text-red-600">
                    <a
                      href="https://www.instagram.com/rank_mantra/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoInstagram size={"26px"} />
                    </a>
                  </div>

                  <div className="border border-zinc-400 p-2 rounded-full hover:border-red-600 hover:text-red-600">
                    <a
                      href="https://www.linkedin.com/company/rankmantra/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoLinkedin size={"26px"} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <form onSubmit={handleSubmit}>
                  <div>
                    <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                    <input
                      className="w-full bg-gray-300 text-gray-900 lg:mt-2 lg:p-3 p-1 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="lg:mt-8 mt-0">
                    <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                    <input
                      className="w-full bg-gray-300 text-gray-900 lg:mt-2 lg:p-3 p-1 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="lg:mt-8 mt-0">
                    <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
                    <textarea
                      className="w-full h-32 bg-gray-300 text-gray-900 lg:mt-2  lg:p-2 rounded-lg focus:outline-none focus:shadow-outline"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <div className="lg:mt-8 mt-0">
                    <button
                      type="submit"
                      className="uppercase text-sm font-bold tracking-wide bg-red-600 text-gray-100 lg:p-3 p-2 mb-2 rounded-lg w-full focus:outline-none focus:shadow-outline"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <button
              onClick={closePopup}
              className="absolute top-2 right-4 text-white text-3xl font-bold w-8 h-8 bg-red-600 rounded-full flex items-center justify-center"
              style={{ transformOrigin: "center" }}
              ref={(el) => {
                if (el) {
                  gsap.fromTo(
                    el,
                    {
                      scale: 0,
                      opacity: 0,
                    },
                    {
                      scale: 1,
                      opacity: 1,
                      duration: 0.5,
                      ease: "back.out(1.7)",
                    }
                  );
                }
              }}
            >
              <i className="fas fa-times">x</i>
            </button>
          </div>
        </div>
      )}
      <Toaster /> 
    </div>
  );
};

export default Hero;
