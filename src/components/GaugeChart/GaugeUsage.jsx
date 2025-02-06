import GaugeChart from "./GaugeChart";

const GaugeChartUsage = () => {
  const sensorValue = 89; 
  // read the data from the backend and 
  // compare with the actual data of the
  // crop needed by for example, if the 
  // crop needed 30oC temprature and it it reads 
  // 15oC then it will be 50%

  return (
    <div className="flex justify-center">
      <GaugeChart value={sensorValue} min={0} max={100} unit="%" />
    </div>
  );
};


export default GaugeChartUsage;
