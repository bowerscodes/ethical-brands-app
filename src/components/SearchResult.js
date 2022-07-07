import React from "react";
import { Link } from "react-router-dom";

const SearchResult = () => {
  return (
    <div>
      <button type="submit">
        <Link to="/">BACK</Link>
      </button>
      <h2>Search Results</h2>
    </div>
  );
};

export default SearchResult;
