import React, { useState } from "react";
import "./App.css";

const App = () => {
  
    const [temperature,setTemperature] = useState(0)
    const [temperatureColor, setTemperatureColor] = useState('cold')
    const handleTemperatureIncrease = () =>{
      if(temperature === 35)
      {
        return;
      }
      const newTemperature = temperature+1;
      setTemperature(newTemperature)
      if(temperature >= 18)
      {
        setTemperatureColor('hot')
      }
    }

    const handleTemperatureDecrease = () =>{

      if(temperature === 0)
      {
        return;
      }
      const newTemperature = temperature-1;
      setTemperature(newTemperature)
      if(temperature < 20)
      {
        setTemperatureColor('cold')
      }

    }

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperature}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={handleTemperatureIncrease}>+</button>
        <button onClick={handleTemperatureDecrease}>-</button>
      </div>
    </div>
  );
};

export default App;
