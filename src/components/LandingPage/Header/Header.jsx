import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import smartAgriImage from "../../../assets/images/agri/agri3.jpg";
import { FaTelegram, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const navigate = useNavigate();

  return (
    <div
      id="header"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20"
    >
      {/* Social Media Icons */}
      <div className="absolute top-24 left-8 z-20">
        <div className="relative group">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer ${
              isDarkMode ? "bg-gray-800" : "bg-green-600"
            }`}
          >
            <FaGithub className="text-white text-2xl" />
          </motion.div>

          <div className="absolute left-0 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-black/80 rounded-lg p-4 w-max">
              <p className="text-white text-sm mb-3">Contact the Developer</p>
              <div className="flex flex-col space-y-3">
                <motion.a
                  href="https://t.me/Hayle_HB"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center space-x-2 text-white hover:text-blue-400"
                >
                  <FaTelegram className="text-xl" />
                  <span className="text-sm">Telegram</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/haylemeskel-haylemariam-b9212b298/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center space-x-2 text-white hover:text-blue-600"
                >
                  <FaLinkedin className="text-xl" />
                  <span className="text-sm">LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://instagram.com/Hayle_HB"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center space-x-2 text-white hover:text-pink-500"
                >
                  <FaInstagram className="text-xl" />
                  <span className="text-sm">Instagram</span>
                </motion.a>
                <motion.a
                  href="https://github.com/Hayle-HB"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center space-x-2 text-white hover:text-gray-400"
                >
                  <FaGithub className="text-xl" />
                  <span className="text-sm">GitHub</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background with Gradient */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/80`}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-800/90"
          initial={{ x: "-100%" }}
          animate={{ x: isDarkMode ? "0%" : "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
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
            className={`absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
              isDarkMode ? "bg-gray-400" : "bg-white"
            }`}
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
                className={`block mt-2 ${
                  isDarkMode ? "text-green-400" : "text-green-400"
                }`}
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
              <button
                onClick={() => navigate("/login")}
                className={`w-full sm:w-auto px-6 sm:px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  isDarkMode
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "bg-green-500 hover:bg-green-600 text-white"
                }`}
              >
                Get Started
              </button>
              <button
                className={`w-full sm:w-auto border-2 px-6 sm:px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isDarkMode
                    ? "border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900"
                    : "border-white text-white hover:bg-white hover:text-green-800"
                }`}
              >
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
              className="relative group"
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
                className={`absolute -top-4 sm:-top-8 -right-4 sm:-right-8 w-16 sm:w-24 h-16 sm:h-24 rounded-full opacity-20 ${
                  isDarkMode ? "bg-green-400" : "bg-green-400"
                }`}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className={`absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-20 sm:w-32 h-20 sm:h-32 rounded-full opacity-20 ${
                  isDarkMode ? "bg-green-500" : "bg-green-500"
                }`}
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
        <div
          className={`w-6 sm:w-8 h-10 sm:h-12 border-2 rounded-full flex justify-center ${
            isDarkMode ? "border-gray-300" : "border-white"
          }`}
        >
          <motion.div
            className={`w-1 h-2 sm:h-3 rounded-full mt-2 ${
              isDarkMode ? "bg-gray-300" : "bg-white"
            }`}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
