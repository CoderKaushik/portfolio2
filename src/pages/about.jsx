import React, { useEffect, useRef, useState } from "react";
import { GoNorthStar } from "react-icons/go";
import { SiLeetcode } from "react-icons/si";
import { FaGit, FaLinkedinIn } from "react-icons/fa";
import {
  FaGithub,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiCplusplus,
  SiC,
  SiExpress,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import classNames from "classnames";
import SpotifyImg from "../assets/spotify.svg";
import ME from "../assets/my-image.png";
import College from "../assets/iiitkota.png";
import School from "../assets/school.png";
import Signature from "../assets/signature.png";
import "./about.css";
// import Spotify from "../components/spotify";

const About = ({ id }) => {
  const height = "calc(100vh - 0rem)";
  const mainDivRef = useRef(null);
  const divRefs = useRef([]);
  const [visibleDivs, setVisibleDivs] = useState([]);
  const [mainInView, setMainInView] = useState(false);

  const icons = [
    { Component: FaGithub, name: "GitHub" },
    { Component: FaGit, name: "Git" },
    { Component: FaReact, name: "React" },
    { Component: SiMongodb, name: "MongoDB" },
    { Component: SiJavascript, name: "JavaScript" },
    { Component: SiCplusplus, name: "C++" },
    { Component: SiC, name: "C" },
    { Component: FaJava, name: "Java" },
    { Component: FaPython, name: "Python" },
    { Component: FaHtml5, name: "HTML" },
    { Component: FaCss3Alt, name: "CSS" },
    { Component: SiTailwindcss, name: "Tailwind CSS" },
    { Component: FaBootstrap, name: "Bootstrap" },
    { Component: FaNodeJs, name: "Node.js" },
    { Component: SiExpress, name: "Express" },
    { Component: SiVercel, name: "Vercel" },
  ];

  useEffect(() => {
    const handleObserver = (entries, observer) => {
      entries.forEach((entry) => {
        const index = entry.target.dataset.index;
        if (entry.isIntersecting) {
          setVisibleDivs((prev) => [...prev, index]);
        } else {
          setVisibleDivs((prev) => prev.filter((i) => i !== index));
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.1,
    });

    if (mainInView) {
      divRefs.current.forEach((div) => {
        if (div) {
          observer.observe(div);
        }
      });
    }

    return () => {
      observer.disconnect();
    };
  }, [mainInView]);

  useEffect(() => {
    const mainObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMainInView(true);
        } else {
          setMainInView(false);
        }
      },
      { threshold: 0.1 }
    );

    if (mainDivRef.current) {
      mainObserver.observe(mainDivRef.current);
    }

    return () => {
      if (mainDivRef.current) {
        mainObserver.unobserve(mainDivRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={mainDivRef}
      style={{ height }}
      className="bg-[#0C1137] w-full flex justify-center items-center p-4 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"
      id={id}
    >
      <div className="w-full h-full flex flex-col items-center">
        <div className="w-4/5 h-2/6 flex">
          <div className="w-1/3 h-full p-4">
            <div
              className={classNames(
                "w-full h-full rounded-xl shadow-xl bg-blue-900 p-4 transition-opacity duration-1000",
                {
                  "opacity-0": !visibleDivs.includes("0"),
                  "opacity-100": visibleDivs.includes("0"),
                }
              )}
              data-index="0"
              ref={(el) => (divRefs.current[0] = el)}
            >
              <div className="w-full h-full rounded-xl bg-blue-800 flex justify-center items-center">
                <img
                  src={ME}
                  className="w-[60%] border-2 border-blue-900 p-0 bg-blue-900 shadow-2xl rounded-full"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-2/3 h-full p-4 flex flex-col gap-6">
            <div className="w-full h-1/4 flex items-center">
              <div className="w-2/12 text-gray-300 text-4xl text-center flex justify-end">
                <GoNorthStar />
              </div>
              <h1 className="w-8/12 text-white font-semibold text-5xl text-center">
                SELF-SUMMARY
              </h1>
              <div className="w-2/12 text-gray-300 text-4xl text-center flex justify-start">
                <GoNorthStar />
              </div>
            </div>
            <div
              className={classNames(
                "w-full h-3/4 shadow-xl bg-blue-900 p-2 rounded-xl transition-opacity duration-1000 pl-4",
                {
                  "opacity-0": !visibleDivs.includes("1"),
                  "opacity-100": visibleDivs.includes("1"),
                }
              )}
              data-index="1"
              ref={(el) => (divRefs.current[1] = el)}
            >
              <div className="w-full text-2xl mb-2 mt-2 text-gray-100">
                <h1>Hiteshwar Kaushik</h1>
              </div>
              <div className="w-11/12 h-auto text-gray-200 text-[12px]">
                <h2>
                  I am a Computer Science pre final year student at IIIT Kota,
                  with a focus on web development, Data Structures, Algorithms
                  and Machine Learning. I have a diverse range of experience
                  having worked across various technologies and projects.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/5 h-1/3 flex">
          <div className="w-1/2 h-full p-4 flex justify-center items-center">
            <div
              className={classNames(
                "w-full h-full shadow-xl bg-blue-900 p-2 rounded-xl transition-opacity duration-1000 pl-6 flex flex-col justify-center",
                {
                  "opacity-0": !visibleDivs.includes("2"),
                  "opacity-100": visibleDivs.includes("2"),
                }
              )}
              data-index="2"
              ref={(el) => (divRefs.current[2] = el)}
            >
              <div className="w-full h-1/2 mb-4 flex mt-2">
                <div className="w-[30%] h-full flex justify-center items-start">
                  <a href="https://www.apsambala.edu.in" target="_blank">
                    {" "}
                    <img src={School} className="w-[4rem]" alt="" />
                  </a>
                </div>
                <div className="w-[70%] h-full">
                  <p className="text-gray-300 text-[12px]">2018-2021</p>
                  <h2 className="text-gray-100 text-md">10th and 12th</h2>
                  <p className="text-gray-300 text-[12px]">
                    Army Public School, Ambala Cantt.
                  </p>
                </div>
              </div>
              <div className="w-full h-1/2 flex">
                <div className="w-[30%] h-full flex justify-center items-start">
                  <a href="https://www.iiitkota.ac.in" target="_blank">
                    <img src={College} className="w-[3.5rem]" alt="" />
                  </a>
                </div>
                <div className="w-[70%] h-full">
                  <div className="w-full h-auto">
                    <p className="text-gray-300 text-[12px]">
                      2022-2026 (ongoing)
                    </p>
                    <h2 className="text-gray-100 text-md">
                      Bachelor's in Technology
                    </h2>
                    <p className="text-gray-300 text-[12px]">IIIT Kota</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full p-4 flex justify-center items-center">
            <div
              className={classNames(
                "w-full h-full rounded-xl shadow-xl bg-blue-900 transition-opacity duration-1000 flex flex-col gap-4 p-2",
                {
                  "opacity-0": !visibleDivs.includes("3"),
                  "opacity-100": visibleDivs.includes("3"),
                }
              )}
              data-index="3"
              ref={(el) => (divRefs.current[3] = el)}
            >
              <h1 className="w-full text-gray-300 text-md">Skills</h1>
              <div className="slider">
                <div className="slide-track">
                  {icons.map(({ Component, name }, i) => (
                    <div className="slide" key={i}>
                      <Component className="icon text-blue-400" />
                    </div>
                  ))}
                  {icons.map(({ Component, name }, i) => (
                    <div className="slide" key={i + icons.length}>
                      <Component className="icon text-blue-400" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="fast-slider">
                <div className="fast-slide-track">
                  {icons.map(({ Component, name }, i) => (
                    <div className="fast-slide" key={i}>
                      <Component className="fast-icon text-blue-300" />
                    </div>
                  ))}
                  {icons.map(({ Component, name }, i) => (
                    <div className="fast-slide" key={i + icons.length}>
                      <Component className="fast-icon text-blue-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/5 h-1/3 flex">
          <div className="w-1/4 p-4 h-full">
            <div
              className={classNames(
                "w-full h-full rounded-xl shadow-xl bg-blue-900 flex flex-col items-center p-2 transition-opacity duration-1000",
                {
                  "opacity-0": !visibleDivs.includes("4"),
                  "opacity-100": visibleDivs.includes("4"),
                }
              )}
              data-index="4"
              ref={(el) => (divRefs.current[4] = el)}
            >
              <div className="w-[90%] h-2/3 rounded-2xl shadow-2xl flex gap-4 justify-center items-center bg-blue-800">
                <div className="w-auto h-auto rounded-full text-gray-300 text-7xl shadow-2xl hover:cursor-pointer bg-blue-900">
                  <FaLinkedinIn className="p-4" />
                </div>
                <div className="w-auto h-auto rounded-full text-gray-300 text-7xl shadow-2xl hover:cursor-pointer bg-blue-900">
                  <FaGithub className="p-4" />
                </div>
              </div>
              <div className="w-[90%] h-1/3 flex flex-col justify-center items-start text-gray-300 text-md">
                <p className="text-[12px] text-gray-300">stay with me</p>
                <h1>My Profiles</h1>
              </div>
            </div>
          </div>
          <div className="w-2/4 p-4 h-full">
            <div
              className={classNames(
                "w-full h-full rounded-xl shadow-xl bg-blue-900 p-2 transition-opacity duration-1000 flex flex-col pl-4 hover:cursor-pointer",
                {
                  "opacity-0": !visibleDivs.includes("5"),
                  "opacity-100": visibleDivs.includes("5"),
                }
              )}
              data-index="5"
              ref={(el) => (divRefs.current[5] = el)}
            >
              <div className="w-full h-2/5"></div>
              <div className="w-full h-3/5 flex flex-col text-semibold text-gray-100 text-4xl gap-2">
                <h1>Let's</h1>
                <h1>
                  work <span className="text-red-400">together.</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="w-1/4 p-4 h-full">
            <div
              className={classNames(
                "w-full h-full rounded-xl shadow-xl bg-blue-900 p-2 transition-opacity duration-1000 flex flex-col",
                {
                  "opacity-0": !visibleDivs.includes("6"),
                  "opacity-100": visibleDivs.includes("6"),
                }
              )}
              data-index="6"
              ref={(el) => (divRefs.current[6] = el)}
            >
              <div className="w-full h-[70%] flex justify-center items-center">
                <img src={Signature} alt="" />
              </div>
              <div className="w-full h-[30%] text-gray-200 flex flex-col p-2">
                <p className="text-[12px] text-gray-300">More about me</p>
                <h1 className="text-gray-300 text-md">My credentials</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
