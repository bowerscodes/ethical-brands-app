import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Search from "../components/Search";

describe("search", () => {
  it("snapshot test", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    );
    const search = asFragment();

    expect(search).toMatchSnapshot();
  });

  it("checks search button is rendered correctly", () => {
    render(
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    );
    const linkElement = screen.getByText(/search/i);

    expect(linkElement).toBeInTheDocument();
  });
});
