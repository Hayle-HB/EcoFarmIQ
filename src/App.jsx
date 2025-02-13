import React, { useState } from "react";
// import Login from "./pages/Login/Login";
// import From from "./components/Subscribe/Subscribe";
import Sidebar from "./components/SideBar/SideBar.jsx";
import DashBoards from "./pages/DashBord/DashBoard.jsx";
import LandingPage from "./components/LandingPage/LandingApp.jsx";
const App = () => {
   
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
        {/* <Sidebar />
        <DashBoards /> */}
        <LandingPage />
      </div>
    </>
  );
};

export default App;
