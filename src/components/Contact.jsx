import React, { useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import CtaButton from "./CtaButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Contact = () => {
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

  return (
    <div className="text-[#7A6960]">
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

            <div className="flex justify-center m-3">
              <CtaButton name={"Send Message"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
