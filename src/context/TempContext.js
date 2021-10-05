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

  const contextData = {};

  return (
    <TempContext.Provider value={contextData}>
      { children }
    </TempContext.Provider>
  )
}

export default TempContextProvider;