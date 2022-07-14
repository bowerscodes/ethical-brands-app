import React from "react";
import "../styles/search.css";
// import Dropdown from "./Dropdown";

// eslint-disable-next-line react/prop-types
const Search = ({ searchText, setSearchText, onSubmit }) => {
  const handleInputChange = (event) => setSearchText(event.target.value);

  return (
    <div className="search-component">
      <h2 className="search-title">Ethical Brands</h2>
      <div className="search-form">
        <input
          type="text"
          className="search-input"
          onChange={handleInputChange}
          value={searchText}
        />
        <button type="submit" className="search-button" onClick={onSubmit}>
          SEARCH
        </button>
      </div>
      {/* <Dropdown setBrandNames={setBrandNames} /> */}
    </div>
  );
};

export default Search;
