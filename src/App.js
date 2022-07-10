import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Search from "./components/Search";
import SearchResult from "./components/SearchResult";

const getData = async () => {
  try {
    await axios.get("http://localhost:3000/brands").then((res) => {
      console.log(res.data);
    });
  } catch (error) {
    console.log(error);
  }
};

getData();

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
