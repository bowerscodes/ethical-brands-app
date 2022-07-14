import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SearchResult from "../components/SearchResult";

describe("search results", () => {
  it("snapshot test", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <SearchResult />
      </BrowserRouter>
    );
    const searchResults = asFragment();

    expect(searchResults).toMatchSnapshot();
  });
});
