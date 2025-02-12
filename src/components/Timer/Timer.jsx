import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

const Timer = ({
  initialTime = 0,
  direction = "down",
  format = "hh:mm:ss",
  autoStart = true,
  onComplete,
  onTick,
  className = "",
  showControls = false,
  size = "medium",
  theme = "light",
}) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(autoStart);

  // Format time based on the specified format
  const formatTime = useCallback(
    (timeInSeconds) => {
      const hours = Math.floor(timeInSeconds / 3600);
      const minutes = Math.floor((timeInSeconds % 3600) / 60);
      const seconds = timeInSeconds % 60;

      const pad = (num) => num.toString().padStart(2, "0");

      switch (format) {
        case "hh:mm:ss":
          return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
        case "mm:ss":
          return `${pad(minutes)}:${pad(seconds)}`;
        case "ss":
          return `${pad(seconds)}`;
        case "compact":
          return hours > 0
            ? `${hours}h ${minutes}m ${seconds}s`
            : minutes > 0
            ? `${minutes}m ${seconds}s`
            : `${seconds}s`;
        default:
          return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
      }
    },
    [format]
  );

  // Timer logic
  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          const newTime = direction === "down" ? prevTime - 1 : prevTime + 1;

          // Call onTick callback if provided
          if (onTick) onTick(newTime);

          // Handle timer completion
          if (direction === "down" && newTime <= 0) {
            clearInterval(interval);
            setIsRunning(false);
            if (onComplete) onComplete();
            return 0;
          }

          return newTime;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, direction, onComplete, onTick]);

  // Timer controls
  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const reset = () => {
    setTime(initialTime);
    setIsRunning(false);
  };

  // Style classes based on props
  const sizeClasses = {
    small: "text-lg",
    medium: "text-2xl",
    large: "text-4xl",
  };

  const themeClasses = {
    light: "text-gray-800",
    dark: "text-white",
    primary: "text-blue-600",
    success: "text-green-600",
    danger: "text-red-600",
  };

  const buttonClasses = "px-3 py-1 rounded-md mx-1 text-sm font-medium";
  const controlButtonStyles = {
    start: "bg-green-500 text-white hover:bg-green-600",
    pause: "bg-yellow-500 text-white hover:bg-yellow-600",
    reset: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <div className={`timer-container ${className}`}>
      <div
        className={`timer-display ${sizeClasses[size]} ${themeClasses[theme]}`}
      >
        {formatTime(time)}
      </div>

      {showControls && (
        <div className="timer-controls mt-2 flex justify-center">
          {!isRunning && (
            <button
              onClick={start}
              className={`${buttonClasses} ${controlButtonStyles.start}`}
            >
              Start
            </button>
          )}
          {isRunning && (
            <button
              onClick={pause}
              className={`${buttonClasses} ${controlButtonStyles.pause}`}
            >
              Pause
            </button>
          )}
          <button
            onClick={reset}
            className={`${buttonClasses} ${controlButtonStyles.reset}`}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

Timer.propTypes = {
  initialTime: PropTypes.number,
  direction: PropTypes.oneOf(["up", "down"]),
  format: PropTypes.oneOf(["hh:mm:ss", "mm:ss", "ss", "compact"]),
  autoStart: PropTypes.bool,
  onComplete: PropTypes.func,
  onTick: PropTypes.func,
  className: PropTypes.string,
  showControls: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  theme: PropTypes.oneOf(["light", "dark", "primary", "success", "danger"]),
};

export default Timer;
