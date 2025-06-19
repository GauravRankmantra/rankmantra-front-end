import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

// Import React Slick for the carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const WebhostPackage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  // State for showing the video
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Google Form URL for contact form submission
  const googleFormUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf3_4nAOlIG-4K60p8Mo6sBV5AK2S-uXRJh22cw0fMFZS7X2w/formResponse";

  // AOS initialization
  useEffect(() => {
    AOS.init();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle window resize for mobile check
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

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
        mode: "no-cors"
      });
      toast.success("Message sent successfully!");
      e.target.reset();
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  // Slick carousel settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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

      <section className="w-full max-h-fit py-10 lg:px-30 overflow-hidden border-b border-orange-100 relative">
        <div className="relative w-full h-96 lg:h-screen">
          <img
            src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg"
            className="absolute inset-0 w-full lg:h-[95%] h-full object-cover"
          />
          <div className="absolute inset-0 bg-black lg:h-[95%] opacity-40 z-0"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
              Web Hosting <span className="text-red-600">Packages</span>
            </h1>
            <div className="flex flex-col justify-center sm:flex-row items-center mb-10 lg:mb-0 lg:flex-row gap-10 mt-6">
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
        </div>
      </section>

      <div className="text-[#7A6960] w-full py-16 lg:px-10 px-2 overflow-hidden bg-[#FEFAF8] border-b border-orange-100">
        <h1 data-aos="fade-down" className="lg:text-3xl text-2xl font-semibold text-center uppercase">
          Web Hosting Packages Prices
        </h1>
        <div className="flex justify-center items-center mt-2">
          <div className="bg-red-600 h-1 w-16 rounded"></div>
        </div>

       
        {!isMobile && (
  <div className="grid grid-cols-1 gap-6 p-2" data-aos="fade-up">
    <div className="bg-red-200 w-full p-6 shadow-lg rounded-lg">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
        <div className="text-center">
          <h3 className="font-semibold text-lg border-b pb-2">Web Hosting Packages</h3>
          <p className="text-md border-b pb-2">Per Year Cost (USD)</p>
          <p className="text-md border-b pb-2">Per Year Cost (INR)</p>
          <p className="text-md border-b pb-2">Web Space</p>
          <p className="text-md border-b pb-2">Monthly Bandwidth</p>
          <p className="text-md border-b pb-2">Domain Limit</p>
          <p className="text-md border-b pb-2">Web Site Builder</p>
          <p className="text-md border-b pb-2">Full Support</p>
          <p className="text-md border-b pb-2">Instant Backups</p>
          <p className="text-md border-b pb-2">99.9% Uptime</p>
          <p className="text-md border-b pb-2">Free / Instant Setup</p>
          <p className="text-md border-b pb-2">RAID1 Disk</p>
          <p className="text-md border-b pb-2">Subdomains</p>
          <p className="text-md border-b pb-2">MySQL Databases</p>
          <p className="text-md border-b pb-2">FTP</p>
          <p className="text-md border-b pb-2">CGI</p>
          <p className="text-md border-b pb-2">PHP 4 & 5</p>
          <p className="text-md border-b pb-2">Perl</p>
          <p className="text-md border-b pb-2">SSl</p>
          <p className="text-md border-b pb-2">Cron</p>
          <p className="text-md border-b pb-2">FrontPage Extensions</p>
          <p className="text-md border-b pb-2">Curl</p>
          <p className="text-md border-b pb-2">Flash</p>
          <p className="text-md border-b pb-2">GD</p>
          <p className="text-md border-b pb-2">Apache Web Server</p>
          <p className="text-md border-b pb-2">.htaccess</p>
          <p className="text-md border-b pb-2">Image Magick</p>
          <p className="text-md border-b pb-2">POP3 Accounts</p>
          <p className="text-md border-b pb-2">Web Mail</p>
          <p className="text-md border-b pb-2">E-mail Alias</p>
          <p className="text-md border-b pb-2">Auto Responders</p>
          <p className="text-md border-b pb-2">Mailing Lists</p>
          <p className="text-md border-b pb-2">Catch Alls</p>
          <p className="text-md border-b pb-2">Spam Assassin</p>
          <p className="text-md border-b pb-2">Mail Forwarding</p>
          <p className="text-md border-b pb-2">IMAP Support</p>
          <p className="text-md border-b pb-2">SMTP</p>
          <p className="text-md border-b pb-2">Fantastico</p>
          <p className="text-md border-b pb-2">FHotlink Protection</p>
          <p className="text-md border-b pb-2">IP Deny Manager</p>
          <p className="text-md border-b pb-2">Custom Error Pages</p>
          <p className="text-md border-b pb-2">Instant Blogs</p>
          <p className="text-md border-b pb-2">Instant Portals</p>
          <p className="text-md border-b pb-2">Instant PHPnuke</p>
          <p className="text-md border-b pb-2">Instant Forums</p>
          <p className="text-md border-b pb-2">Instant Guestbook</p>
          <p className="text-md border-b pb-2">Instant Counter</p>
          <p className="text-md border-b pb-2">Instant FormMail</p>
          <p className="text-md border-b pb-2">Redirect URL</p>
          <p className="text-md border-b pb-2">Web Based File Manager</p>
          <p className="text-md border-b pb-2">Instant Counter</p>
          <p className="text-md border-b pb-2">PW Protected Directories</p>
          <p className="text-md border-b pb-2">phpMyAdmin</p>
          <p className="text-md border-b pb-2">AWStats </p>
          <p className="text-md border-b pb-2">Webalizer</p>
          <p className="text-md border-b pb-2">Raw Log Manager</p>
          <p className="text-md border-b pb-2">Referrer Logs</p>
          <p className="text-md border-b pb-2">Error Logs</p>
          <p className="text-md border-b pb-2">Agora Cart</p>
          <p className="text-md border-b pb-2">osCommerce</p>
          <p className="text-md border-b pb-2">ZenCart</p>
          <p className="text-md border-b pb-2">Cube Cart</p>
          <p className="text-md border-b pb-2">Free Web Templates</p>
          <p className="text-md border-b pb-2">Search Engine Submission</p>
          <p className="text-md border-b pb-2">Free SEO Tools</p>
          <p className="text-md border-b pb-2">Free Script Library</p>
          <p className="text-md border-b pb-2">Free Contact Form</p>
          <p className="text-md border-b pb-2">Google Apps Support</p>
          <p className="text-md border-b pb-2">Per Year Cost</p>
          <button
            className="bg-red-600 text-white py-2 px-5 mt-2 rounded-xl lg:text-lg text-md transition-all duration-300 transform hover:bg-red-800 hover:scale-110 hover:shadow-lg"
            onClick={videoStartHandler} 
          >
            Contact Us
          </button>
          
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-lg border-b pb-2">Bronze Plan</h3>
          <p className="text-md border-b pb-2">20/Y</p>
          <p className="text-md border-b pb-2">1295/Y</p>
          <p className="text-md border-b pb-2">1GB</p>
          <p className="text-md border-b pb-2">5 GB</p>
          <p className="text-md border-b pb-2">1</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">1</p>
          <p className="text-md border-b pb-2">1</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <button
            className="bg-red-600 text-white py-2 px-5 mt-2 rounded-xl lg:text-lg text-md transition-all duration-300 transform hover:bg-red-800 hover:scale-110 hover:shadow-lg"
            onClick={videoStartHandler} 
          >
            Contact Us
          </button>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-lg border-b pb-2">Silver Plan</h3>
          <p className="text-md border-b pb-2">30/Y</p>
          <p className="text-md border-b pb-2">1995/Y</p>
          <p className="text-md border-b pb-2">Unlimited</p>
          <p className="text-md border-b pb-2">Unlimited</p>
          <p className="text-md border-b pb-2">1</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">100</p>
          <p className="text-md border-b pb-2">Unlimited</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <button
            className="bg-red-600 text-white py-2 px-5 mt-2 rounded-xl lg:text-lg text-md transition-all duration-300 transform hover:bg-red-800 hover:scale-110 hover:shadow-lg"
            onClick={videoStartHandler} 
          >
            Contact Us
          </button>
        
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-lg border-b pb-2">Gold Plan</h3>
          <p className="text-md border-b pb-2">50/Y</p>
          <p className="text-md border-b pb-2">3195/Y</p>
          <p className="text-md border-b pb-2">Unlimited</p>
          <p className="text-md border-b pb-2">Unlimited</p>
          <p className="text-md border-b pb-2">3</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">200</p>
          <p className="text-md border-b pb-2">Unlimited</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <button
            className="bg-red-600 text-white py-2 px-5 mt-2 rounded-xl lg:text-lg text-md transition-all duration-300 transform hover:bg-red-800 hover:scale-110 hover:shadow-lg"
            onClick={videoStartHandler} 
          >
            Contact Us
          </button>
          
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-lg border-b pb-2">Diamond Plan</h3>
          <p className="text-md border-b pb-2">100/Y</p>
          <p className="text-md border-b pb-2">5995/Y</p>
          <p className="text-md border-b pb-2">Unlimited</p>
          <p className="text-md border-b pb-2">Unlimited</p>
          <p className="text-md border-b pb-2">Unlimited</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Unlimited</p>
          <p className="text-md border-b pb-2">Unlimited</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <p className="text-md border-b pb-2">Yes</p>
          <button
            className="bg-red-600 text-white py-2 px-5 mt-2 rounded-xl lg:text-lg text-md transition-all duration-300 transform hover:bg-red-800 hover:scale-110 hover:shadow-lg"
            onClick={videoStartHandler} 
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  </div>
)}

