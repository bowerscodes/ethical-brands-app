import React, { useEffect, useState } from "react";
import "../styles/search.css";
import getAllByName from "../requests/getAllByName";

// eslint-disable-next-line react/prop-types
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
      <div className="search-background">
        <div className="search-component">
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
                        onClick={() => setSearchText(option)}
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
      </div>
    </div>
  );
};

export default Search;
