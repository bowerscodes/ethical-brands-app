import React, { useState } from "react";
import "../styles/searchfooter.css";

const SearchFooter = () => {
  const [referenceList, setReferenceList] = useState(false);

  return (
    <div className="search-footer">
      <button
        type="button"
        className="references-button"
        onClick={() => setReferenceList(!referenceList)}
      >
        Reference List & Disclaimer
      </button>
      {referenceList ? (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div
          className="reference-info"
          onClick={() => setReferenceList(!referenceList)}
        >
          <h3>Disclaimer</h3>
          <p>
            Lorem ipsum dolor sit amet. Ea magnam sequi et quia laudantium quo
            quia consequatur non quisquam neque.
          </p>
          <hr />
          <h3>Reference List</h3>
          <ul className="reference-list">
            <li>Reference 1</li>
            <li>Reference 2</li>
            <li>Reference 3</li>
          </ul>
        </div>
      ) : null}
      <button type="button" className="repos-button">
        Github repos
      </button>
    </div>
  );
};

export default SearchFooter;
