import React from 'react';
import './WeatherDetail.css';
import kelvinToCelsius from '../../helpers/kelvinToCelsius';
import iconMapper from '../../helpers/iconMapper';

function WeatherDetail({ description, temp, type }) {
  return (
    <section className="day-part">
      <span className="icon-wrapper">
        *Icoontje van het weer*
      </span>
      <p className="description">{description}</p>
      <p>{kelvinToCelsius(temp)}</p>
    </section>
  );
}

export default WeatherDetail;
