import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import SearchResult from "./components/SearchResult";
import getByName from "./requests/getByName";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [logo, setLogo] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [ownership, setOwnership] = useState("");
  const [revenue, setRevenue] = useState("");
  const [anTesting, setAnTesting] = useState("");
  const [anInfo, setAnInfo] = useState("");
  const [envScore, setEnvScore] = useState(0);
  const [envInfo, setEnvInfo] = useState("");
  const [labScore, setLabScore] = useState(0);
  const [labInfo, setLabInfo] = useState("");
  const [philDonate, setPhilDonate] = useState("");
  const [philInfo, setPhilInfo] = useState("");
  const [newsSource, setNewsSource] = useState("");
  const [newsHeadline, setNewsHeadline] = useState("");
  const [totalScore, setTotalScore] = useState(0);

  const handleBrandSearch = () => {
    getByName(
      searchText,
      setLogo,
      setName,
      setCategory,
      setOwnership,
      setRevenue,
      setAnTesting,
      setAnInfo,
      setEnvScore,
      setEnvInfo,
      setLabScore,
      setLabInfo,
      setPhilDonate,
      setPhilInfo,
      setNewsSource,
      setNewsHeadline,
      setTotalScore
    );
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
              logo={logo}
              name={name}
              category={category}
              ownership={ownership}
              revenue={revenue}
              anTesting={anTesting}
              anInfo={anInfo}
              envScore={envScore}
              envInfo={envInfo}
              labScore={labScore}
              labInfo={labInfo}
              philDonate={philDonate}
              philInfo={philInfo}
              newsSource={newsSource}
              newsHeadline={newsHeadline}
              totalScore={totalScore}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
