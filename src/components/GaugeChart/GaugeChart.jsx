import React, { useState } from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import { motion } from "framer-motion";

const GaugeChart = ({ value, min = 0, max = 100, unit = "%" }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Ensure value is within the valid range
  const normalizedValue = Math.min(Math.max(value, min), max);
  const percentValue = ((normalizedValue - min) / (max - min)) * 100;

  // Determine colors (Normal vs. Hover)
  const normalColor = getGaugeColor(percentValue);
  const hoverColor = getHoverColor(normalColor);

  // Chart data (Dynamically change color on hover)
  const data = [
    { value: percentValue, fill: isHovered ? hoverColor : normalColor },
  ];

  return (
    <div className="flex flex-col items-center relative">
      <RadialBarChart
        width={250}
        height={200}
        cx="50%"
        cy="100%"
        innerRadius="90%"
        outerRadius="140%"
        barSize={20}
        startAngle={180}
        endAngle={0}
        data={data}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />

        {/* Hoverable colored section */}
        <RadialBar
          dataKey="value"
          angleAxisId={0}
          background
          className="cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </RadialBarChart>

      {/* Tooltip appears when hovering over the colored section */}
      {isHovered && (
        <motion.div
          className="absolute top-10 text-center text-lg font-semibold bg-white p-2 rounded-xl shadow-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p>
            The read value is {normalizedValue}
            {unit}
          </p>
        </motion.div>
      )}

      {/* Static Value Display */}
      <p className="text-xl font-semibold mt-[-20px]">
        {normalizedValue}
        {unit}
      </p>
      <p className="text-gray-600">Sensor Reading</p>
    </div>
  );
};

// Function to determine normal color
const getGaugeColor = (value) => {
  if (value < 30) return "#00C49F"; // Green (Good)
  if (value < 70) return "#FFBB28"; // Yellow (Moderate)
  return "#FF4D4D"; // Red (Critical)
};

// Function to determine hover color
const getHoverColor = (color) => {
  // if (color === "#00C49F") return "#009970"; // Darker Green
  // if (color === "#FFBB28") return "#E89F00"; // Darker Yellow
  // return "#D93232"; // Darker Red

  if (color === "#00C49F") return "green"; // Darker Green
  if (color === "#FFBB28") return "yellow"; // Darker Yellow
  return "red"; // Darker Red
};

export default GaugeChart;
