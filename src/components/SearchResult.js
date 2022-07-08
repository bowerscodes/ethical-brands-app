import React from "react";
import { Link } from "react-router-dom";
import "../styles/searchresult.css";
import { FaAngleLeft } from "react-icons/fa";
import InfoCard from "./InfoCard";
import brand from "../data/brands.json";

const SearchResult = () => {
  return (
    <div className="search-results">
      <Link to="/">
        <button type="submit" className="search-results_button">
          <FaAngleLeft className="search-results_arrow" />
        </button>
      </Link>
      <div className="search-results_content">
        <h3>Company Logo</h3>
        <InfoCard
          name={brand.brands[0].name}
          revenue={brand.brands[0].revenue}
          ownership={JSON.stringify(brand.brands[0].ownership)}
        />
        <InfoCard animals={JSON.stringify(brand.brands[0].animals)} />
        <InfoCard environment={JSON.stringify(brand.brands[0].environment)} />
      </div>
    </div>
  );
};

export default SearchResult;
