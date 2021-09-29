import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TodayTab.css';

const apiKey = 'plaats jouw unieke API key hier';

function TodayTab({ coordinates }) {
  const [forecasts, setForecasts] = useState([]);
  const [error, toggleError] = useState(false);
  const [loading, toggleLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      toggleError(false);
      toggleLoading(true);

      try {
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=minutely,current,daily&appid=${apiKey}`);
        setForecasts([
          result.data.hourly[3],
          result.data.hourly[5],
          result.data.hourly[7],
        ]);
        console.log(result.data);
      } catch (e) {
        console.error(e);
        toggleError(true);
      }

      toggleLoading(false);
    }

    if (coordinates) {
      fetchData();
    }

  }, [coordinates]);

  return (
    <div className="tab-wrapper">
      <div className="chart">
        Hier komt de chart!
      </div>
      <div className="legend">
        <span>08:00 uur</span>
        <span>12:00 uur</span>
        <span>16:00 uur</span>
      </div>
    </div>
  );
}

export default TodayTab;
