import React from 'react';
import SearchBar from './components/searchBar/SearchBar';
import TabBarMenu from './components/tabBarMenu/TabBarMenu';
import MetricSlider from './components/metricSlider/MetricSlider';
import './App.css';

function App() {
  return (
    <>
      <div className="weather-container">

        {/*HEADER -------------------- */}
        <div className="weather-header">
          <SearchBar />

          <button
            type="button"
            onClick={() => console.log('Ik werk nog niet!')}
          >
            Haal data op!
          </button>
        </div>

        {/*CONTENT ------------------ */}
        <div className="weather-content">
          <TabBarMenu />

          <div className="tab-wrapper">
            Alle inhoud van de tabbladen komt hier!
          </div>
        </div>

        <MetricSlider />
      </div>
    </>
  );
}

export default App;
