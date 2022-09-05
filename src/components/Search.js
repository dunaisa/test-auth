import React from 'react';
import searchIcon from '../images/search-icon.svg'

const Search = ({ query, handleInputChange }) => {
  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        placeholder='Поиск...'
        value={query}
        onChange={handleInputChange}
      />
      <img src={searchIcon} alt="Поиск" className="search__icon" />
    </div>
  );
}

export default Search;
