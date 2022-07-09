import React from "react";
import { Link } from "react-router-dom";
import "../styles/searchresult.css";
import { FaAngleLeft } from "react-icons/fa";
import InfoCard from "./InfoCard";
import brand from "../data/brands.json";

const SearchResult = () => {
  const brandFilter = brand.brands.filter(
    (val) => val.name === "The North Face"
  );

  return (
    <div className="search-results">
      <Link to="/">
        <button type="submit" className="search-results_button">
          <FaAngleLeft className="search-results_arrow" />
        </button>
      </Link>
      <div className="search-results_content">
        <h3>Company Logo</h3>
        {brandFilter.map((value) => (
          <InfoCard
            name={value.name}
            category={value.category}
            revenue={value.revenue}
            ownership={value.ownership.owner}
            anTesting={value.animals.testing} // Booleans in json may need to be string
            anInfo={value.animals.info}
            envScore={value.environment.score}
            envInfo={value.environment.info}
            labScore={value.labour.score}
            labInfo={value.labour.info}
            philDonate={value.philanthropy.donations}
            philInfo={value.philanthropy.info}
            // news={JSON.stringify(value.news)}
            totalScore={value.totalScore}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
