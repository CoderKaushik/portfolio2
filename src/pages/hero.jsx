import React, { useEffect } from "react";
import WAVES from "vanta/dist/vanta.globe.min";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { Tooltip } from "react-tooltip";
import { TypeAnimation } from "react-type-animation";
import { Squash as Hamburger } from "hamburger-react";
import "./hero.css";

const Hero = ({ id }) => {
    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 200px)");

        let vantaEffect;
        const handleMediaChange = (e) => {
            if (e.matches) {
                // Screen width is greater than 480px
                vantaEffect = WAVES({
                    el: "#herodiv",
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    backgroundColor: 0x0c1137,
                });
            } else {
                // Screen width is less than or equal to 480px
                if (vantaEffect) vantaEffect.destroy();
            }
        };

        // Initial check
        handleMediaChange(mediaQuery);

        // Add listener
        mediaQuery.addListener(handleMediaChange);

        return () => {
            // Cleanup listener and Vanta effect
            mediaQuery.removeListener(handleMediaChange);
            if (vantaEffect) vantaEffect.destroy();
        };
    }, []);

    return (
        <div
            className="w-full h-screen hover:cursor-crosshair max-md:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] max-md:bg-[size:14px_24px]"
            id={id}
        >
            <div className="h-full w-full overflow-clip bg-[#0C1137] md:bg-[#0C1137]" id="herodiv">
                <div className="w-full h-[7rem] max-xl:h-[5rem] flex">
                    <div className="w-[25%] h-full flex items-center">
                        <div className="w-full h-full flex justify-start ml-6 items-center gap-6 p-2">
                            <a
                                href="mailto:hiteshwarkaushik@gmail.com"
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content="Mail Me"
                                data-tooltip-place="top"
                            >
                                <MdOutlineAlternateEmail
                                    className="hover:cursor-pointer text-[#01E2CD] hover:-mt-6 hover:text-red-400 transition-all delay-100"
                                    style={{ width: "45px", height: "45px" }}
                                    alt="Mail"
                                />
                            </a>
                            <Tooltip id="my-tooltip" />
                            <a
                                href="https://drive.google.com/file/d/1v0_EVsDMn6gTcWsmof2zEE6Tbcj1ikIk/view"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content="My Resume"
                                data-tooltip-place="top"
                            >
                                <IoDocumentText
                                    className="hover:cursor-pointer text-[#01E2CD] hover:-mt-6 hover:text-red-400 transition-all delay-100"
                                    style={{ width: "45px", height: "45px" }}
                                    alt="Resume"
                                />
                            </a>
                            <a
                                href="https://link-tree-ivory-three.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content="My Link Tree"
                                data-tooltip-place="top"
                            >
                                <CgWebsite
                                    className="hover:cursor-pointer text-[#01E2CD] hover:-mt-6 hover:text-red-400 transition-all delay-100"
                                    style={{ width: "45px", height: "45px" }}
                                    alt="LinkTree"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="w-[75%] h-full p-1 flex items-center justify-end">
                        <div className="w-[4rem] h-[4rem] hidden max-xl:block text-[#01E2CD] p-2 rounded-full shadow-2xl bg-blue-900 hover:cursor-pointer">
                            <Hamburger id="hamburger shadow-2xl" />
                        </div>
                    </div>
                </div>
                <div className="w-full h-[100%] flex">
                    <div className="w-[60%] max-xl:w-[75%] max-md:w-[100%] h-[100%]  p-6">
                        <div className="w-full h-auto mb-10  max-xl:mb-6">
                            <h1 className="text-blue-300 text-7xl max-sm:text-6xl">Hi,</h1>
                        </div>
                        <div className="w-full h-auto mb-6">
                            <h1 className="text-blue-300 text-6xl max-sm:text-5xl">
                                I'm{" "}
                                <span className="text-red-400 max-sm:text-gray-100 font-semibold">Hiteshwar</span>,
                            </h1>
                        </div>
                        <div className="w-full h-auto  mb-6">
                            <h1 className="text-blue-300 font-semibold text-6xl max-sm:text-5xl">
                                Web Developer
                            </h1>
                        </div>
                        <div className="w-full h-auto mb-6 text-gray-300 text-[10px] max-sm:text-[8px]">
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    "Well versed in ",
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    "Well versed in Full Stack Development",
                                    1000,
                                    "Well versed in Data Structures & Algorithms",
                                    1000,
                                    "A ",
                                    1000,
                                    "A Pre Final Year at IIIT Kota",
                                    1000,
                                    "A Team Player",
                                    1000,
                                ]}
                                wrapper="span"
                                speed={40}
                                style={{
                                    fontSize: "2em",
                                    display: "inline-block",
                                }}
                                repeat={Infinity}
                            />
                        </div>
                        <div className="w-full h-auto flex gap-6 max-sm:gap-4">
                            <div className="lower-divs w-1/2 max-sm:w-1/2 max-md:w-2/5 h-[12rem] rounded-xl bg-gradient-to-r from-blue-500 to-blue-800 hover:bg-gradient-to-r hover:cursor-pointer flex justify-center items-center">
                                <p className="text-gray-200 text-4xl max-sm:text-2xl">Connect with me</p>
                            </div>
                            <div className="lower-divs w-1/2 max-sm:w-1/2 max-md:w-2/5 h-[12rem] rounded-xl bg-gradient-to-r from-blue-500 to-blue-800 hover:bg-gradient-to-r hover:cursor-pointer flex justify-center items-center">
                            <p className="text-gray-200 text-4xl max-sm:text-2xl">More about me</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[40%] max-xl:w-[25%] max-md:w-[0%] h-[100%]"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
