import React, { useEffect } from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";
import logo from "../assets/logo.png";
import review from "../assets/review.png"
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="md:grid grid-cols-4 p-5 md:p-0">
      <div data-aos="fade-right">
        <img src={logo} alt="free" className="w-48 h-auto lg:ml-8" />
        <p className="mb-1 lg:ml-8 text-sm mt-2">Starting in 2015 with only one customer, we’ve expanded into a full-blown digital marketing agency providing outstanding services to thousands of companies.</p>
        <p className="font-medium lg:ml-8">
            Address: <span className="font-normal ml-1">Shyam Tower, Shimla Bypass Road</span>
          </p>
        <p className="mb-5 lg:ml-8">Dehradun, 248171</p>

        <div>
        <p className="font-medium lg:ml-8">
    Phone:{" "}
    <a href="tel:+918979249912" className="ml-1 font-normal">
      +91 8979249912
    </a>
  </p>
  <p className="font-medium lg:ml-8">
    Email:{" "}
    <a href="mailto:hr@rankmantra.com" className="ml-1 font-normal">
      info@rankmantra.com
    </a>
  </p>
        </div>
      </div>

      <div data-aos="fade-right" data-aos-delay="300" className="mt-10 md:mt-0">
        <h1 className="text-[#7A6960] font-medium text-lg mb-2">
          Google Reviews
        </h1>
        <ul onClick={scrollToTop}>
          <li className="mb-2 arrow">
            <a
              href="https://www.google.com/search?client=ms-android-samsung-rvo1&sca_esv=a3944c8b8683a63b&cs=0&hl=en-IN&output=search&kgmid=/g/11c5zmf7fq&q=Web+Designing+%26+SEO+Company+-+RankMantra&shndl=30&source=sh/x/loc/hdr/m1/4&kgs=751d956340847203#lrd=0x390929f8421dcd3b:0xc98798955cbfeb6d,1,,,," 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-700"
            >
              View Our Google Reviews
            </a>
          </li>
        </ul>
        <img
          src={review}
          alt="Google Reviews"
          className="mt-4 h-auto"
          style={{maxWidth:"90%"}}
        />
      </div>

      <div data-aos="fade-right" data-aos-delay="500" className="mt-10 md:mt-0">
        <h1 className="text-[#7A6960] font-medium text-lg mb-2">
          Our Services
        </h1>
        <ul onClick={scrollToTop}>
          <li className="mb-2 arrow">
            <Link to="/web-develop" className="text-zinc-700">
              Web Development
            </Link>
          </li>
          <li className="mb-2 arrow">
            <Link to="/website-redesign" className="text-zinc-700">
              Website Redesigning
            </Link>
          </li>
          <li className="mb-2 arrow">
            <Link to="/ecommerce-develop" className="text-zinc-700">
              Ecommerce Development
            </Link>
          </li>
          <li className="mb-2 arrow">
            <Link to="/shopify-development" className="text-zinc-700">
              Shopify Development
            </Link>
          </li>
          <li className="mb-2 arrow">
            <Link to="/wordpress-development" className="text-zinc-700">
              Wordpress Development
            </Link>
          </li>
          <li className="mb-2 arrow">
            <Link to="/wix-development" className="text-zinc-700">
              Wix Development
            </Link>
          </li>
          <li className="mb-2 arrow">
            <Link to="/smm" className="text-zinc-700">
              Social Media marketing
            </Link>
          </li>
          <li className="mb-2 arrow">
            <Link to="/web-hosting-package" className="text-zinc-700">
              Web Hosting
            </Link>
          </li>
          <li className="mb-2 arrow">
            <Link to="/seo" className="text-zinc-700">
              Seo Development
            </Link>
          </li>
        </ul>
      </div>

      <div data-aos="fade-right" data-aos-delay="700" className="mt-10 md:mt-0">
        <h1 className="text-[#7A6960] font-medium text-lg mb-2">Follow Us</h1>
        <p className="text-sm">
          Follow RankMantra for daily inspiration, expert digital marketing, SEO strategies, and web development services to boost your success!
        </p>
        <div className="flex justify-between pr-5 mt-5">
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
    </div>
  );
};

export default Footer;
