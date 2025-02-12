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
      className={`
        ${isOpen ? "ml-64" : "ml-20"}
        sm:${isOpen ? "ml-20" : "ml-16"}
        md:${isOpen ? "ml-64" : "ml-20"}
        lg:${isOpen ? "ml-64" : "ml-20"}
        mt-16 
        min-h-screen 
        flex 
        flex-col 
        gap-3
        sm:gap-4 
        md:gap-5 
        lg:gap-6 
        transform-3d 
        transition-all 
        duration-300
        p-3
        sm:p-4
        md:p-5
        lg:p-6
      `}
    >
      {/* Welcome Section - Adjusted spacing */}
      <div className="w-full px-2 sm:px-3 md:px-4 lg:px-5">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-green-800">
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

      {/* Main Grid Section - Improved spacing */}
      <div
        className={`
        grid 
        grid-cols-1 
        sm:grid-cols-1 
        md:grid-cols-[2fr_1fr] 
        lg:grid-cols-[2fr_1fr] 
        gap-3
        sm:gap-4 
        md:gap-5 
        lg:gap-6
        w-full
        px-2
        sm:px-3
        md:px-4
        lg:px-5
        transition-all 
        duration-500
      `}
      >
        {/* Left Card - Adjusted padding and image size */}
        <div
          style={{ backgroundColor: "rgba(201, 250, 205, 255)" }}
          className={`
            dash 
            bg-green-200 
            rounded-xl
            sm:rounded-2xl 
            flex 
            flex-col 
            sm:flex-col 
            md:flex-row 
            lg:flex-row 
            justify-between 
            p-3
            sm:p-4
            md:p-6
            lg:p-7 
            relative
            h-auto
            md:h-[350px]
            lg:h-[400px]
          `}
        >
          <div className="flex flex-col justify-center w-full md:w-[45%] lg:w-[45%] mb-4 md:mb-0">
            <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-4 sm:mb-6">
              <TypingEffect text="The future of farming is smart, sustainable, and data-driven. EcoFarmIQ is leading the way.🌱" />
            </div>

            <div className="mt-3 sm:mt-4">
              <Button variant="outline" size="sm" className="w-32 sm:w-40">
                Get Started
              </Button>
            </div>
          </div>

          <div className="flex-shrink-0 w-full md:w-[50%] lg:w-[50%] h-[200px] sm:h-[250px] md:h-full">
            <img
              src={svg}
              alt="Farming illustration"
              className="w-full h-full object-contain md:object-cover rounded-xl sm:rounded-2xl hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>

        {/* Right Card - Adjusted height */}
        <div
          className={`
          bg-green-200 
          rounded-xl
          sm:rounded-2xl 
          flex 
          items-center 
          justify-center
          h-[200px]
          sm:h-[250px]
          md:h-[350px]
          lg:h-[400px]
          p-3
          sm:p-4
        `}
        >
          <Clock
            showDate={true}
            size="large"
            theme="primary"
            className="text-center scale-75 sm:scale-90 md:scale-100"
          />
        </div>
      </div>

      {/* Charts Section - Improved responsiveness */}
      <div className="w-full px-2 sm:px-3 md:px-4 lg:px-5 flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {/* Weather Chart */}
          <div className="bg-green-50 p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-green-800 mb-3 sm:mb-4">
              Weather Trends
            </h2>
            <div className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
              <WeatherChart data={weatherData} />
            </div>
          </div>

          {/* Crop Distribution */}
          <div className="bg-green-50 p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-green-800 mb-3 sm:mb-4">
              Crop Distribution
            </h2>
            <div className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
              <CropDistributionChart data={cropData} />
            </div>
          </div>
        </div>

        {/* Farm Statistics - Improved grid spacing */}
        <div className="bg-green-50 p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-green-800 mb-3 sm:mb-4">
            Farm Statistics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              { label: "Total Area", value: "500 acres", icon: "🌾" },
              { label: "Active Crops", value: "5 types", icon: "🌱" },
              { label: "Soil Health", value: "Good", icon: "🌿" },
              { label: "Water Usage", value: "85%", icon: "💧" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white p-3 sm:p-4 rounded-lg shadow-sm"
              >
                <div className="text-xl sm:text-2xl md:text-3xl mb-2">
                  {stat.icon}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {stat.label}
                </div>
                <div className="text-sm sm:text-base md:text-lg font-semibold text-green-700">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
