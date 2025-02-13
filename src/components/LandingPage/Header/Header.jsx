import React from "react";
import { motion } from "framer-motion";
import smartAgriImage from "../../../assets/images/agri/agri3.jpg";

const Header = () => {
  return (
    <div id="header" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background with Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/80" />
      </div>

      {/* Animated Particles Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
      >
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 1000),
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content - Text */}
          <motion.div
            className="w-full lg:w-1/2 text-white space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Transform Your
              <motion.span
                className="block text-green-400 mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Agricultural Future
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-200 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Revolutionize your farming with smart technology and sustainable
              practices. Join the future of agriculture today.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-green-800 transition-all duration-300">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Image */}
          <motion.div
            className="w-full lg:w-1/2 mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="relative"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={smartAgriImage}
                alt="Smart Farming"
                className="w-full h-auto max-w-lg mx-auto rounded-2xl shadow-2xl"
              />

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 w-16 sm:w-24 h-16 sm:h-24 bg-green-400 rounded-full opacity-20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-20 sm:w-32 h-20 sm:h-32 bg-green-500 rounded-full opacity-20"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 sm:w-8 h-10 sm:h-12 border-2 border-white rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
