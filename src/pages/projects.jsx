import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Tilt } from "react-tilt";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./projects.css";

// import required modules
// import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";
import { Keyboard, Pagination, Autoplay } from "swiper/modules";
// import { Keyboard, Pagination, Navigation } from "swiper/modules";

//project imports
import Tomato from "../assets/tomatowebsite.png";
import Sociopedia from "../assets/Sociopedia.jpg";
import LameTube from "../assets/youtubeClone.png";
import Portfolio from "../assets/portfolio.jpg";
import Portfolio1 from "../assets/portfolio1.png";

const Projects = ({ id }) => {
	const height = "calc(100vh)";
	const width = "calc(100vw - 15rem)";

	const defaultOptions = {
		reverse: false, // reverse the tilt direction
		max: 25, // max tilt rotation (degrees)
		perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
		scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
		speed: 2000, // Speed of the enter/exit transition
		transition: true, // Set a transition on enter/exit.
		axis: null, // What axis should be disabled. Can be X or Y.
		reset: true, // If the tilt effect has to be reset on exit.
		easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
	};

	return (
		<div
			className="bg-[#0C1137] h-screen w-[calc(100vw_-_15rem)] max-md:py-12 max-xl:w-screen bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] p-4"
			id={id}
		>
			<div className="w-full h-[8rem] hidden max-md:block">
				<div className="w-full h-full flex justify-center items-center">
					<h1 className="text-white text-4xl">P R O J E C T S</h1>
				</div>
			</div>
			<div className="w-full h-full flex justify-center items-center">
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
					// navigation={true}
					// modules={[Keyboard, Pagination, Navigation, Autoplay]}
					modules={[Keyboard, Pagination, Autoplay]}
					// modules={[Keyboard, Pagination, Navigation]}
					className="mySwiper w-full h-full mb-12"
				>
					<SwiperSlide className="bg-transparent flex flex-col">
						<div className="w-[80%] max-md:w-full h-2/3 max-sm:h-1/2 flex justify-center items-center">
							<Tilt
								options={defaultOptions}
								className="w-full h-full p-8 max-md:p-0 transition-all ease-in-out duration-75 hover:cursor-pointer"
							>
								<a href="https://delivery-weld-one.vercel.app/" target="_blank">
									<img
										src={Tomato}
										className="w-full h-full object-scale-down"
										alt=""
									/>
								</a>
							</Tilt>
						</div>
						<div className="w-[80%] max-md:w-full h-1/3 max-sm:h-1/2 px-2 pt-8 pl-16 max-xl:pl-0 max-xl:pt-0 flex flex-col justify-start items-center">
							<h1 className="text-2xl text-gray-300 font-semibold mb-4 text-center">
								Tomato - Food Delivery Website (MERN)
							</h1>
							<p className="text-[14px] font-thin w-[80%] max-md:w-full text-center">
								This meticulously crafted MERN project showcases robust user
								authentication, driven by JWT, an intricately designed
								Express.js backend API, and seamless integration with Stripe for
								secure payment processing, epitomizing advanced web development
								prowess.
							</p>
						</div>
					</SwiperSlide>

					<SwiperSlide className="bg-transparent flex flex-col">
						<div className="w-[80%] max-md:w-full h-2/3 max-sm:h-1/2 flex justify-center items-center">
							<Tilt
								options={defaultOptions}
								className="w-full h-full max-md:p-0 p-8 transition-all ease-in-out duration-75 hover:cursor-pointer"
							>
								<a
									href="https://github.com/CoderKaushik/SocialMediaApp/tree/main/SM%20Project"
									target="_blank"
								>
									<img
										src={Sociopedia}
										className="w-full h-full object-scale-down"
										alt=""
									/>
								</a>
							</Tilt>
						</div>
						<div className="w-[80%] max-md:w-full h-1/3 max-sm:h-1/2 px-2 pt-8 pl-16 max-xl:pl-0 max-xl:pt-0 flex flex-col justify-start items-center">
							<h1 className="text-2xl text-gray-300 font-semibold mb-4  text-center">
								Sociopedia - A social media application (MERN + Redux)
							</h1>
							<p className="text-[14px] font-thin w-[80%] max-md:w-full text-center">
								Created a MERN stack social media app with RESTful API design
								for seamless front-end to back-end communication. Implemented
								secure user authentication, used MongoDB for flexible data
								modeling, and employed serverless architecture on Vercel for
								scalability and cost-effectiveness. Used Redux toolkit for state
								management.
							</p>
						</div>
					</SwiperSlide>

					<SwiperSlide className="bg-transparent flex flex-col">
						<div className="w-[80%] max-md:w-full h-2/3 max-sm:h-1/2 flex justify-center items-center">
							<Tilt
								options={defaultOptions}
								className="w-full h-full max-md:p-0 p-8 transition-all ease-in-out duration-75 hover:cursor-pointer"
							>
								<a
									href="https://youtube-clone-taupe-pi.vercel.app/"
									target="_blank"
								>
									<img
										src={LameTube}
										className="w-full h-full object-scale-down"
										alt=""
									/>
								</a>
							</Tilt>
						</div>
						<div className="w-[80%] max-md:w-full h-1/3 max-sm:h-1/2 px-2 pt-8 pl-16 max-xl:pl-0 max-xl:pt-0 flex flex-col justify-start items-center">
							<h1 className="text-2xl text-gray-300 font-semibold mb-4 text-center">
								LameTube - YouTube UI Clone (React)
							</h1>
							<p className="text-[14px] font-thin w-[80%] max-md:w-full text-center">
								Created a UI Clone of YouTube with React. Integrated a
								signin/signup page, home page with random videos and a player
								page. Also added dark and light mode themes.
							</p>
						</div>
					</SwiperSlide>

					<SwiperSlide className="bg-transparent flex flex-col">
						<div className="w-[80%] max-md:w-full h-2/3 max-sm:h-1/2 flex justify-center items-center">
							<Tilt
								options={defaultOptions}
								className="w-full h-full max-md:p-0 p-8 transition-all ease-in-out duration-75 hover:cursor-pointer"
							>
								<a href="https://www.hiteshwarkaushik.tech" target="_blank">
									<img
										src={Portfolio}
										className="w-full h-full object-scale-down"
										alt=""
									/>
								</a>
							</Tilt>
						</div>
						<div className="w-[80%] max-md:w-full h-1/3 max-sm:h-1/2 px-2 pt-8 pl-16 max-xl:pl-0 max-xl:pt-0 flex flex-col justify-start items-center">
							<h1 className="text-2xl text-gray-300 font-semibold mb-4 text-center">
								Personal Portfolio Website (React)
							</h1>
							<p className="text-[14px] font-thin w-[80%] max-md:w-full text-center">
								Created a React + Tailwind based personal portfolio website.
								Self designed the UI, and integrated Observer API, React smooth
								scroll, Swiper animation, Vanta js for interactive 3d background
								and Email js for contact me form. Made the webstie responsive
								across all screen sizes.
							</p>
						</div>
					</SwiperSlide>

					<SwiperSlide className="bg-transparent flex flex-col">
						<div className="w-[80%] max-md:w-full h-2/3 max-sm:h-1/2 flex justify-center items-center">
							<Tilt
								options={defaultOptions}
								className="w-full h-full max-md:p-0 p-8 transition-all ease-in-out duration-75 hover:cursor-pointer"
							>
								<a href="https://portfolio-rosy-kappa-18.vercel.app/" target="_blank">
									<img
										src={Portfolio1}
										className="w-full h-full object-scale-down"
										alt=""
									/>
								</a>
							</Tilt>
						</div>
						<div className="w-[80%] max-md:w-full h-1/3 max-sm:h-1/2 px-2 pt-8 pl-16 max-xl:pl-0 max-xl:pt-0 flex flex-col justify-start items-center">
							<h1 className="text-2xl text-gray-300 font-semibold mb-4 text-center">
								Previous Portfolio Website (HTML+CSS)
							</h1>
							<p className="text-[14px] font-thin w-[80%] max-md:w-full text-center">
								Designed and developed a portfolio website using React, hosted
								on Vercel with a custom domain. Integrated Framer Motion for
								smooth animations, creating an engaging and visually appealing
								user experience. Highlighted skills, projects, and achievements,
								showcasing a dynamic and interactive presentation of
								professional information.
							</p>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default Projects;
