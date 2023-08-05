import React from 'react';
import './Search.css';

const Search = ({ onSearch }) => { // Принимаем колбэк onSearch из пропсов
  const handleInputChange = (e) => {
    onSearch(e.target.value); // Вызываем колбэк onSearch с текущим значением инпута
  };

  return (
    <div className="search-container">
      {/* <form noValidate=""> */}
        <input
          placeholder="Search"
          className="search-input"
          onChange={handleInputChange} // Добавляем обработчик события onChange
        />
      {/* </form> */}
    </div>
  );
};

export default Search;
