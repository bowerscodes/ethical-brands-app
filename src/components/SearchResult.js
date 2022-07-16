/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import "../styles/searchresult.css";
import { FaAngleLeft } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const SearchResult = ({
  logo,
  name,
  category,
  ownership,
  revenue,
  anTesting,
  anInfo,
  envScore,
  envInfo,
  labScore,
  labInfo,
  philDonate,
  philInfo,
  newsSource,
  newsHeadline,
  totalScore,
}) => {
  let className = "brand-score_"; // Conditional class naming based on score of brand
  if (totalScore >= 75) {
    className += "high";
  } else if (totalScore < 75 && totalScore > 49) {
    className += "average";
  } else {
    className += "low";
  }

  return (
    <div className="search-result_page">
      <div className="top-page">
        <Link to="/">
          <button type="submit" className="top-page_button">
            <FaAngleLeft className="top-page_arrow" />
          </button>
        </Link>
        <div className={`${className}`}>Score: {totalScore}</div>
      </div>

      <div className="search-results_summary">
        <img src={`${logo}`} alt="brand logo" className="search-results_logo" />
        <div>{`${name}, ${category}`}</div>
        <div>Ownership: {ownership}</div>
        <div>Revenue: {revenue}</div>
      </div>

      <div className="search-results-container">
        <div className="search-results_info">
          Animal Testing: {`${anTesting}, ${anInfo}`}
        </div>
        <div className="search-results_info">
          Environment: {`${envInfo}, ${envScore}`}
        </div>
        <div className="search-results_info">
          Labour: {`${labInfo}, ${labScore}`}
        </div>
        <div className="search-results_info">
          Philanthropy: {`${philInfo}, ${philDonate}`}
        </div>
        <div className="search-results_info">
          <a href={newsSource} target="_blank" rel="noreferrer">
            News: {newsHeadline}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
