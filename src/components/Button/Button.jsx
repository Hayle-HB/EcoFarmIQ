import React from "react";
import { motion } from "framer-motion";

const buttonVariants = {
  primary: "bg-green-600 text-white hover:bg-green-700",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  outline:
    "border border-green-600 text-green-600 hover:bg-green-600 hover:text-white",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  onClick,
}) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      disabled={disabled}
      onClick={onClick}
      className={`relative overflow-hidden rounded-full transition-all duration-300 ease-in-out 
        ${buttonVariants[variant]} ${sizes[size]} 
        ${fullWidth ? "w-full" : "w-auto"} 
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      <span className="relative z-10">{children}</span>
      {/* Ripple effect */}
      <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition duration-300 rounded-full"></span>
    </motion.button>
  );
};

export default Button;
