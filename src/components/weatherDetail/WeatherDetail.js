import React from 'react';
import './WeatherDetail.css';
import kelvinToCelsius from '../../helpers/kelvinToCelsius';

function WeatherDetail({ description, temp, type }) {
  return (
    <section className="day-part">
      <span className="icon-wrapper">
        *Icoontje van het weer*
      </span>
      <p className="description">Zonnig</p>
      <p>{kelvinToCelsius(temp)}</p>
    </section>
  );
}

export default WeatherDetail;
