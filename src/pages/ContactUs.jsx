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
import address from "../assets/address.png";
import hour from "../assets/hour.png";
import contact from "../assets/contact.png"


const ContactUs = () => {
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
    <img
      src="https://images.pexels.com/photos/4064227/pexels-photo-4064227.jpeg" 
      className="absolute inset-0 w-full lg:h-[95%] h-full object-cover"
    />
      <div className="absolute inset-0 bg-black lg:h-[95%] opacity-30 z-0"></div>

    <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
      <h1 className="text-4xl md:text-4xl font-bold text-center mb-4">
      Contact Us Let’s <span className="text-red-600">Build Something</span>
      </h1>
      <p className="text-md lg:p-0 p-2 md:text-lg mb-6 text-center max-w-lg">
      We’re available weekdays, and if you shoot us an email, we’re guaranteed to respond within 24 hours. If you have questions or want to catch up, let us know!
      </p>
     
    </div>
  </div>
</section>



         
<section className="relative">
  <div className="absolute inset-0 bg-cover bg-center opacity-30" ></div>
  <div className="container mx-auto px-8 relative z-10">
    
    <div className="flex flex-wrap">
      <div className="flex min-h-screen items-center justify-center">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 lg:w-[85%]">
          
          <div className="group relative cursor-pointer flex flex-col items-center justify-center transition-shadow hover:shadow-xl hover:shadow-black/30 p-6 bg-white rounded-lg shadow-lg">
            <div className="mb-4 flex justify-center">
              <img className="w-40 text-neutral-900" src={address} alt="free" />
            </div>
            <h1 className="font-dmserif lg:text-xl text-md font-semibold"
            style={{color:"#7a6960"}}
            >Office Address</h1>
            <p className="mb-3 text-md text-gray-600 opacity-100">
            2nd floor, Shyam Tower, Sewla Kalan, Shimla bypass Road, Pithuwala
            Dehradun -248171
            </p>
            
          </div>

          <div className="group relative cursor-pointer flex flex-col items-center justify-center transition-shadow hover:shadow-xl hover:shadow-black/30 p-6 mt-6 lg:mt-0 bg-white rounded-lg shadow-lg">
            <div className="mb-4 flex justify-center">
              <img className="w-28 text-neutral-900" src={contact} alt="free" />
            </div>
            <h1 className="font-dmserif lg:text-xl text-md font-semibold"
            style={{color:"#7a6960"}}
            >Contact Us</h1>
            <p className="mb-3 text-md text-gray-600 opacity-100">
            info@dnddevelopment.net
            +91-8979249912
            </p>
            
          </div>

          <div className="group relative cursor-pointer flex flex-col items-center justify-center transition-shadow hover:shadow-xl hover:shadow-black/30 p-6 mt-6 lg:mt-0 bg-white rounded-lg shadow-lg">
            <div className="mb-4 flex justify-center">
              <img className="w-28 text-neutral-900" src={hour} alt="free" />
            </div>
            <h1 className="font-dmserif lg:text-xl text-md font-semibold"
            style={{color:"#7a6960"}}
            >Hours of Operation</h1>
            <p className="mb-3 text-md text-gray-600 opacity-100">
            Monday-Saturday: 9:30am – 6:30pm
            Sunday: Closed
            </p>
           
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

export default ContactUs;
