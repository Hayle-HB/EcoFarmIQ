import React from "react";
import { toggleSidebar } from "../../features/sidebar/sidebarSlice.js";
import { useSelector, useDispatch } from "react-redux";
import TopNav from "../../components/SideBar/TopNav.jsx";
import plant1 from "../../assets/images/agri/plant1.jpg";
import plant2 from "../../assets/images/agri/plant2.jpg";
import svg from "../../assets/svg/svg1.svg";
import Button from "../../components/Button/Button.jsx";
import "./D.css";
import ClockExample from "../../examples/ClockExample.jsx";
import TypingEffect from "../../components/TypingEffect/TypingEffect.jsx";
import { motion } from "framer-motion";
import Clock from "../../components/Clock/Clock.jsx";
import CommentExample from "../../examples/CommentExample.jsx";
import WeatherChart from "../../components/Charts/WeatherChart";
import CropDistributionChart from "../../components/Charts/CropDistributionChart";

const text = "Welcome To EcoFarmIQ!";

const DashBoard = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  // Updated demo data for weather chart with more variation and intersections
  const weatherData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Temperature (°C)",
        data: [18, 25, 22, 28, 24, 30],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Humidity (%)",
        data: [75, 55, 65, 45, 68, 50],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  // Demo data for crop distribution
  const cropData = {
    labels: ["Wheat", "Corn", "Soybeans", "Rice", "Cotton"],
    datasets: [
      {
        data: [30, 25, 20, 15, 10],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

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
          style={{ backgroundColor: "rgba(201, 250, 205, 255)" }}
          className={`dash bg-green-200 h-70 ${
            isOpen ? "w-190" : "w-220"
          } rounded-2xl flex justify-between p-7 relative`}
        >
          <div className="flex flex-col justify-center max-w-[45%]">
            <div
              id="main-animated-text"
              className="text-xl font-bold text-gray-800 mb-6"
              style={{ maxWidth: "100%" }}
            >
              <TypingEffect text="The future of farming is smart, sustainable, and data-driven. EcoFarmIQ is leading the way.🌱" />
            </div>

            <div className="mt-4">
              <Button variant="outline" size="sm" className="w-40">
                Get Started
              </Button>
            </div>
          </div>

          <div className="flex-shrink-0">
            <img
              src={svg}
              alt="Farming illustration"
              className="w-70 rounded-2xl hover:scale-108 cursor-zoom-in transition-all duration-300"
            />
          </div>
        </div>
        <div
          className={`bg-green-200 h-70 rounded-2xl flex items-center justify-center`}
        >
          <Clock
            showDate={true}
            size="large"
            theme="primary"
            className="text-center"
          />
        </div>
      </div>

      {/* Weather and Crop Statistics Section */}
      <div className="px-6 w-full flex flex-col gap-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Weather Chart */}
          <div className="bg-green-50 p-4 rounded-xl">
            <h2 className="text-xl font-semibold text-green-800 mb-4">
              Weather Trends
            </h2>
            <div className="h-[300px]">
              <WeatherChart data={weatherData} />
            </div>
          </div>

          {/* Crop Distribution */}
          <div className="bg-green-50 p-4 rounded-xl">
            <h2 className="text-xl font-semibold text-green-800 mb-4">
              Crop Distribution
            </h2>
            <div className="h-[300px]">
              <CropDistributionChart data={cropData} />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-green-50 p-4 rounded-xl md:col-span-2">
            <h2 className="text-xl font-semibold text-green-800 mb-4">
              Farm Statistics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Total Area", value: "500 acres", icon: "🌾" },
                { label: "Active Crops", value: "5 types", icon: "🌱" },
                { label: "Soil Health", value: "Good", icon: "🌿" },
                { label: "Water Usage", value: "85%", icon: "💧" },
              ].map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                  <div className="text-lg font-semibold text-green-700">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
