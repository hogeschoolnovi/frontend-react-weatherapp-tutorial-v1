import React, { useState, useEffect, useContext } from 'react';
import { TempContext } from '../../context/TempContext';
import './MetricSlider.css';

function MetricSlider() {
  const [checked, toggleChecked] = useState(false);
  const [firstMount, toggleFirstMount] = useState(false);
  const { toggleTemp } = useContext(TempContext);

  useEffect(() => {
    toggleFirstMount(true);
  }, []);

  useEffect(() => {
    if(firstMount) {
      toggleTemp();
    }
  }, [checked]);

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
          value={checked}
          onChange={() => toggleChecked(!checked)}
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
