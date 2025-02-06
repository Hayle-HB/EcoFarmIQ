import React from "react";
import CustomPieChart from "../PieChart/PieChart";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../../features/sidebar/sidebarSlice.js";
const pieData = [
  { name: "Salina", value: 23, color: "#FF4D4D" },
  { name: "Spirulina", value: 25, color: "#FFD700" },
  { name: "Chlorella", value: 21, color: "#28A745" },
  { name: "NEw", value: 21, color: "#321200" },
];

const PieChartDashboard = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();
  return (
    <div
      className={`p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${
        isOpen ? "ml-64" : "ml-20"
      }  transition-all duration-300 mt-10`}
    >
      {/* Quality Pie Chart */}
      <CustomPieChart
        data={pieData}
        dataKey="value"
        nameKey="name"
        colors={pieData.map((entry) => entry.color)}
      />
      <CustomPieChart
        data={pieData}
        dataKey="value"
        nameKey="name"
        colors={pieData.map((entry) => entry.color)}
      />
      <CustomPieChart
        data={pieData}
        dataKey="value"
        nameKey="name"
        colors={pieData.map((entry) => entry.color)}
      />
    </div>
  );
};

export default PieChartDashboard;
