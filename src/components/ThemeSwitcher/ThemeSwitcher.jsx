import React from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../features/theme/themeSlice";
import { Sun, Moon } from "lucide-react";

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => dispatch(toggleTheme())}
      className={`
        fixed z-1000
        bottom-4 right-4 lg:bottom-auto lg:top-6
        p-2 
        rounded-full 
        ${isDarkMode ? "bg-gray-800" : "bg-white"} 
        shadow-lg hover:shadow-xl 
        transition-all duration-300
        border border-gray-200 dark:border-gray-700
        backdrop-blur-sm
        ${isDarkMode ? "bg-opacity-80" : "bg-opacity-90"}
      `}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDarkMode ? 360 : 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center"
      >
        {isDarkMode ? (
          <Moon className="w-6 h-6 text-yellow-400" />
        ) : (
          <Sun className="w-6 h-6 text-yellow-500" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeSwitcher;
