import React, { useEffect } from "react";
import Card from "./Card";
import { HiOutlineChartPie } from "react-icons/hi2";
import { CgWebsite } from "react-icons/cg";
import { MdContentPasteSearch } from "react-icons/md";
import { MdCampaign } from "react-icons/md";
import { FaAmazonPay } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";
import { RiBaseStationLine } from "react-icons/ri";
import { SiHostinger } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="text-[#7A6960]">
      <h1 data-aos="fade-down" className="text-3xl font-semibold text-center uppercase">
        Services
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-red-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-start mt-7 mb-10 text-lg p-2">
        Boost Sales and Efficiency with Professional Web Development and Design.
        Our web design services enhance your online visibility, driving increased sales, profitability, and cost efficiency for your business.
      </p>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-2"
        data-aos="fade-up"
      >
        <div >
          <Card
            img={<HiOutlineChartPie />}
            title={"Apps Development"}
            desc={
              "We provide expert app development services, creating custom, scalable, and user-friendly apps for iOS, Android, and cross-platform solutions."
            }
          />
        </div>

        <div>
          <Card
            img={<CgWebsite />}
            title={"Web Development"}
            desc={
              "We specialize in web development, offering custom websites, Ecommerce solutions, responsive designs, and seamless integrations user experience."
            }
          />
        </div>

       
        <div>
          <Card
            img={<MdContentPasteSearch />}
            title={"Search Engine Optimization"}
            desc={
              "Enhance your website's visibility, improve search rankings, and drive organic traffic with our effective, customized, results-driven SEO strategies."
            }
          />
        </div>

   
        <div>
          <Card
            img={<MdCampaign />}
            title={"Campaign-Creation"}
            desc={
              "We specialize in campaign-creation, designing targeted-strategies to drive engagement, conversions, and maximize results."
            }
          />
        </div>

    
        <div>
          <Card
            img={<FaAmazonPay />}
            title={"PPC Packages"}
            desc={
              "Our PPC packages provide custom strategies to optimize ad spend, boost traffic, and increase conversions, delivering measurable, high-impact results for your business."
            }
          />
        </div>
        <div>
          <Card
            img={<IoShareSocialSharp />}
            title={"SMM Packages"}
            desc={
              "Our SMM packages provide customized social media strategies to enhance brand visibility, engage your audience, drive targeted traffic, and increase conversions various platforms."
            }
          />
        </div>
        <div>
          <Card
            img={<RiBaseStationLine />}
            title={"ORM Packages"}
            desc={
              "Our ORM packages help manage and improve your online reputation by addressing negative content, enhancing brand perception, and boosting positive reviews to build customer trust."
            }
          />
        </div>
        <div>
  <Card
    img={<SiHostinger />}
    title={"Web Hosting Packages"}
    desc={
      "Our web hosting packages provide secure, fast, and reliable hosting solutions, ensuring excellent uptime, support, and scalability for your website."
    }
    className="p-5 bg-white rounded-lg shadow-md transition-all duration-300 transform"
  />
</div>

      </div>
    </div>
  );
};

export default Services;
