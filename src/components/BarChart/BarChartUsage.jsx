import CustomBarChart from "./BarChart.jsx";

const data = [
  { sensor: "Temperature", value: 65 },
  { sensor: "Humidity", value: 80 },
  { sensor: "Soil Moisture", value: 55 },
  { sensor: "Light Intensity", value: 90 },
  { sensor: "CO2 Levels", value: 70 },
];

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <CustomBarChart
        data={data}
        title="Sensor Readings Comparison"
        barColor="#E63946"
      />
    </div>
  );
};

export default Dashboard;
