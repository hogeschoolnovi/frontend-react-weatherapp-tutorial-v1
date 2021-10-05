import React, { createContext, useState } from 'react';
import kelvinToFahrenheit from '../helpers/kelvinToFahrenheit';
import kelvinToCelsius from '../helpers/kelvinToCelsius';

export const TempContext = createContext({});

function TempContextProvider({ children }) {
  const [selectedMetric, toggleSelectedMetric] = useState('celsius');

  function toggleTemp() {
    if (selectedMetric === 'celsius') {
      toggleSelectedMetric('fahrenheit');
    } else {
      toggleSelectedMetric('celsius');
    }
  }

  function kelvinToMetric(kelvin) {
    if (selectedMetric === 'celsius') {
      return kelvinToCelsius(kelvin);
    } else {
      return kelvinToFahrenheit(kelvin);
    }
  }

  const contextData = {
    toggleTemp: toggleTemp,
    kelvinToMetric: kelvinToMetric,
  };

  return (
    <TempContext.Provider value={contextData}>
      { children }
    </TempContext.Provider>
  )
}

export default TempContextProvider;