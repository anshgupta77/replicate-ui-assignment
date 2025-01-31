import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const rows = 15; // Total rows
  const cols = 15; // Total columns

  const [waveIndex, setWaveIndex] = useState(0);

  useEffect(() => {
    // Animate the red wave
    const interval = setInterval(() => {
      setWaveIndex((prevIndex) => (prevIndex + 1) % cols);
    }, 200); // Speed of the wave

    return () => clearInterval(interval);
  }, [cols]);

  return (
    <div className="grid-container">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {Array.from({ length: cols }).map((_, colIndex) => (
            <div
              key={colIndex}
              className={`grid-cell ${
                colIndex === waveIndex ? "wave-red" : ""
              } ${rowIndex === colIndex ? "strip-blue" : ""}`}
            >
              {rowIndex * cols + colIndex + 1}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;
