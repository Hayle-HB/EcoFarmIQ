import React from "react";

const Spinner = ({ size = "medium", color = "primary" }) => {
  // Size variants
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-8 h-8",
    large: "w-12 h-12",
  };

  // Color variants
  const colorClasses = {
    primary: "border-blue-500",
    secondary: "border-gray-500",
    white: "border-white",
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`
          ${sizeClasses[size]}
          ${colorClasses[color]}
          animate-spin
          rounded-full
          border-2
          border-solid
          border-t-transparent
        `}
      />
    </div>
  );
};

export default Spinner;
