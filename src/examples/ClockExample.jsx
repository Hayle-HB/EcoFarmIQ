import Clock from "../components/Clock/Clock";

const ClockExample = () => {
  return (
    <div className="space-y-8">
      {/* Basic clock */}
      <Clock />

      {/* 24-hour format with date */}
      <Clock format24={true} showDate={true} size="large" theme="primary" />

      {/* Minimal clock without seconds */}
      <Clock showSeconds={false} size="small" theme="dark" />
    </div>
  );
};

export default ClockExample;
