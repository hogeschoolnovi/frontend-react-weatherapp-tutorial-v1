import React, { useContext } from 'react';
import { TempContext } from '../../context/TempContext';
import kelvinToCelsius from '../../helpers/kelvinToCelsius';
import iconMapper from '../../helpers/iconMapper';
import './WeatherDetail.css';

function WeatherDetail({ description, temp, type }) {

  return (
    <section className="day-part">
      <span className="icon-wrapper">
        {iconMapper(type)}
      </span>
      <p className="description">{description}</p>
      <p>{kelvinToCelsius(temp)}</p>
    </section>
  );
}

export default WeatherDetail;
