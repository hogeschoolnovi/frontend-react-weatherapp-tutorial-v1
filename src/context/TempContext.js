import React, { createContext } from 'react';

export const TempContext = createContext({});

function TempContextProvider({ children }) {
  const contextData = {};

  return (
    <TempContext.Provider value={contextData}>
      { children }
    </TempContext.Provider>
  )
}

export default TempContextProvider;