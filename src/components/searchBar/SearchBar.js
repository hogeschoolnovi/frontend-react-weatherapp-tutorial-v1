import React, { useState } from 'react';
import './SearchBar.css';

// Added state variable location to App.js
// Passed state-setter-function as callback prop to SearchBar in App.js

function SearchBar({ setLocationHandler }) {
  const [query, setQuery] = useState('');

  function onFormSubmit(e) {
    e.preventDefault();
    console.log('submitted!');

    setLocationHandler(query);
  }

  return (
    <form className="searchbar" onSubmit={onFormSubmit}>
      <input
        type="text"
        name="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Zoek een stad in Nederland"
      />

      <button type="submit">
        Zoek
      </button>
    </form>
  );
}

export default SearchBar;
