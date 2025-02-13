import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import About from "./About/About";
import Features from "./Features/Features";
import Gallery from "./Gallery/Gallery";
import BlogPreview from "./BlogPreview/BlogPreview";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";
import Team from "./Team/Team";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import NotFound from "../NotFound/NotFound";

const MainContent = () => (
  <>
    <Header />
    <About />
    <Features />
    <Gallery />
    <BlogPreview />
    <Contact />
    <Team />
    <Footer />
  </>
);

const LandingApp = () => {
  return (
    <Router>
      <div className="relative min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default LandingApp;
