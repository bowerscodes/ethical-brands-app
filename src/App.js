import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Search from "./components/Search";
import SearchResult from "./components/SearchResult";
import getByName from "./requests/getByName";

const App = () => {
  const initialState = {
    logo: "",
    name: "",
    ownership: "",
    revenue: "",
    anTesting: "",
    anInfo: "",
    anScore: 0,
    envInfo: "",
    envScore: 0,
    labInfo: "",
    labScore: 0,
    philDonate: "",
    philInfo: "",
    newsSource: "",
    newsHeadline: "",
    totalScore: 0,
  };
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [results, setResults] = useState(initialState);

  useEffect(() => {
    getByName(searchText, setResults, setErrorMessage);
  }, [searchText]);

  const navigate = useNavigate();

  const handleBrandSearch = () => {
    if (!searchText) {
      setErrorMessage("Error, please enter a brand"); // If no text is entered
    } else {
      getByName(searchText, setResults, setErrorMessage);
      if (!errorMessage) {
        navigate("/search-results");
      }
    }
  };

  return (
    <div className="app-container">
      {errorMessage ? (
        <div className="error-message">{errorMessage}</div>
      ) : null}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Search
              searchText={searchText}
              setSearchText={setSearchText}
              onSubmit={handleBrandSearch}
            />
          }
        />
        <Route
          exact
          path="/search-results"
          element={
            <SearchResult
              logo={results.logo}
              name={results.name}
              category={results.category}
              ownership={results.ownership}
              revenue={results.revenue}
              anTesting={results.anTesting}
              anInfo={results.anInfo}
              anScore={results.anScore}
              envInfo={results.envInfo}
              envScore={results.envScore}
              labInfo={results.labInfo}
              labScore={results.labScore}
              philDonate={results.philDonate}
              philInfo={results.philInfo}
              newsSource={results.newsSource}
              newsHeadline={results.newsHeadline}
              totalScore={results.totalScore}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
