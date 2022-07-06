import React from "react";
import "../styles/search.css";
// import { Link } from "react-router-dom"

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
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
