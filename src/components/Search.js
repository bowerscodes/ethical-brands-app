import React from "react";
import "../styles/search.css";
// import Dropdown from "./Dropdown";

// eslint-disable-next-line react/prop-types
const Search = ({ searchText, setSearchText, onSubmit }) => {
  const handleInputChange = (event) => setSearchText(event.target.value);

  return (
    <div className="search-page">
      <div className="search-background">
        <div className="search-component">
          <h1 className="search-title">Ethical Brands</h1>
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
        </div>
      </div>
      {/* <Dropdown setBrandNames={setBrandNames} /> */}
    </div>
  );
};

export default Search;
