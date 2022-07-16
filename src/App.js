import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Search from "./components/Search";
import SearchResult from "./components/SearchResult";
import getByName from "./requests/getByName";
// import getAllByName from "./requests/getAllByName";

const App = () => {
  const initialState = {
    logo: "",
    name: "",
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
  const [results, setResults] = useState(initialState);
  // const [allBrandNames, setAllBrandNames] = useState([]);

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

  // useEffect(() => {
  //   getAllByName(setAllBrandNames);
  // }, []);
  // console.log(allBrandNames);

  return (
    <>
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
        {/* {errorMessage ? (
          <div className="error-message">{errorMessage}</div>
        ) : null} */}
        {/* <div className="footer">Copyright 2022 Ethical Brands, Inc.</div> */}
      </div>{" "}
    </>
  );
};

export default App;
