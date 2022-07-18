/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import "../styles/searchresult.css";
import { FaAngleLeft } from "react-icons/fa";
import animalIcon from "../assets/icons8-elephant-64.png";
import environmentIcon from "../assets/icons8-europe-64.png";
import labourIcon from "../assets/icons8-workers-64.png";
import philanthropyIcon from "../assets/icons8-donate-64.png";
import newsIcon from "../assets/icons8-magazine-64.png";

// eslint-disable-next-line react/prop-types
const SearchResult = ({
  logo,
  name,
  category,
  ownership,
  revenue,
  anTesting,
  anInfo,
  anScore,
  envInfo,
  envScore,
  labInfo,
  labScore,
  philDonate,
  philInfo,
  newsSource,
  newsHeadline,
  totalScore,
}) => {
  let scoreColor = "brand-score_"; // Conditional class naming based on score of brand
  if (totalScore >= 75) {
    scoreColor += "high";
  } else if (totalScore < 75 && totalScore > 49) {
    scoreColor += "average";
  } else {
    scoreColor += "low";
  }

  const formatting = Intl.NumberFormat("en-US", {
    // Format revenue number into currency type of USD
    style: "currency",
    currency: "USD",
  });
  const formattedRevenue = formatting.format(revenue);

  return (
    <div className="search-result_page">
      <div className="top-page">
        <Link to="/">
          <button type="submit" className="top-page_button">
            <FaAngleLeft className="top-page_arrow" />
          </button>
        </Link>
        <div className={`${scoreColor}`}>
          Score: <br /> {totalScore}
        </div>
      </div>

      <div className="search-results_summary">
        <img src={`${logo}`} alt="brand logo" className="search-results_logo" />
        <div>{`${name}, ${category}`}</div>
        <div>Ownership: {ownership}</div>
        <div>Revenue: {formattedRevenue}</div>
      </div>

      <div className="search-results-container">
        <div className="search-results_info">
          <div className="icon-and-score">
            <img src={animalIcon} alt="animal icon" className="icon" />
            {`${anScore}`}/5
          </div>
          Animal Testing: {`${anTesting}`}. <br /> {`${anInfo}`}
          {/* Empty div after each section to ensure there is space between when no information is provided */}
          <div />
        </div>

        <div className="search-results_info">
          <div className="icon-and-score">
            <img
              src={environmentIcon}
              alt="environment icon"
              className="icon"
            />
            {`${envScore}`}/5
          </div>
          {`${envInfo}`}
          <div />
        </div>

        <div className="search-results_info">
          <div className="icon-and-score">
            <img src={labourIcon} alt="labour icon" className="icon" />
            {`${labScore}`}/5
          </div>
          {`${labInfo}`}
          <div />
        </div>

        <div className="search-results_info">
          <div className="icon-and-score">
            <img
              src={philanthropyIcon}
              alt="philanthropy icon"
              className="icon"
            />
          </div>
          {`${philInfo}, ${philDonate}`}
          <div />
        </div>

        <div className="search-results_info">
          <div>
            <img src={newsIcon} alt="news icon" className="icon" />
          </div>
          <a href={newsSource} target="_blank" rel="noreferrer">
            {newsHeadline}
          </a>
          <div />
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
