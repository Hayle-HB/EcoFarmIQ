import React from "react";
import { toggleSidebar } from "../../features/sidebar/sidebarSlice.js";
import { useSelector, useDispatch } from "react-redux";
import TopNav from "../../components/SideBar/TopNav.jsx";
import plant1 from "../../assets/images/agri/plant1.jpg";
import plant2 from "../../assets/images/agri/plant2.jpg";
import svg from "../../assets/svg/svg1.svg";
import Button from "../../components/Button/Button.jsx";
import "./D.css";

import TypingEffect from "../../components/TypingEffect/TypingEffect.jsx";

import { motion } from "framer-motion";

const text = "Welcome To EcoFarmIQ!";

const DashBoard = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        isOpen ? "ml-64" : "ml-26"
      } mt-20 h-lvh flex flex-col gap-4 items-center transform-3d transition-all duration-300`}
    >
      <div className="">
        <h1 className="text-4xl font-bold text-green-800">
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>
      </div>
      <div
        className={`grid grid-cols-[2fr_1fr] gap-4 transition-all duration-500`}
      >
        <div
          // background red using style
          style={{ backgroundColor: "rgba(201, 250, 205, 255);" }}
          className={`dash bg-green-200 h-70 ${
            isOpen ? "w-190" : "w-220"
          } rounded-2xl  flex justify-between p-7`}
        >
          {/* <div className="text">
            <motion.h6
              className="text-1xl pb-6 font-bold text-gray-800 text-align-center max-w-90 mt-10 "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              The future of farming is smart, sustainable, and data-driven.
              EcoFarmIQ is leading the way.🌱
            </motion.h6>

            <Button variant="outline" size="sm" fullWidth>
              Get Started
            </Button>
          </div> */}

          <div
            id="main-animated-text"
            className="text text-xl pb-6 font-bold text-gray-800 text-center max-w-[90%] mt-10 w-90"
          >
            <TypingEffect text="The future of farming is smart, sustainable, and data-driven. EcoFarmIQ is leading the way.🌱" />
          </div>

          <img
            src={svg}
            className="w70 rounded-2xl hover:scale-108 cursor-zoom-in transition-all duration-300"
          ></img>
        </div>
        <div className={`bg-green-200 h-70 rounded-2xl `}></div>
      </div>
    </div>
  );
};

export default DashBoard;
