import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../styles/search.css";
import getAllByName from "../requests/getAllByName";
import SearchFooter from "./SearchFooter";

const Search = ({ searchText, setSearchText, onSubmit }) => {
  const [allBrandNames, setAllBrandNames] = useState([]);
  const [showList, setShowList] = useState(false);
  const [filteredBrands, setFilteredBrands] = useState([]);

  // setSearchText is whatever the user types
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
    setFilteredBrands(
      allBrandNames.filter((option) =>
        option.toLowerCase().includes(event.target.value)
      )
    );
    // Filters brands to what is included in the user input, assigns setAllBrandNames to this.
    setShowList(true);
  };

  const initializeBrandsNames = (brandNames) => {
    setAllBrandNames(brandNames);
  };

  useEffect(() => {
    getAllByName(initializeBrandsNames);
  }, []);

  return (
    <div className="search-page">
      <div className="search-functionality">
        <h1 className="search-title">Ethical Brands</h1>
        <div className="search-form">
          <input
            type="text"
            className="search-input"
            onChange={handleInputChange}
            onClick={() => setShowList(!showList)}
            value={searchText}
          />
          {showList ? ( // If show list is true, render list of brands, else null
            <ul className="filter-brands">
              {filteredBrands.map((option) => {
                return (
                  <li key={option}>
                    <button
                      type="button"
                      className="filter-brands_button"
                      onClick={() => {
                        // Double setter for when a brand is chosen
                        setSearchText(option);
                        setShowList(false);
                      }}
                    >
                      {option}
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : null}
          <button type="submit" className="search-button" onClick={onSubmit}>
            SEARCH
          </button>
        </div>
      </div>
      <SearchFooter />
    </div>
  );
};

export default Search;

Search.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
