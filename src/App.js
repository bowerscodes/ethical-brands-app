import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import SearchResult from "./components/SearchResult";
// import brands from "./data/brands.json";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Search />} />
        <Route exact path="/search-results" element={<SearchResult />} />
      </Routes>
    </div>
  );
};

export default App;
