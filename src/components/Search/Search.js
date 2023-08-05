import React from 'react';
import './Search.css';

const Search = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-container">
        <input
          placeholder="Search"
          className="search-input"
          onChange={handleInputChange}
        />
    </div>
  );
};

export default Search;
