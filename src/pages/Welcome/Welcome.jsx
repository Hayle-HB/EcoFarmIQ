import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Welcome = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome! 👋</h1>
          <p className="text-gray-600 mb-8">
            You have successfully logged in to your account.
          </p>
          <button onClick={() => handleLogout()}>Logout</button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/dashboard")}
            className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-500 transition-colors duration-300"
          >
            Go to Dashboard
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Welcome;
