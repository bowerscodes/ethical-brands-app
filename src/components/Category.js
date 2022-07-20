import React from "react";
import { Link } from "react-router-dom";
import getCategory from "../requests/getCategory";

getCategory();

// eslint-disable-next-line react/prop-types
const Category = ({ searchText, setOverview }) => {
  return (
    <div>
      <Link to="/">
        <button type="submit">BACK BUTTON</button>
      </Link>
      <h1>Categories of brands</h1>
      {searchText ? <div>{setOverview}</div> : null}
    </div>
  );
};

export default Category;
