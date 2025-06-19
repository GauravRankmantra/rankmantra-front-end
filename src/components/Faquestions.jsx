import React from "react";
import Accordian from "./Accordian";

const Faquestions = () => {
  return (
    // <div className="grid md:grid-cols-2 gap-x-10 md:gap-y-5 gap-y-3 mx-5 lg:mx-0">
    <>
      <div className="md:flex w-full md:gap-5 mb-5">
        <div className="md:w-1/2 mb-2 md:mb-0">
        <Accordian
          question={" What is typically included in an SEO package"}
          answer={
            "An SEO package usually includes keyword research, on-page optimization (such as meta tags and content improvement), link building, technical SEO (like site speed and mobile optimization), regular performance reports, and continuous monitoring to improve search engine rankings."
          }
        />
        </div>

        <div className="md:w-1/2">
        <Accordian
          question={"What does an SMM package includes"}
          answer={
            " An SMM package typically includes social media account setup or optimization, content creation, scheduling and posting, community management, paid ad campaigns, analytics and reporting, audience engagement, and strategy development to increase brand visibility, traffic, and conversions across platforms like Facebook, Instagram, Twitter, and LinkedIn."
          }
        />
        </div>
      </div>

      <div className="md:flex w-full md:gap-5 mb-5">
        <div className="md:w-1/2 mb-2 md:mb-0">
        <Accordian
          question={"What is included in a PPC (Pay-Per-Click) package"}
          answer={
            "A PPC package generally includes keyword research, ad copywriting, campaign setup, bid management, landing page optimization, audience targeting, budget management, and ongoing monitoring. It also provides detailed analytics and performance reporting to optimize ad campaigns, improve ROI, and drive targeted traffic to your website."
          }
        />
        </div>

        <div className="md:w-1/2">
        <Accordian
          question={"What does an ORM package includes"}
          answer={
            "An ORM package typically includes monitoring and analyzing your brand’s online presence, addressing negative reviews or comments, improving positive content, and managing public relations. It may also involve content creation (like blog posts or social media updates) to enhance your brand image, along with strategies to promote positive reviews and maintain a good reputation across search engines and social platforms."
          }
        />
        </div>
      </div>

      <div className="md:flex w-full md:gap-5 mb-5">
        <div className="md:w-1/2 mb-2 md:mb-0 ">
        <Accordian
          question={" What is included in a web hosting package"}
          answer={
            "A web hosting package generally includes server space to store your website’s files, domain name registration or linking, email hosting, security features like SSL certificates, regular backups, and technical support. Some packages also offer features like website builders, content management system (CMS) support, bandwidth, and storage options, depending on the hosting plan selected (shared, VPS, dedicated, or cloud hosting)."
          }
        />
        </div>

        <div className="md:w-1/2">
        <Accordian
          question={"What is included in a web development package"}
          answer={
            "A web development package typically includes website design and layout creation, front-end and back-end development, mobile responsiveness, user experience (UX) optimization, content management system (CMS) integration, and custom functionality development. It may also cover website testing, SEO optimization, security measures (SSL, firewalls), and post-launch maintenance, along with ongoing support for updates and improvements."
          }
        />
        </div>
      </div>
    </>
  );
};

export default Faquestions;
