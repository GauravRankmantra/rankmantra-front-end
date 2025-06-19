import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
// import ScrollAnimation from 'react-animate-on-scroll';
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import call from "../assets/call.jpg";
import plan from "../assets/plan.jpg";
import win from "../assets/win.jpg";
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const WebDevelop = () => {
  const { register, handleSubmit } = useForm();
  
    const googleFormUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf3_4nAOlIG-4K60p8Mo6sBV5AK2S-uXRJh22cw0fMFZS7X2w/formResponse";
  
    const onSubmit = async (data, e) => {
      const formData = new FormData();
      formData.append("entry.2074220001", data.name);
      formData.append("entry.171639726", data.email);
      formData.append("entry.1770208340", data.subject);
      formData.append("entry.26073056", data.message); 
    
      try {
     
        await fetch(googleFormUrl, {
          method: "POST",
          body: formData,
          mode:"no-cors"
        });
    
       
        toast.success("Message sent successfully!");
        e.target.reset();
      } catch (error) {
      
        toast.error("An error occurred. Please try again.");
      }
    };
    
    
  
    useEffect(() => {
      AOS.init({
        duration: 1200,
      });
    }, []);
  
  const testimonials = [
     {
       name: "Tim Delija",
       image: "https://randomuser.me/api/portraits/women/65.jpg",
       text: "Hi i am Tim from Australia i have hired Rankmantra company to make my website ,they made my website very attractive. PARAS and his team always available to help us whenever we needed they sort out issues less than 24 hours ,i am pleased to take their services .thanks Rankmantra",
     },
     {
       name: "Pooja Parkash",
       image: "https://randomuser.me/api/portraits/women/44.jpg",
       text: "Rankmantra stands above the rest in the category of IT companies in Dehradun.The team of professionals they have is par-excellence, ensuring top-notch service each and every time. Highly recommend for all your tech needs!",
     },
     {
       name: "Alisha Bisht",
       image: "https://randomuser.me/api/portraits/men/75.jpg",
       text: "If you are searching a website development company in Dehradun then I suggest rankmantra. It is the best web development and IT services provider company in Dehradun. Apart from this, the cost is so affordable and reasonable.",
     },
     {
       name: "charmwood International",
       image: "https://randomuser.me/api/portraits/women/72.jpg",
       text: "We appreciate the work done by Web Designing&SEO Company.They have done a remarkable job.They have designed a good website for us.",
     },
     {
       name: "Chloe Cornel",
       image: "https://randomuser.me/api/portraits/men/34.jpg",
       text: "I’ve had them bills several websites and have been extremely happy with the results. They work fast and efficiently. ai highly recommend them.",
     },
   ];
    const [currentIndex, setCurrentIndex] = useState(1);
  
    const prev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    };
  
    const next = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const getDisplayItems = () => {
      const left = (currentIndex - 1 + testimonials.length) % testimonials.length;
      const right = (currentIndex + 1) % testimonials.length;
      return [testimonials[left], testimonials[currentIndex], testimonials[right]];
    };
  
    const displayItems = getDisplayItems();
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
    <>
      <NavBar transparent />

      <section className="w-full max-h-fit py-10 lg:px-30 overflow-hidden border-b border-orange-100 relative ">
      <div className="relative w-full h-96 lg:h-screen">
  <video
    id="video"
    className="absolute inset-0 w-full lg:h-[100%] h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="https://videos.pexels.com/video-files/2278095/2278095-sd_640_360_30fps.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  
  <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

  <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
    <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
    Web<span className="text-red-600"> Development</span>
    </h1>
    <p className="text-md lg:p-0 p-2 md:text-lg mb-6 text-center max-w-lg">
    Rank mantra is one of the leading digital agency and you can hire us for create website design, digital marketing and website application development.
    </p>
   <Link to="/contact-us">
       <button
         className="bg-red-600 text-white py-3 px-5 rounded-xl lg:text-lg text-md transition-all duration-300 transform hover:bg-red-800 hover:scale-105 hover:shadow-lg"
         onClick={videoStartHandler} 
       >
         SCHEDULE A CALL
       </button>
       </Link>
  </div>
