import Timer from "../components/Timer/Timer";

const TimerExample = () => {
  return (
    <div className="space-y-8">
      {/* Basic countdown timer */}
      <Timer
        initialTime={60}
        direction="down"
        onComplete={() => alert("Timer finished!")}
      />

      {/* Stopwatch with controls */}
      <Timer
        direction="up"
        showControls={true}
        format="compact"
        size="large"
        theme="primary"
      />

      {/* Custom styled countdown */}
      <Timer
        initialTime={3600}
        format="hh:mm:ss"
        size="large"
        theme="danger"
        showControls={true}
        onTick={(time) => console.log(`Time remaining: ${time}`)}
      />
    </div>
  );
};

export default TimerExample;
