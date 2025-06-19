import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CtaButton from "../components/CtaButton";
import { Link, useNavigate } from "react-router-dom";
import hotel from "../img/portfolio/hotel.png";

const ProductTemp4 = () => {
  const navigate = useNavigate();

  let date = new Date();
  date =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

  return (
    <div>
      <NavBar />
      <section
        id="about"
        className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100"
      >
        <div className="flex md:flex-row flex-col items-start justify-center gap-10">
          <div className="md:w-2/3 p-5 md:p-0">
            <img className="" src={hotel} alt="" />
          </div>
          <div className="md:w-1/3 flex flex-col gap-10 p-5 md:p-0">
            <div className="shadow-xl border-2 p-8">
              <h1 className="text-3xl font-semibold text-[#7A6960]">
                Project Information
              </h1>
              <div className="h-[1px] mt-3 bg-slate-200"></div>
              <ul className="mt-3">
                <li>
                  <span className="font-semibold ">Category:</span> Software
                </li>
                <li>
                  <span className="font-semibold ">Client:</span> USA
                </li>
                <li>
                  <span className="font-semibold ">Project Date:</span> {date}
                </li>
                <li>
                  <span className="font-semibold ">Project Url:</span>{" "}
                  <a href="https://qcenthotels.com/" target="_blank" class="text-orange-600">https://qcenthotels.com/</a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-[#7A6960]">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                dicta mollitia, labore deserunt repellat temporibus animi
                pariatur accusamus enim unde rerum id qui beatae neque,
                perferendis maxime facilis nulla quos saepe iste non optio quam
                in! Dolorem hic nulla porro?
              </p>
            </div>
            <div className="flex items-center justify-center mt-3">
              <Link to="/hireus" className="">
                <CtaButton name={"Consultant Now"} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-h-fit py-16 lg:px-30 overflow-hidden border-b border-orange-100 relative mt-6">
  <div className="absolute inset-0 bg-cover bg-center opacity-10 z-0" style={{ backgroundImage: 'url(https://images.pexels.com/photos/267401/pexels-photo-267401.jpeg)' }}></div>
  <div className="relative z-10">
    <Footer />
  </div>
</section>
    </div>
  );
};

export default ProductTemp4;