</div>


<div className="w-full h-[80%] bg-[#ffffff] overflow-hidden mt-10">
  <div className="flex flex-col items-center justify-center h-full px-10 secondary-font">
    {/* <div data-aos="fade-left">
      <h1
        className="lg:text-4xl text-2xl text-black primary-font font-semibold"
        style={{ color: "#7a6960" }}
      >
       Social Media Made Easy
       <span className="block mt-2 mx-auto w-20 border-b-4 border-red-600"></span>
      </h1>
    </div> */}

    <div
      data-aos="zoom-in"
      className="flex flex-col justify-center items-center gap-5 mt-5"
    >
      <div className="w-full">
        <p className="text-md lg:text-lg text-gray-600 primary-font lg:mt-1 mt-2">
        RankMantra specializes in crafting custom web applications that help businesses unlock their full potential. Our expert team focuses on creating scalable, secure, and high-performance applications tailored to your business’s specific needs.
        </p>
      </div>
    </div>

    <div
      data-aos="zoom-in"
      className="flex flex-col justify-center items-center gap-5 mt-5"
    >
      <div className="w-full">
        <p className="text-md lg:text-lg text-gray-600 primary-font lg:mt-1 mt-2">
        By designing solutions that streamline operations and enhance user experience, we help you stay ahead in a competitive market. Whether you're aiming to boost efficiency, improve workflows, or offer unique features, 
        </p>
      </div>
    </div>

    <p
      data-aos="zoom-in"
      className="text-md lg:text-lg mt-5 text-gray-600 primary-font"
    >
  RankMantra delivers web applications that support your goals and drive success. Trust us to deliver innovative, reliable, and user-friendly solutions that make a real impact on your business.
    </p>
  </div>
