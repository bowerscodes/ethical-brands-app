import React from "react";
import { Link } from "react-router-dom";
import "../styles/search.css";

// eslint-disable-next-line react/prop-types
const Search = ({ searchText, setSearchText, onSubmit }) => {
  const handleInputChange = (event) => setSearchText(event.target.value);

  return (
    <div className="search-page">
      <div className="search-background">
        <div className="search-component">
          <h2 className="search-title">Ethical Brands</h2>
          <form className="search-form">
            <div>
              <input
                type="text"
                className="search-input"
                onChange={handleInputChange}
                value={searchText}
              />
            </div>
            <div>
              <button
                type="submit"
                className="search-button"
                onClick={onSubmit}
              >
                <Link to="/search-results">SEARCH</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
