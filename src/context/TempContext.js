import React, { createContext, useState } from 'react';

export const TempContext = createContext({});

function TempContextProvider({ children }) {
  const [selectedMetric, toggleSelectedMetric] = useState('celsius');

  const contextData = {};

  return (
    <TempContext.Provider value={contextData}>
      { children }
    </TempContext.Provider>
  )
}

export default TempContextProvider;