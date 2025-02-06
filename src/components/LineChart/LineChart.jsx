import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const CustomLineChart = ({
  data,
  title = "Trend Over Time",
  lineColor = "#4F46E5",
}) => {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  return (
    <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-lg">
      {/* Chart Title */}
      <h2 className="text-xl font-semibold text-center mb-4">{title}</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" className="opacity-40" />
          <XAxis dataKey="time" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />

          {/* Line Chart with Dynamic Hover Effect */}
          <Line
            type="monotone"
            dataKey="value"
            stroke={lineColor}
            strokeWidth={3}
            dot={{
              r: hoveredPoint ? 6 : 4,
              onMouseOver: (e) => setHoveredPoint(e.payload),
              onMouseOut: () => setHoveredPoint(null),
            }}
            activeDot={{
              r: 8,
              fill: lineColor,
              stroke: "#fff",
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Hover Tooltip with Motion Effects */}
      {hoveredPoint && (
        <motion.div
          className="absolute bg-gray-900 text-white px-3 py-2 rounded-md shadow-md text-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          style={{
            left: `${hoveredPoint.cx}px`,
            top: `${hoveredPoint.cy - 30}px`,
          }}
        >
          <p>
            <strong>{hoveredPoint.time}</strong>: {hoveredPoint.value}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default CustomLineChart;
