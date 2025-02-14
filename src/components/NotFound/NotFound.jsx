import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import notFoundImage from "../../assets/logo.svg"; // You'll need to add this image

const NotFound = () => {
  const navigate = useNavigate();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Background with Gradient */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 bg-gradient-to-b from-white via-green-50/30 to-white`}
        />
        <motion.div
          className="absolute inset-0 bg-gray-900"
          initial={{ y: "-100%" }}
          animate={{ y: isDarkMode ? "0%" : "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* 404 Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-1/2 mx-auto"
          >
            <img
              src={notFoundImage}
              alt="Page Not Found"
              className="w-full h-auto"
            />
          </motion.div>

          {/* Error Message */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`text-4xl sm:text-5xl font-bold 
                ${isDarkMode ? "text-white" : "text-gray-900"}`}
            >
              Oops! Page Not Found
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className={`text-lg max-w-md mx-auto
                ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              The page you're looking for doesn't exist or has been moved.
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/")}
              className={`px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl 
                transition-all duration-300 transform hover:-translate-y-0.5
                ${
                  isDarkMode
                    ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                    : "bg-gradient-to-r from-[#00ffff] to-[#ffd700] text-gray-900"
                }`}
            >
              Return Home
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.history.back()}
              className={`px-8 py-3 rounded-full font-medium 
                transition-all duration-300 transform hover:-translate-y-0.5
                ${
                  isDarkMode
                    ? "border-2 border-gray-600 text-gray-300 hover:border-emerald-500 hover:text-emerald-400"
                    : "border-2 border-gray-300 text-gray-700 hover:border-[#00ffff] hover:text-[#00ffff]"
                }`}
            >
              Go Back
            </motion.button>
          </motion.div>

          {/* Additional Help */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className={isDarkMode ? "text-gray-400" : "text-gray-600"}
          >
            <p>
              Need help?{" "}
              <a
                href="#contact"
                className={`font-medium transition-colors duration-300
                  ${
                    isDarkMode
                      ? "text-emerald-400 hover:text-emerald-300"
                      : "text-[#00ffff] hover:text-[#40e0d0]"
                  }`}
              >
                Contact Support
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
