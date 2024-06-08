import React, { useEffect, useRef } from "react";
import "./experience.css";
import Network from "../assets/network.png";
import GDSC from "../assets/gdsc.png";
import College from "../assets/iiitkota.png";

const Experience = ({ id }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          containerRef.current.classList.add("animate");
        } else {
          containerRef.current.classList.remove("animate");
        }
      },
      { threshold: 0.3 } // Adjust the threshold as needed
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      className="bg-[#0C1137] w-full h-[100vh] min-md:h-[200vh]"
      id={id}
      ref={containerRef}
    >
      <div className="w-full h-full p-4 flex flex-col md:flex-row bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="w-full h-full md:w-1/2 min-md:h-1/2 flex flex-col items-center justify-around">
          <div className="w-10/12 max-xl:w-[95%] h-[45%] shadow-2xl box1 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-900 flex flex-col items-center">
            <div className="relative pt-2 pl-2 w-full h-auto flex gap-4 items-center mb-4">
              <img
                src={Network}
                className="w-[15%] max-xl:w-[18%] p-2 rounded-full bg-blue-800 shadow-2xl"
                alt="Network"
              />
              <h1 className="text-gray-300 text-xl font-semibold">
                IIITians Network
              </h1>
            </div>
            <div className="w-10/12 h-4/6 border border-white"></div>
            <button className="absolute bottom-4 right-4 p-2 bg-blue-600 hover:cursor-pointer hover:bg-blue-500 rounded-xl shadow-xl text-gray-100">
              Link Tree
            </button>
          </div>
          <div className="w-10/12 max-xl:w-[95%] h-[45%] shadow-2xl box2 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-900">
            <div className="relative pt-2 pl-2 w-full h-auto flex gap-4 items-center">
              <img
                src={College}
                className="w-[15%] p-2 max-xl:w-[18%] rounded-full bg-blue-800 shadow-2xl"
                alt="College"
              />
              <h1 className="text-gray-300 text-xl font-semibold max-xl:hidden">
                Training and Placement Cell - <br /> IIIT Kota
              </h1>
              <h1 className="text-gray-300 text-xl font-semibold hidden max-xl:block">
                TnP Cell -IIIT Kota
              </h1>
            </div>
            <button className="absolute bottom-4 right-4 p-2 bg-blue-600 hover:cursor-pointer hover:bg-blue-500 rounded-xl shadow-xl text-gray-100">
              Website
            </button>
          </div>
        </div>
        <div className="w-full h-full min-md:h-1/2 md:w-1/2 flex flex-col items-center justify-around">
          <div className="w-10/12 max-xl:w-[95%] h-[45%] shadow-2xl box3 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-900">
            <div className="relative pt-2 pl-2 w-full h-auto flex gap-4 items-center">
              <img
                src={GDSC}
                className="w-[15%] p-2 rounded-full max-xl:w-[18%] bg-blue-800 shadow-2xl"
                alt="GDSC"
              />
              <h1 className="text-gray-300 text-xl font-semibold">
                Google DSC IIIT Kota
              </h1>
            </div>
          </div>
          <div className="w-10/12 max-xl:w-[95%] h-[45%] shadow-2xl box4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-900">
            <div className="relative pt-2 pl-2 w-full h-auto flex gap-4 items-center">
              <img
                src={College}
                className="w-[15%] p-2 rounded-full max-xl:w-[18%] bg-blue-800 shadow-2xl"
                alt="College"
              />
              <h1 className="text-gray-300 text-xl font-semibold">
                Web Team - IIIT Kota
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