</div>


      </section>
      <div className="w-full lg:px-4 overflow-hidden bg-[#ffffff] border-b border-orange-100">
       

        <div className="flex flex-col lg:flex-row items-center lg:gap-10 secondary-font">
          <div
            data-aos="fade-up"
            className="lg:w-1/2 w-full md:w-3/4 py-16 px-10 md:px-0"
          >
            <img className="w-full ml-2 border-4 border-red-600" src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg" alt="img" />
          </div>
          <div className="lg:w-1/2 w-full md:w-3/4 px-10 md:p-0">
            <div data-aos="fade-left">
            <h1 className="lg:text-4xl text-2xl text-black primary-font font-semibold"
            style={{color:"#7a6960"}}
            >
         How Our Web Application Services Transform Your Business
         <span className="block mt-2 w-4/12 border-b-4 border-red-600"></span>
          </h1>

            </div>

            <div
              data-aos="zoom-in"
              className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5"
            >
              
              <div className="w-full">
                
                <p className="text-md lg:text-lg text-gray-600 primary-font lg:mt-1 mt-2">
                You can create your website From the beginning and fit your brand correctly.
                </p>
              </div>
            </div>

            <div
              data-aos="zoom-in"
              className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5"
            >
              
              <div className="w-full">
                
                <p className="text-md lg:text-lg text-gray-600 primary-font lg:mt-1 mt-2">
                We take care of web design and development work from start to finish and built through creative a SEO friendly website.
                </p>
              </div>
            </div>

            <p
              data-aos="zoom-in"
              className="text-md lg:text-lg mt-5 text-gray-600 primary-font"
            >
             Without a strong foundation, your building is limited and so we’ll help you get the ground work in place. Through SEO campaigns we entail to use different tools and improve your website visibility.

            </p>
            <div className="flex flex-col justify-center sm:flex-row items-center mb-12 lg:mb-0 lg:flex-row gap-10 mt-10">
            <button
              className="bg-red-600 text-white py-3 px-5 rounded-xl text-md transition-all duration-300 transform hover:bg-red-800 hover:scale-105 hover:shadow-lg"
              onClick={videoStartHandler} 
            >
              CONTACT US
            </button>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full lg:px-4 overflow-hidden bg-[#ffffff] border-b border-orange-100">
  <div className="flex flex-col lg:flex-row-reverse items-center lg:gap-10 secondary-font">
    <div
      data-aos="fade-up"
      className="lg:w-1/2 w-full md:w-3/4 py-16 px-10 md:px-4"
    >
      <img className="w-full border-4 border-red-600" src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg" alt="img" />
    </div>
    <div className="lg:w-1/2 w-full md:w-3/4 px-10 md:p-0">
      <div data-aos="fade-left">
        <h1 className="lg:text-4xl text-2xl text-black primary-font font-semibold"
        style={{color:"#7a6960"}}
        >
        Responsive Web Design
          <span className="block mt-2 w-1/2 border-b-4 border-red-600"></span>
        </h1>
      </div>

      <div
        data-aos="zoom-in"
        className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5"
      >
        <div className="w-full">
          <p className="text-md lg:text-lg text-gray-600 primary-font lg:mt-1 mt-2">
          Responsive website design is an approach that makes web pages render well on different devices and window or screen sizes.
          </p>
        </div>
      </div>

      <div
        data-aos="zoom-in"
        className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5"
      >
        <div className="w-full">
          <p className="text-md lg:text-lg text-gray-600 primary-font lg:mt-1 mt-2">
          Responsive websites are the future and they allow your website adapt to different screen sizes which mean that whatever device your web visitor are using.
          </p>
        </div>
      </div>

      <p
        data-aos="zoom-in"
        className="text-md lg:text-lg mt-5 text-gray-600 primary-font"
      >
      We create this through free tools and you can check if your website fits and adapts to desktop, tablets, or mobile screen sizes.

      </p>
      <div className="flex flex-col justify-center sm:flex-row items-center mb-12 lg:mb-0 lg:flex-row gap-10 mt-10">
      <button
              className="bg-red-600 text-white py-3 px-5 rounded-xl text-md transition-all duration-300 transform hover:bg-red-800 hover:scale-105 hover:shadow-lg"
              onClick={videoStartHandler} 
            >
              CONTACT US
            </button>
      </div>
    </div>
  </div>
</div>


   {/* third section */}

   <div className="w-full lg:px-4 overflow-hidden bg-[#ffffff] border-b border-orange-100">
       

       <div className="flex flex-col lg:flex-row items-center lg:gap-10 secondary-font">
         <div
           data-aos="fade-up"
           className="lg:w-1/2 w-full md:w-3/4 py-16 px-10 md:px-0"
         >
           <img className="w-full ml-2 border-4 border-red-600" src="https://images.pexels.com/photos/6625655/pexels-photo-6625655.png" alt="img" />
         </div>
         <div className="lg:w-1/2 w-full md:w-3/4 px-10 md:p-0">
           <div data-aos="fade-left">
           <h1 className="lg:text-4xl text-2xl text-black primary-font font-semibold"
           style={{color:"#7a6960"}}
           >
         Drag, Drop, and Go Are SEO Friendly
        <span className="block mt-2 w-4/12 border-b-4 border-red-600"></span>
         </h1>

           </div>

           <div
             data-aos="zoom-in"
             className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5"
           >
             
             <div className="w-full">
               
               <p className="text-md lg:text-lg text-gray-600 primary-font lg:mt-1 mt-2">
               Website builder drag drop tool with most powerful features like readymade to read your website and go through you work.
               </p>
             </div>
           </div>

           <div
             data-aos="zoom-in"
             className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5"
           >
             
             <div className="w-full">
               
               <p className="text-md lg:text-lg text-gray-600 primary-font lg:mt-1 mt-2">
               If SEO doesn’t do well, you’ll have to need several plug-ins for that. The URLs aren’t humanly readable, you’ll need to customize them.
               </p>
             </div>
           </div>

           <p
             data-aos="zoom-in"
             className="text-md lg:text-lg mt-5 text-gray-600 primary-font"
           >
           We lead drag and drop website builders and make best use of robust SEO capabilities.
           </p>
           <div className="flex flex-col justify-center sm:flex-row items-center mb-12 lg:mb-0 lg:flex-row gap-10 mt-10">
           <button
             className="bg-red-600 text-white py-3 px-5 rounded-xl text-md transition-all duration-300 transform hover:bg-red-800 hover:scale-105 hover:shadow-lg"
             onClick={videoStartHandler} 
           >
             CONTACT US
           </button>
           </div>
         </div>
       </div>
     </div>

{/* forth section */}

    
  
<div className="w-full lg:px-4 overflow-hidden bg-[#ffffff] border-b border-orange-100">
  <div className="flex flex-col lg:flex-row-reverse items-center lg:gap-10 secondary-font">
    <div
      data-aos="fade-up"
      className="lg:w-1/2 w-full md:w-3/4 py-16 px-10 md:px-4"
    >
      <img className="w-full border-4 border-red-600" src="https://img.freepik.com/free-vector/hand-drawn-flat-design-ssl-illustration_23-2149262966.jpg" alt="img" />
    </div>
    <div className="lg:w-1/2 w-full md:w-3/4 px-10 md:p-0">
      <div data-aos="fade-left">
        <h1 className="lg:text-4xl text-2xl text-black primary-font font-semibold"
        style={{color:"#7a6960"}}
        >
      Hosting & SSL Certificate – Secured Lock
          <span className="block mt-2 w-4/12 border-b-4 border-red-600"></span>
        </h1>
      </div>

      <div
        data-aos="zoom-in"
        className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5"
      >
        <div className="w-full">
          <p className="text-md lg:text-lg text-gray-600 primary-font lg:mt-1 mt-2">
          Protect your website with the green padlock by a trusted SSL service.
          </p>
        </div>
      </div>

      <div
        data-aos="zoom-in"
        className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5"
      >
        <div className="w-full">
          <p className="text-md lg:text-lg text-gray-600 primary-font lg:mt-1 mt-2">
          Hosting your site through SSL can boost search engine ranking and give your audience peace of mind with secured lock and site seal.
          </p>
        </div>
      </div>

      {/* <p
        data-aos="zoom-in"
        className="text-md lg:text-lg mt-5 text-gray-600 primary-font"
      >
       Now, view, daily, weekly and monthly planned post in a smart calendar and make beautiful custom images to help your post stand out.
      </p> */}
      <div className="flex flex-col justify-center sm:flex-row items-center mb-12 lg:mb-0 lg:flex-row gap-10 mt-10">
      <button
              className="bg-red-600 text-white py-3 px-5 rounded-xl text-md transition-all duration-300 transform hover:bg-red-800 hover:scale-105 hover:shadow-lg"
              onClick={videoStartHandler} 
            >
              CONTACT US
            </button>
      </div>
    </div>
  </div>
</div>

    <div className="py-16 px-6 bg-gradient-to-b from-red-400 to-white text-center overflow-hidden">
      <h2
        className="text-3xl md:text-4xl font-extrabold mb-10 text-black tracking-wide"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        What Our Clients Say
      </h2>

      <div className="relative w-full max-w-7xl mx-auto">
        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-33.3333%)`,
              width: "300%",
            }}
          >
            {displayItems.map((item, index) => (
              <div
                key={index}
                className="w-full md:w-1/3 p-4"
                style={{ flex: "0 0 33.3333%" }}
                data-aos="zoom-in"
        data-aos-delay="200"
              >
                <div
                  className={`relative rounded-xl shadow-xl p-6 md:p-8 transition-all duration-500 border
                    ${
                      index === 1
                        ? "bg-white scale-105 border-blue-300 ring-2 ring-blue-400 z-20 shadow-2xl"
                        : "bg-blue-50 opacity-80 hover:opacity-100 z-10"
                    }
                    w-full hover:scale-105 hover:shadow-xl text-center
                  `}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 mb-4 rounded-full border-4 border-white shadow-lg object-cover mx-auto"
                  />
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-sm mt-3 text-gray-600 leading-relaxed">
                    “{item.text}”
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={prev}
            className="p-3 rounded-full bg-white text-blue-500 hover:bg-blue-100 shadow-md hover:scale-110 transition-all"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            className="p-3 rounded-full bg-white text-blue-500 hover:bg-blue-100 shadow-md hover:scale-110 transition-all"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>

<section className="pt-10 lg:pb-0 pb-10 relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 lg:h-[90%]" style={{ backgroundImage: 'url("https://images.pexels.com/photos/18530501/pexels-photo-18530501/free-photo-of-google-in-smartphone.jpeg")' }}></div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="flex flex-wrap justify-center text-center lg:mb-[-20px] mb-6">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="lg:text-3xl text-2xl font-semibold uppercase"
                style={{ color: "#7a6960" }}
              >
                3-Steps to Make your Business an Online Powerhouse
                <span className="block mt-2 mx-auto w-20 border-b-4 border-red-600"></span>
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="flex min-h-screen items-center justify-center">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 lg:w-[85%]">
                <div className="group relative cursor-pointer flex flex-col items-center justify-center transition-shadow hover:shadow-xl hover:shadow-black/30 py-4 px-6 bg-white rounded-lg shadow-lg h-[300px]">
                  <div className="mb-2 flex justify-center">
                    <div className="w-32 h-32 rounded-full bg-red-100 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 animate-pulse">
                      <img
                        className="w-20 h-20 object-contain transition-transform duration-500 group-hover:rotate-12"
                        src={call}
                        alt="call"
                      />
                    </div>
                  </div>

                  <h1 className="font-dmserif lg:text-2xl text-xl font-bold text-black mb-1 text-center">SCHEDULE A CALL</h1>
                  <p className="text-sm italic text-gray-700 text-center">
                    Get in touch with us! You’re only a phone call away from improving your company’s exposure.
                  </p>
                  <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2">
                    <button
                      className="bg-red-600 text-white lg:py-3 px-6 text-md font-semibold rounded-full transition-all duration-300 transform hover:bg-red-800 hover:scale-110 hover:shadow-lg active:scale-95 animate-bounce"
                      onClick={videoStartHandler}
                    >
                      SCHEDULE NOW
                    </button>
                  </div>
                </div>


                <div className="group relative cursor-pointer flex flex-col items-center justify-center transition-shadow hover:shadow-xl hover:shadow-black/30 py-4 px-6 mt-6 lg:mt-0 bg-white rounded-lg shadow-lg h-[300px]">
                  <div className="mb-2 flex justify-center">
                    <div className="w-32 h-32 rounded-full bg-red-100 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 animate-pulse">
                      <img
                        className="w-20 h-20 object-contain transition-transform duration-500 group-hover:rotate-12"
                        src={plan}
                        alt="plan"
                      />
                    </div>
                  </div>

                  <h1 className="font-dmserif lg:text-2xl text-xl font-bold text-black mb-1 text-center">GET YOUR PLAN</h1>

                  <p className="text-sm italic text-gray-700 text-center">
                    Browse through everything we have to offer and choose the option that’s right for you!
                  </p>

                  <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2">
                    <button
                      className="bg-red-600 text-white lg:py-3 py-2 px-6 text-md font-semibold rounded-full transition-all duration-300 transform hover:bg-red-800 hover:scale-110 hover:shadow-lg active:scale-95 animate-bounce text-center"
                      onClick={videoStartHandler}
                    >
                      GET PLAN
                    </button>
                  </div>
                </div>


                <div className="group relative cursor-pointer flex flex-col items-center justify-center transition-shadow hover:shadow-xl hover:shadow-black/30 py-4 px-6 mt-6 lg:mt-0 bg-white rounded-lg shadow-lg h-[300px]">
                  <div className="mb-2 flex justify-center">
                    <div className="w-32 h-32 rounded-full bg-red-100 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 animate-pulse">
                      <img
                        className="w-20 h-20 object-contain transition-transform duration-500 group-hover:rotate-12"
                        src={win}
                        alt="win"
                      />
                    </div>
                  </div>

                  <h1 className="font-dmserif lg:text-2xl text-xl font-bold text-black mb-1 text-center">WIN ONLINE</h1>

                  <p className="text-sm italic text-gray-700 text-center">
                    Take charge of all search engines and business listings with our all-in-one marketing solutions!
                  </p>

                  <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2">
                    <button
                      className="bg-red-600 text-white lg:py-3 px-6 text-md font-semibold rounded-full transition-all duration-300 transform hover:bg-red-800 hover:scale-110 hover:shadow-lg active:scale-95 animate-bounce"
                      onClick={videoStartHandler}
                    >
                      START WINNING
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


 
         <div className=" text-[#7A6960] w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100 bg-gray-100">
         <h1 data-aos="fade-right" className="text-3xl font-semibold text-center uppercase">
        Contact
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-red-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        Have questions or need assistance? Our team is ready to support you. Reach out to us today and let’s discuss how we can boost your online presence.
      </p>

      <div className="lg:flex gap-6">
        <div
          data-aos="fade-up"
          className="lg:w-[40%] px-10 py-5 shadow-xl border-t-[3px] border-b-[3px] border-orange-600 mb-7 lg:mb-0"
        >
          <div className="flex gap-3 mt-3 mb-12">
            <div
              className="rounded-full h-fit bg-orange-100 p-2"
              style={{ color: "#EA580C", fontSize: "28px" }}
            >
              <IoLocationOutline />
            </div>
            <div>
              <h2 className="lg:text-xl text-[#7A6960] font-semibold">Address</h2>
              <p className="text-sm text-slate-800">Shyam Tower, Shimla Bypass Road,248171</p>
            </div>
          </div>

          <div className="flex gap-3 mb-12">
            <div
              className="rounded-full h-fit bg-orange-100 p-2"
              style={{ color: "#EA580C", fontSize: "28px" }}
            >
              <IoCallOutline />
            </div>
            <div>
              <h2 className="lg:text-xl text-[#7A6960] font-semibold">Call Us</h2>
              <p className="text-sm text-slate-800">+91 8979249912</p>
            </div>
          </div>

          <div className="flex gap-5 mb-12">
            <div
              className="rounded-full h-fit bg-orange-100 p-2"
              style={{ color: "#EA580C", fontSize: "28px" }}
            >
              <TfiEmail />
            </div>
            <div>
              <h2 className="lg:text-xl text-[#7A6960] font-semibold">Email Us</h2>
              <p className="text-sm text-slate-800">info@rankmantra.com</p>
            </div>
          </div>

          <div className="lg:w-full lg:h-72">
            <iframe
              width="100%"
              height="100%"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14010.76256980872!2d77.22260515427726!3d28.60905606083753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929f8421dcd3b%3A0xc98798955cbfeb6d!2sRankMantra!5e0!3m2!1sen!2sin!4v1717776828829!5m2!1sen!2sin"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1600"
          className="lg:w-[60%] px-10 py-5 shadow-xl border-t-[3px] border-b-[3px] border-red-600"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:flex gap-6">
              <div className="md:w-[50%]">
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border focus:border-red-600 outline-none"
                  />
                </div>
              </div>

              <div className="md:w-[50%]">
                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    id="email"
                    placeholder="johndoe@gmail.com"
                    className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border focus:border-red-600 outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="subject">Subject</label>
              <input
                {...register("subject", { required: true })}
                type="text"
                id="subject"
                placeholder="Your subject"
                className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border focus:border-red-600 outline-none"
              />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                {...register("message", { required: true })}
                id="message"
                placeholder="Enter your message"
                className="w-full h-60 p-3 my-3 rounded border border-zinc-300 focus:border focus:border-red-600 outline-none resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col justify-center sm:flex-row items-center mb-12 lg:mb-0 lg:flex-row gap-10 mt-10">
            <button
              className="bg-red-600 text-white py-3 px-5 rounded-xl text-md transition-all duration-300 transform hover:bg-red-800 hover:scale-105 hover:shadow-lg"
              onClick={videoStartHandler} 
            >
              SEND MESSAGE
            </button>
            </div>
          </form>
        </div>
      </div>
          </div>
    {/* </section> */}
    

      <section className="w-full max-h-fit py-16 lg:px-30 overflow-hidden border-b border-orange-100 relative mt-6">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 z-0" 
             style={{ backgroundImage: 'url(https://images.pexels.com/photos/267401/pexels-photo-267401.jpeg)' }}>
        </div>
        <div className="relative z-10">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default WebDevelop;
