import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const CustomBarChart = ({
  data,
  title = "Sensor Comparison",
  barColor = "#4F46E5",
}) => {
  const [hoveredBar, setHoveredBar] = useState(null);

  return (
    <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-lg">
      {/* Chart Title */}
      <h2 className="text-xl font-semibold text-center mb-4">{title}</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" className="opacity-40" />
          <XAxis dataKey="sensor" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip cursor={{ fill: "rgba(0, 0, 0, 0.1)" }} />

          {/* Bars with Hover Effects */}
          <Bar
            dataKey="value"
            fill={barColor}
            radius={[8, 8, 0, 0]}
            barSize={40}
            onMouseOver={(e) => setHoveredBar(e.payload)}
            onMouseOut={() => setHoveredBar(null)}
          />
        </BarChart>
      </ResponsiveContainer>

      {/* Animated Tooltip for Hovered Bar */}
      {hoveredBar && (
        <motion.div
          className="absolute bg-gray-900 text-white px-3 py-2 rounded-md shadow-md text-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          style={{ left: `${hoveredBar.cx}px`, top: `${hoveredBar.cy - 40}px` }}
        >
          <p>
            <strong>{hoveredBar.sensor}</strong>: {hoveredBar.value}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default CustomBarChart;
