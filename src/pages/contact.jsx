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
	return (
		<div
			className="bg-[#0C1137] h-screen max-md:h-[200vh] max-md:py-20 w-full max-xl:w-screen flex max-md:flex-col justify-center items-center bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] p-4"
			id={id}
		>
			<div className="w-1/2 max-md:w-full h-full p-4">
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
				</form>
			</div>
			<div className="w-1/2 max-md:w-full h-full flex flex-col justify-center p-4">
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
						className="mySwiper w-[400px] h-[500px] max-sm:w-[300px] max-sm:h-[400px] max-md:w-[400px] max-md:h-[500px] max-lg:w-[300px] max-lg:h-[400px]"
					>
						<SwiperSlide className=" bg-blue-400 p-4 flex justify-center items-center">
							<div className="w-full h-auto">
								<p className="text-gray-900 mb-4">
									"Hiteshwar is a great developer with a zeal to excel in latest
									technologies, an amiable fellow and a quick learner"
								</p>
								<p className="text-gray-900">- Partik Malasi</p>
							</div>
						</SwiperSlide>
						<SwiperSlide className=" bg-blue-600 p-4 flex justify-center items-center">
							<div className="w-full h-auto">
								<p className="text-gray-300 mb-4">
									"Hiteshwar is a nice guy and he is always ready to help
									others. He never says no to help, and he is very kind and
									reliable"
								</p>
								<p className="text-gray-300">- Rohan Saini</p>
							</div>
						</SwiperSlide>
						<SwiperSlide className=" bg-blue-400 p-4 flex justify-center items-center">
							<div className="w-full h-auto">
								<p className="text-gray-900 mb-4">
									"Working with Hiteshwar has been a game-changer for our me. His attention to detail and creativity are unmatched.  I've never met a web developer who truly cares about their clients' success like he does."
								</p>
								<p className="text-gray-900">- Lakshay Dhall</p>
							</div>
						</SwiperSlide>
						<SwiperSlide className=" bg-blue-600 p-4 flex justify-center items-center">
							<div className="w-full h-auto">
								<p className="text-gray-300 mb-4">
									"He is an exemplary developer, always eager to learn new skills. He is very hardworking and always committed to continuous improvement. He is dedicated to his work and is a quick learner."
								</p>
								<p className="text-gray-300">- Anushka Chauhan</p>
							</div>
						</SwiperSlide>
						<SwiperSlide className=" bg-blue-400 p-4 flex justify-center items-center">
							<div className="w-full h-auto">
								<p className="text-gray-900 mb-4">
									"Hiteshwar is an amazing guy, always keen to learn"
								</p>
								<p className="text-gray-900">- Himanshu Rautela</p>
							</div>
						</SwiperSlide>
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
