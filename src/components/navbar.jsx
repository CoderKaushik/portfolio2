import React, { useState, useEffect } from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  return (
    <div
      className="w-full h-[7rem] flex bg-[#232C79] shadow-2xl p-2"
      id="navbar"
    >
      <div className="w-[85%] h-full"></div>
      <div className="w-[15%] h-full flex items-center mr-4">
        <div className="w-full h-full flex justify-center items-center gap-6 p-2">
          <a
            href="mailto:hiteshwarkaushik@gmail.com"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Mail Me"
            data-tooltip-place="top"
          >
            <MdOutlineAlternateEmail
              className="hover:cursor-pointer text-[#01E2CD] hover:-mt-6 hover:text-red-400 transition-all delay-100"
              style={{ width: "50px", height: "50px" }}
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
              style={{ width: "50px", height: "50px" }}
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
              style={{ width: "50px", height: "50px" }}
              alt="LinkTree"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
