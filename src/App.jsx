import React, { useState } from "react";
// import Login from "./pages/Login/Login";
// import From from "./components/Subscribe/Subscribe";
import Sidebar from "./components/SideBar/SideBar.jsx";
import PieChartDashboard from "./components/SideBar/Dash.jsx";
import DashBoard from "./components/SideBar/Dashboard.jsx";
import GaugeChartUsage from "./components/GaugeChart/GaugeUsage.jsx";
import LineChartUsage from "./components/LineChart/LineChartUsage.jsx";
import BarChartUsage from "./components/BarChart/BarChartUsage.jsx";
import TestimonialCard from "./components/Testimonial/Testimonial.jsx";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../src/features/sidebar/sidebarSlice.js";
import PrivacyCard from "./components/PrivacyCard/PrivacyCard.jsx";
const App = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  const TestimonialData = [
    {
      testimonialText: `Travel to the best outdoor experience on planet Earth. A vacation you will never forget!`,
      TestimonialName: "John Doe",
      TestimonialRating: "4.5",
    },
    {
      testimonialText: `Travel to the best outdoor experience on planet Earth. A vacation you will never forget!`,
      TestimonialName: "John Doe",
      TestimonialRating: "4.5",
    },
    {
      testimonialText: `Travel to the best outdoor experience on planet Earth. A vacation you will never forget!`,
      TestimonialName: "John Doe",
      TestimonialRating: "4.5",
    },
    {
      testimonialText: `Travel to the best outdoor experience on planet Earth. A vacation you will never forget!`,
      TestimonialName: "John Doe",
      TestimonialRating: "4.5",
    },
  ];
  return (
    <>
      <div className="">
        <Sidebar />
        <PieChartDashboard />
        <DashBoard />
        <GaugeChartUsage />
        <LineChartUsage />
        <BarChartUsage />

        <div className={`grid grid-cols-2 gap-4 md:grid-cols-3  ${isOpen ? "ml-64" : "ml-10"} transition-all duration-300 `}>
          {TestimonialData.map((item, index) => {
            return (
              <TestimonialCard
                key={index}
                testimonialText={item.testimonialText}
                TestimonialName={item.TestimonialName}
                TestimonialRating={item.TestimonialRating}
              />
            );
          })}
        </div>
        <PrivacyCard />
      </div>
    </>
  );
};

export default App;
