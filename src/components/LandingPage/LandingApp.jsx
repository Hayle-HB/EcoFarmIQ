import React from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import About from "./About/About";
import Features from "./Features/Features";
import Gallery from "./Gallery/Gallery";
import BlogPreview from "./BlogPreview/BlogPreview";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";
import Team from "./Team/Team";

const LandingApp = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Header />
      <About />
      <Features />
      <Gallery />
      <BlogPreview />
      <Contact />
      <Team />
      <Footer />
    </div>
  );
};

export default LandingApp;
