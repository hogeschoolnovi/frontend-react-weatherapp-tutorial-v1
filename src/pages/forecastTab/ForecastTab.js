import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ForecastTab.css';

const apiKey = 'plaats jouw unieke API key hier';

function ForecastTab({ coordinates }) {
  const [forecasts, setForecasts] = useState([]);

  function createDateString(timestamp) {
    const day = new Date(timestamp * 1000);

    return day.toLocaleDateString('nl-NL', { weekday: 'long' });
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates?.lon}&exclude=minutely,current,hourly&appid=${apiKey}&lang=nl`);
        console.log(result.data);
        setForecasts(result.data.daily.slice(1, 6));
      } catch (e) {
        console.error(e);
      }
    }
    if (coordinates) {
      fetchData();
    }
  }, [coordinates]);

  return (
    <div className="tab-wrapper">
      {forecasts.map((day) => {
        return (
          <article className="forecast-day">
            <p className="day-description">
              {createDateString(day.dt)}
            </p>

            <section className="forecast-weather">
            <span>
              {day.temp.day}
            </span>
              <span className="weather-description">
              {day.weather[0].description}
            </span>
            </section>
          </article>
        );
      })}
    </div>
  );
}

export default ForecastTab;
