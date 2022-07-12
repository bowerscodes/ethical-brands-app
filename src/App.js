import React, { useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Search from "./components/Search";
import SearchResult from "./components/SearchResult";
import getByName from "./requests/getByName";

const App = () => {
  const initialState = {
    logo: "",
    name: "",
    category: "",
    ownership: "",
    revenue: "",
    anTesting: "",
    anInfo: "",
    envScore: 0,
    envInfo: "",
    labScore: 0,
    labInfo: "",
    philDonate: "",
    philInfo: "",
    newsSource: "",
    newsHeadline: "",
    totalScore: 0,
  };

  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const [results, setResults] = useState(initialState);

  const handleBrandSearch = () => {
    if (!searchText) {
      setErrorMessage("Blank field, show an error message");
    } else {
      getByName(searchText, setResults, setErrorMessage);
      if (!errorMessage) {
        navigate("/search-results");
      }
    }
  };

  return (
    <div>
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
              envScore={results.envScore}
              envInfo={results.envInfo}
              labScore={results.labScore}
              labInfo={results.labInfo}
              philDonate={results.philDonate}
              philInfo={results.philInfo}
              newsSource={results.newsSource}
              newsHeadline={results.newsHeadline}
              totalScore={results.totalScore}
            />
          }
        />
      </Routes>
      {errorMessage ? <div>{errorMessage}</div> : null}
    </div>
  );
};

export default App;
