import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ForecastTab.css';

const apiKey = 'plaats jouw unieke API key hier';

function ForecastTab({ coordinates }) {
  const [forecasts, setForecasts] = useState([]);
  const [error, toggleError] = useState(false);
  const [loading, toggleLoading] = useState(false);

  function createDateString(timestamp) {
    const day = new Date(timestamp * 1000);

    return day.toLocaleDateString('nl-NL', { weekday: 'long' });
  }

  useEffect(() => {
    async function fetchData() {
      toggleError(false);

      try {
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates?.lon}&exclude=minutely,current,hourly&appid=${apiKey}&lang=nl`);
        console.log(result.data);
        setForecasts(result.data.daily.slice(1, 6));
      } catch (e) {
        console.error(e);
        toggleError(true);
      }
    }

    if (coordinates) {
      fetchData();
    }
  }, [coordinates]);

  return (
    <div className="tab-wrapper">
      {error && <span>Er is iets misgegaan met het ophalen van de data</span>}
      {forecasts.length === 0 && !error &&
        <span className="no-forecast">
          Zoek eerst een locatie om het weer voor deze week te bekijken
        </span>
      }
      {forecasts.map((day) => {
        return (
          <article className="forecast-day" key={day.dt}>
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
