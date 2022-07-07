import React from "react";
import { Link } from "react-router-dom";
import "../styles/search.css";

const Search = () => {
  return (
    <div className="search-component">
      <h2 className="search-title">Ethical Brands</h2>
      <form className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Search brand"
        />
        <button type="submit" className="search-button">
          <Link to="/search-results">Search</Link>
        </button>
      </form>
    </div>
  );
};

export default Search;
