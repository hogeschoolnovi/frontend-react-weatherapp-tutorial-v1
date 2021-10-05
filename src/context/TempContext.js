import React, { createContext } from 'react';

export const TempContext = createContext({});

function TempContextProvider() {
  const contextData = {};

  return (
    <TempContext.Provider>
      {/*hier komt het component waar we onze eigen provider omheen wikkelen*/}
    </TempContext.Provider>
  )
}

export default TempContextProvider;