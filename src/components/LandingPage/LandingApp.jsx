import React from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import About from "./About/About";
import Features from "./Features/Features";
import Gallery from "./Gallery/Gallery";
const LandingPage = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Header />
      <About/>
      <Features/>
      <Gallery/>
      {/* Other sections */}
    </div>
  );
};

export default LandingPage;
