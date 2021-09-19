import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ForecastTab.css';

const apiKey = 'plaats jouw unieke API key hier';

function ForecastTab({ coordinates }) {
  const [forecasts, setForecasts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${VOEG HIER LATITUDE TOE}&lon=${VOEG HIER LONGITUDE TOE}&exclude=minutely,current,hourly&appid=${JOUW API KEY}&lang=nl`);
        console.log(result.data);
      } catch (e) {
        console.error(e);
      }
    }
  }, [coordinates]);

  return (
    <div className="tab-wrapper">
      <article className="forecast-day">
        <p className="day-description">
          Maandag
        </p>

        <section className="forecast-weather">
            <span>
              12&deg; C
            </span>
          <span className="weather-description">
              Licht Bewolkt
            </span>
        </section>
      </article>

      <article className="forecast-day">
        <p className="day-description">
          Maandag
        </p>

        <section className="forecast-weather">
            <span>
              12&deg; C
            </span>
          <span className="weather-description">
              Licht Bewolkt
            </span>
        </section>
      </article>

      <article className="forecast-day">
        <p className="day-description">
          Maandag
        </p>

        <section className="forecast-weather">
            <span>
              12&deg; C
            </span>
          <span className="weather-description">
              Licht Bewolkt
            </span>
        </section>
      </article>

      <article className="forecast-day">
        <p className="day-description">
          Maandag
        </p>

        <section className="forecast-weather">
            <span>
              12&deg; C
            </span>
          <span className="weather-description">
              Licht Bewolkt
            </span>
        </section>
      </article>

      <article className="forecast-day">
        <p className="day-description">
          Maandag
        </p>

        <section className="forecast-weather">
            <span>
              12&deg; C
            </span>
          <span className="weather-description">
              Licht Bewolkt
            </span>
        </section>
      </article>
    </div>
  );
};

export default ForecastTab;