{isMobile && (
  <div className="relative">
    <Slider {...sliderSettings}>
      <div className="bg-red-200 p-6 mt-10 shadow-lg rounded-lg">
        <h3 className="font-semibold text-center text-lg">Web Hosting Packages</h3>
          <p className="text-md text-center border-b pb-2">Per Year Cost (USD)</p>
          <p className="text-md text-center border-b pb-2">Per Year Cost (INR)</p>
          <p className="text-md text-center border-b pb-2">Web Space</p>
          <p className="text-md text-center border-b pb-2">Monthly Bandwidth</p>
          <p className="text-md text-center border-b pb-2">Domain Limit</p>
          <p className="text-md text-center border-b pb-2">Web Site Builder</p>
          <p className="text-md text-center border-b pb-2">Full Support</p>
          <p className="text-md text-center border-b pb-2">Instant Backups</p>
          <p className="text-md text-center border-b pb-2">99.9% Uptime</p>
          <p className="text-md text-center border-b pb-2">Free / Instant Setup</p>
          <p className="text-md text-center border-b pb-2">RAID1 Disk</p>
          <p className="text-md text-center border-b pb-2">Subdomains</p>
          <p className="text-md text-center border-b pb-2">MySQL Databases</p>
          <p className="text-md text-center border-b pb-2">FTP</p>
          <p className="text-md text-center border-b pb-2">CGI</p>
          <p className="text-md text-center border-b pb-2">PHP 4 & 5</p>
          <p className="text-md text-center border-b pb-2">Perl</p>
          <p className="text-md text-center border-b pb-2">SSl</p>
          <p className="text-md text-center border-b pb-2">Cron</p>
          <p className="text-md text-center border-b pb-2">FrontPage Extensions</p>
          <p className="text-md text-center border-b pb-2">Curl</p>
          <p className="text-md text-center border-b pb-2">Flash</p>
          <p className="text-md text-center border-b pb-2">GD</p>
          <p className="text-md text-center border-b pb-2">Apache Web Server</p>
          <p className="text-md text-center border-b pb-2">.htaccess</p>
          <p className="text-md text-center border-b pb-2">Image Magick</p>
          <p className="text-md text-center border-b pb-2">POP3 Accounts</p>
          <p className="text-md text-center border-b pb-2">Web Mail</p>
          <p className="text-md text-center border-b pb-2">E-mail Alias</p>
          <p className="text-md text-center border-b pb-2">Auto Responders</p>
          <p className="text-md text-center border-b pb-2">Mailing Lists</p>
          <p className="text-md text-center border-b pb-2">Catch Alls</p>
          <p className="text-md text-center border-b pb-2">Spam Assassin</p>
          <p className="text-md text-center border-b pb-2">Mail Forwarding</p>
          <p className="text-md text-center border-b pb-2">IMAP Support</p>
          <p className="text-md text-center border-b pb-2">SMTP</p>
          <p className="text-md text-center border-b pb-2">Fantastico</p>
          <p className="text-md text-center border-b pb-2">FHotlink Protection</p>
          <p className="text-md text-center border-b pb-2">IP Deny Manager</p>
          <p className="text-md text-center border-b pb-2">Custom Error Pages</p>
          <p className="text-md text-center border-b pb-2">Instant Blogs</p>
          <p className="text-md text-center border-b pb-2">Instant Portals</p>
          <p className="text-md text-center border-b pb-2">Instant PHPnuke</p>
          <p className="text-md text-center border-b pb-2">Instant Forums</p>
          <p className="text-md text-center border-b pb-2">Instant Guestbook</p>
          <p className="text-md text-center border-b pb-2">Instant Counter</p>
          <p className="text-md text-center border-b pb-2">Instant FormMail</p>
          <p className="text-md text-center border-b pb-2">Redirect URL</p>
          <p className="text-md text-center border-b pb-2">Web Based File Manager</p>
          <p className="text-md text-center border-b pb-2">Instant Counter</p>
          <p className="text-md text-center border-b pb-2">PW Protected Directories</p>
          <p className="text-md text-center border-b pb-2">phpMyAdmin</p>
          <p className="text-md text-center border-b pb-2">AWStats </p>
          <p className="text-md text-center border-b pb-2">Webalizer</p>
          <p className="text-md text-center border-b pb-2">Raw Log Manager</p>
          <p className="text-md text-center border-b pb-2">Referrer Logs</p>
          <p className="text-md text-center border-b pb-2">Error Logs</p>
          <p className="text-md text-center border-b pb-2">Agora Cart</p>
          <p className="text-md text-center border-b pb-2">osCommerce</p>
          <p className="text-md text-center border-b pb-2">ZenCart</p>
          <p className="text-md text-center border-b pb-2">Cube Cart</p>
          <p className="text-md text-center border-b pb-2">Free Web Templates</p>
          <p className="text-md text-center border-b pb-2">Search Engine Submission</p>
          <p className="text-md text-center border-b pb-2">Free SEO Tools</p>
          <p className="text-md text-center border-b pb-2">Free Script Library</p>
          <p className="text-md text-center border-b pb-2">Free Contact Form</p>
          <p className="text-md text-center border-b pb-2">Google Apps Support</p>
          <p className="text-md text-center border-b pb-2">Per Year Cost</p>
          
      </div>
      <div className="bg-red-200 p-6 mt-10 shadow-lg rounded-lg">
        <h3 className="font-semibold text-center text-lg">Bronze Plan</h3>
        <p className="text-md text-center border-b pb-2">20/Y</p>
          <p className="text-md text-center border-b pb-2">1295/Y</p>
          <p className="text-md text-center border-b pb-2">1GB</p>
          <p className="text-md text-center border-b pb-2">5 GB</p>
          <p className="text-md text-center border-b pb-2">1</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">1</p>
          <p className="text-md text-center border-b pb-2">1</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
      </div>
      <div className="bg-red-200 p-6 mt-10 shadow-lg rounded-lg">
        <h3 className="font-semibold text-center text-lg">Silver Plan</h3>
        <p className="text-md text-center border-b pb-2">30/Y</p>
          <p className="text-md text-center border-b pb-2">1995/Y</p>
          <p className="text-md text-center border-b pb-2">Unlimited</p>
          <p className="text-md text-center border-b pb-2">Unlimited</p>
          <p className="text-md text-center border-b pb-2">1</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">100</p>
          <p className="text-md text-center border-b pb-2">Unlimited</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
      </div>
      <div className="bg-red-200 p-6 mt-10 shadow-lg rounded-lg">
        <h3 className="font-semibold text-center text-lg">Gold Plan</h3>
        <p className="text-md text-center border-b pb-2">50/Y</p>
          <p className="text-md text-center border-b pb-2">3195/Y</p>
          <p className="text-md text-center border-b pb-2">Unlimited</p>
          <p className="text-md text-center border-b pb-2">Unlimited</p>
          <p className="text-md text-center border-b pb-2">3</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">200</p>
          <p className="text-md text-center border-b pb-2">Unlimited</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
      </div>
      <div className="bg-red-200 p-6 mt-10 shadow-lg rounded-lg">
        <h3 className="font-semibold text-center text-lg">Diamond Plan</h3>
        <p className="text-md text-center border-b pb-2">100/Y</p>
          <p className="text-md text-center border-b pb-2">5995/Y</p>
          <p className="text-md text-center border-b pb-2">Unlimited</p>
          <p className="text-md text-center border-b pb-2">Unlimited</p>
          <p className="text-md text-center border-b pb-2">Unlimited</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Unlimited</p>
          <p className="text-md text-center border-b pb-2">Unlimited</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
          <p className="text-md text-center border-b pb-2">Yes</p>
      </div>
    </Slider>
  
    <style jsx>{`
      .slick-dots {
        position: absolute;
        top: 5px;
        left: 50%;
        transform: translateX(-50%);
      }
      
     
      .slick-dots li button {
        width: 16px;
        height: 16px; 
        border-radius: 50%; 
        background-color: #000; 
        opacity: 1; 
        transition: background-color 0.3s;
      }

      .slick-dots li.slick-active button {
        background-color: #bb0404;
      }

      .slick-dots li button:hover {
        background-color: #bb0404;
      }
    `}</style>
  </div>
)}

      </div>

    
      <div className="text-[#7A6960] w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100 bg-gray-100">
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
                <h2 className="lg:text-xl text-[#7A6960] font-semibold">Email</h2>
                <p className="text-sm text-slate-800">support@virginiawebtech.com</p>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div
            data-aos="fade-up"
            className="lg:w-[60%] px-10 py-5 shadow-xl border-t-[3px] border-b-[3px] border-orange-600"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-6">
              <input
                className="w-full bg-transparent px-3 py-3 rounded-md border-b-2 outline-none"
                type="text"
                {...register("name")}
                placeholder="Your Name"
              />
              <input
                className="w-full bg-transparent px-3 py-3 rounded-md border-b-2 outline-none"
                type="email"
                {...register("email")}
                placeholder="Your Email"
              />
              <input
                className="w-full bg-transparent px-3 py-3 rounded-md border-b-2 outline-none"
                type="text"
                {...register("subject")}
                placeholder="Subject"
              />
              <textarea
                className="w-full bg-transparent px-3 py-3 rounded-md border-b-2 outline-none"
                rows="5"
                {...register("message")}
                placeholder="Message"
              />
              <button
                type="submit"
                className="py-3 px-6 bg-red-600 text-white rounded-md transition-all duration-300 hover:bg-red-800 hover:scale-105 hover:shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
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

export default WebhostPackage;
