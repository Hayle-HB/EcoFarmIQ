import LineChart from "./LineChart";

const data = [
  { time: "Jan", value: 30 },
  { time: "Feb", value: 50 },
  { time: "Mar", value: 80 },
  { time: "Apr", value: 45 },
  { time: "May", value: 95 },
  { time: "Jun", value: 70 },
  { time: "Aug", value: 90 },
  { time: "Sep", value: 60 },
  { time: "Oct", value: 75 },
  { time: "Nov", value: 85 },
  { time: "Dec", value: 65 },
];

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <LineChart
        data={data}
        title="Monthly Sensor Trends"
        lineColor="#6de748"
      />
    </div>
  );
};

export default Dashboard;
