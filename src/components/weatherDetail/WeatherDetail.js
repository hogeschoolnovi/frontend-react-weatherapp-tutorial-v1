import React from 'react';
import './WeatherDetail.css';

function WeatherDetail() {
  return (
    <section className="day-part">
      <span className="icon-wrapper">
        *Icoontje van het weer*
      </span>
      <p className="description">Zonnig</p>
      <p>13&deg; C</p>
    </section>
  );
}

export default WeatherDetail;
