import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Clock = ({
  format24 = false,
  showSeconds = true,
  showDate = false,
  size = "medium",
  theme = "light",
  className = "",
}) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    if (!format24) {
      hours = hours % 12;
      hours = hours ? hours : 12; // Convert 0 to 12
    }

    hours = hours.toString().padStart(2, "0");

    return `${hours}:${minutes}${showSeconds ? `:${seconds}` : ""} ${
      !format24 ? ampm : ""
    }`;
  };

  const formatDate = () => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return time.toLocaleDateString("en-US", options);
  };

  const sizeClasses = {
    small: "text-lg",
    medium: "text-2xl",
    large: "text-4xl",
  };

  const themeClasses = {
    light: "text-gray-800",
    dark: "text-white",
    primary: "text-blue-600",
    success: "text-green-600",
    danger: "text-red-600",
  };

  return (
    <div className={`clock-container ${className} ${sizeClasses[size]} ${themeClasses[theme]} font-mono `}>
      <div
        className={`clock-time ${sizeClasses[size]} ${themeClasses[theme]} font-mono`}
      >
        {formatTime()}
      </div>
      {showDate && (
        <div
          className={`clock-date text-sm ${themeClasses[theme]} mt-1 opacity-75`}
        >
          {formatDate()}
        </div>
      )}
    </div>
  );
};

Clock.propTypes = {
  format24: PropTypes.bool,
  showSeconds: PropTypes.bool,
  showDate: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  theme: PropTypes.oneOf(["light", "dark", "primary", "success", "danger"]),
  className: PropTypes.string,
};

export default Clock;
