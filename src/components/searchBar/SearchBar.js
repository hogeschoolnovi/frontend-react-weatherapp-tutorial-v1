import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <form className="searchbar">
      <input
        type="text"
        name="search"
        placeholder="Zoek een stad in Nederland"
      />

      <button type="submit">
        Zoek
      </button>
    </form>
  );
}

export default SearchBar;
