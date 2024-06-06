import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./contact.css";

// import required modules
import { EffectCards, Autoplay } from "swiper/modules";
import emailjs from "@emailjs/browser";

const contact = ({ id }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_91y12l8",
        "contact_form",
        form.current,
        "MBxSBvTT0sv4FOyR_"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    emailjs.init("MBxSBvTT0sv4FOyR_");
  }, []);
  const height = "calc(100vh - 0rem)";
  return (
    <div
      style={{ height }}
      className="bg-[#0C1137] w-full flex justify-center items-center bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] p-4"
      id={id}
    >
      <div className="w-1/2 h-full p-4">
        <form
          className="w-full h-full flex flex-col justify-center"
          ref={form}
          onSubmit={sendEmail}
        >
          <h1 className="w-full h-auto text-5xl mb-6 text-gray-300 font-semibold">
            Contact Me
          </h1>
          <h1 className="w-full h-auto text-3xl mb-4 text-gray-300 font-semibold">
            Your Name
          </h1>
          <input
            type="text"
            className="w-full h-[3rem] border border-white rounded-lg text-gray-300 p-2 mb-4 bg-transparent focus:bg-transparent"
            name="from_name"
          />
          <h1 className="w-full h-auto text-3xl mb-4 text-gray-300 font-semibold">
            Your Email
          </h1>
          <input
            type="email"
            className="w-full h-[3rem] border border-white rounded-lg text-gray-300 p-2 mb-4 bg-transparent"
            name="user_email"
          />
          <h1 className="w-full h-auto text-3xl mb-4 text-gray-300 font-semibold">
            How can I help you?
          </h1>
          <textarea
            type="text"
            className="w-full h-[8rem] border border-white rounded-lg text-gray-300 p-2 mb-4 bg-transparent resize-none"
            name="message"
          />
          <button
            className="w-2/5 h-[3rem] rounded-xl p-2 bg-blue-600 hover:bg-blue-400 hover:cursor-pointer text-gray-300 shadow-2xl flex justify-center items-center mb-4"
            type="submit"
            value="Send"
          >
            Submit
          </button>
          {/* <h1 className="w-full h-auto text-3xl mb-4 text-white font-semibold text-center">
            My Socials
          </h1>
          <div className="w-full h-auto"></div> */}
        </form>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center p-4">
        <div className="w-full h-full flex justify-center items-center">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[EffectCards, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide className=" bg-blue-400">Tarsh</SwiperSlide>
            <SwiperSlide className=" bg-blue-600">Himanshu</SwiperSlide>
            <SwiperSlide className=" bg-blue-400">Partik</SwiperSlide>
            <SwiperSlide className=" bg-blue-600">Khushi</SwiperSlide>
            <SwiperSlide className=" bg-blue-400">Slide 5</SwiperSlide>
            <SwiperSlide className=" bg-blue-600">Slide 6</SwiperSlide>
            <SwiperSlide className=" bg-blue-400">Slide 7</SwiperSlide>
            <SwiperSlide className=" bg-blue-600">Slide 8</SwiperSlide>
            <SwiperSlide className=" bg-blue-400">Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default contact;
