import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import SearchResult from "./components/SearchResult";
import getByName from "./requests/getByName";

getByName();

const App = () => {
  const [searchText, setSearchText] = useState("");

  const handleBrand = (event) => {
    event.preventDefault();
    getByName(searchText);
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
              onSubmit={handleBrand}
            />
          }
        />
        <Route exact path="/search-results" element={<SearchResult />} />
      </Routes>
    </div>
  );
};

export default App;
