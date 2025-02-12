// // components/PieChart.js
// import React from "react";
// import ReactECharts from "echarts-for-react";

// const PieChart = ({
//   title = "Pie Chart",
//   subtext = "",
//   data = [],
//   colors = [],
//   legendPosition = "left",
//   radius = "50%",
//   height = "400px",
// }) => {
//   const option = {
//     title: {
//       text: title,
//       subtext: subtext,
//       left: "center",
//       textStyle: {
//         color: "#fff", // Ensures compatibility with dark mode
//       },
//     },
//     tooltip: {
//       trigger: "item",
//     },
//     legend: {
//       orient: "vertical",
//       left: legendPosition,
//       textStyle: {
//         color: "#fff", // Dark mode support
//       },
//     },
//     series: [
//       {
//         name: title,
//         type: "pie",
//         radius: radius,
//         data: data,
//         emphasis: {
//           itemStyle: {
//             shadowBlur: 10,
//             shadowOffsetX: 0,
//             shadowColor: "rgba(0, 0, 0, 0.5)",
//           },
//         },
//       },
//     ],
//     color: colors.length > 0 ? colors : undefined,
//   };

//   return (
//     <div className="w-full max-w-lg p-4 bg-white /*dark:bg-gray-900 shadow-md*/  rounded-2xl">
//       <ReactECharts option={option} style={{ height: height }} />
//     </div>
//   );
// };

// export default PieChart;
