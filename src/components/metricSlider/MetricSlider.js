import React from 'react';
import './MetricSlider.css';

function MetricSlider() {
  return (
    <div className="weather-container-extention">
      Weergeven in

      <p className="switch-label">
        C &deg;
      </p>

      <span className="switch-wrapper">
        <input
          type="checkbox"
          className="switch"
          id="metric-system"
        />

        <label
          htmlFor="metric-system"
          className="switch-btn"
        />
      </span>

      <p className="switch-label">
        &deg; F
      </p>
    </div>
  );
}

export default MetricSlider;
