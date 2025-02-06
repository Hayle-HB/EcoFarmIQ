import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const CustomPieChart = ({
  data,
  dataKey,
  nameKey,
  width = "100%",
  height = 200,
  colors = [],
}) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <PieChart>
        <Pie
          data={data}
          dataKey={dataKey}
          nameKey={nameKey}
          cx="50%"
          cy="50%"
          outerRadius={60}
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index] || "#8884d8"} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
