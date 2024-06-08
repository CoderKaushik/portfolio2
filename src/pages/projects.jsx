import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Tilt } from 'react-tilt'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./projects.css";

// import required modules
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";
// import { Keyboard, Pagination, Navigation } from "swiper/modules";

//project imports
import Tomato from "../assets/tomatowebsite.png";
import LameTube from "../assets/youtubeClone.png"
import Portfolio1 from "../assets/portfolio1.png"

const Projects = ({ id }) => {
	const height = "calc(100vh)";
	const width = "calc(100vw - 15rem)";

	const defaultOptions = {
		reverse:        false,  // reverse the tilt direction
		max:            25,     // max tilt rotation (degrees)
		perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
		scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
		speed:          2000,   // Speed of the enter/exit transition
		transition:     true,   // Set a transition on enter/exit.
		axis:           null,   // What axis should be disabled. Can be X or Y.
		reset:          true,    // If the tilt effect has to be reset on exit.
		easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
	}

	return (
		<div
			className="bg-[#0C1137] h-screen w-[calc(100vw_-_15rem)] max-xl:w-screen flex justify-center items-center bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] p-4"
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
				autoplay={{
				  delay: 5000,
				  disableOnInteraction: false,
				}}
				navigation={true}
				modules={[Keyboard, Pagination, Navigation, Autoplay]}
				// modules={[Keyboard, Pagination, Navigation]}
				className="mySwiper w-full h-full"
			>
				<SwiperSlide className="bg-transparent flex flex-col">
					<div className="w-[80%] h-2/3 flex justify-center items-center">
						<Tilt options={defaultOptions} className="w-full h-full p-8 transition-all ease-in-out duration-75 hover:cursor-pointer">
							<a href="https://delivery-weld-one.vercel.app/" target="_blank"><img
								src={Tomato}
								className="w-full h-full object-scale-down"
								alt=""
							/></a>
						</Tilt>
					</div>
					<div className="w-[80%] h-1/3 px-2 pt-8 pl-16 max-xl:pl-0 max-xl:pt-0 flex flex-col justify-start items-center">
						<h1 className="text-2xl text-gray-300 font-semibold mb-4">
							Tomato - Food Delivery Website (MERN)
						</h1>
						<p className="text-[14px] font-thin w-[80%] text-center">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
							dolores maxime doloremque quas soluta totam recusandae repellendus
							dicta molestias laudantium delectus vero, perferendis nostrum id,
							officiis commodi ea! Alias cupiditate voluptas a magni, ut sint,
							ipsum animi delectus amet accusantium pariatur cumque dolore dolor
						</p>
					</div>
				</SwiperSlide>

				<SwiperSlide className="bg-transparent flex flex-col">
					<div className="w-[80%] h-2/3 flex justify-center items-center">
						<Tilt options={defaultOptions} className="w-full h-full p-8 transition-all ease-in-out duration-75 hover:cursor-pointer">
							<a href="https://delivery-weld-one.vercel.app/" target="_blank"><img
								src={Tomato}
								className="w-full h-full object-scale-down"
								alt=""
							/></a>
						</Tilt>
					</div>
					<div className="w-[80%] h-1/3 px-2 pt-8 pl-16 max-xl:pl-0 max-xl:pt-0 flex flex-col justify-start items-center">
						<h1 className="text-2xl text-gray-300 font-semibold mb-4">
							Tomato - Food Delivery Website (MERN)
						</h1>
						<p className="text-[14px] font-thin w-[80%] text-center">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
							dolores maxime doloremque quas soluta totam recusandae repellendus
							dicta molestias laudantium delectus vero, perferendis nostrum id,
							officiis commodi ea! Alias cupiditate voluptas a magni, ut sint,
							ipsum animi delectus amet accusantium pariatur cumque dolore dolor
						</p>
					</div>
				</SwiperSlide>

				<SwiperSlide className="bg-transparent flex flex-col">
					<div className="w-[80%] h-2/3 flex justify-center items-center">
						<Tilt options={defaultOptions} className="w-full h-full p-8 transition-all ease-in-out duration-75 hover:cursor-pointer">
							<a href="https://delivery-weld-one.vercel.app/" target="_blank"><img
								src={Tomato}
								className="w-full h-full object-scale-down"
								alt=""
							/></a>
						</Tilt>
					</div>
					<div className="w-[80%] h-1/3 px-2 pt-8 pl-16 max-xl:pl-0 max-xl:pt-0 flex flex-col justify-start items-center">
						<h1 className="text-2xl text-gray-300 font-semibold mb-4">
							Tomato - Food Delivery Website (MERN)
						</h1>
						<p className="text-[14px] font-thin w-[80%] text-center">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
							dolores maxime doloremque quas soluta totam recusandae repellendus
							dicta molestias laudantium delectus vero, perferendis nostrum id,
							officiis commodi ea! Alias cupiditate voluptas a magni, ut sint,
							ipsum animi delectus amet accusantium pariatur cumque dolore dolor
						</p>
					</div>
				</SwiperSlide>

				<SwiperSlide className="bg-transparent flex flex-col">
					<div className="w-[80%] h-2/3 flex justify-center items-center">
						<Tilt options={defaultOptions} className="w-full h-full p-8 transition-all ease-in-out duration-75 hover:cursor-pointer">
							<a href="https://delivery-weld-one.vercel.app/" target="_blank"><img
								src={Tomato}
								className="w-full h-full object-scale-down"
								alt=""
							/></a>
						</Tilt>
					</div>
					<div className="w-[80%] h-1/3 px-2 pt-8 pl-16 max-xl:pl-0 max-xl:pt-0 flex flex-col justify-start items-center">
						<h1 className="text-2xl text-gray-300 font-semibold mb-4">
							Tomato - Food Delivery Website (MERN)
						</h1>
						<p className="text-[14px] font-thin w-[80%] text-center">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
							dolores maxime doloremque quas soluta totam recusandae repellendus
							dicta molestias laudantium delectus vero, perferendis nostrum id,
							officiis commodi ea! Alias cupiditate voluptas a magni, ut sint,
							ipsum animi delectus amet accusantium pariatur cumque dolore dolor
						</p>
					</div>
				</SwiperSlide>

			</Swiper>
		</div>
	);
};

export default Projects;
