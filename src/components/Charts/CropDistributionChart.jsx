import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const CropDistributionChart = ({ data, title = "Crop Distribution" }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  return (
    <div className="p-2 bg-white rounded-lg shadow-md">
      <Pie options={options} data={data} />
    </div>
  );
};

export default CropDistributionChart;
