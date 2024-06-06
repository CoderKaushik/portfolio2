import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./projects.css";

// import required modules
// import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";
import { Keyboard, Pagination, Navigation } from "swiper/modules";

const Projects = ({ id }) => {
  const height = "calc(100vh)";
  const width = "calc(100vw - 15rem)";

  return (
    <div
      style={{ height, width }}
      className="bg-[#0C1137] flex justify-center items-center bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] p-4"
      id={id}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        navigation={true}
        // modules={[Keyboard, Pagination, Navigation, Autoplay]}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide className="text-white bg-transparent">
          <div className="w-1/2 h-full border border-white bg-white"></div>
          <div className="w-1/2 h-full border border-white"></div>
        </SwiperSlide>
        <SwiperSlide className="text-white bg-transparent">Slide 2</SwiperSlide>
        <SwiperSlide className="text-white bg-transparent">Slide 3</SwiperSlide>
        <SwiperSlide className="text-white bg-transparent">Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
