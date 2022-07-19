import React, { useState } from "react";
import "../styles/searchfooter.css";
import { FaCode, FaInfo, FaGithub } from "react-icons/fa";

const SearchFooter = () => {
  const [referenceList, setReferenceList] = useState(false);
  const [repos, setRepos] = useState(false);

  return (
    <div className="search-footer">
      <button
        type="button"
        className="reference-button"
        onClick={() => setReferenceList(!referenceList)}
      >
        <FaInfo />
      </button>
      {referenceList ? (
        <div className="reference-info">
          <h3>Disclaimer</h3>
          <p>
            When a company does not publicise information there are various
            risks you take as a consumer. The climate impact of that company or
            product is likely to be much higher compared to industry peers, for
            example. Animals and humans may be harmed and damaging chemicals may
            be used during the manufacturing process.
          </p>
          <hr />
          <h3>References</h3>
          <ul className="reference-list">
            <li>https://www.ethical.org.au/3.4.2/</li>
            <li>https://www.fairify.io/</li>
            <li>https://thegoodshoppingguide.com/</li>
            <li>https://crueltyfree.peta.org/</li>
            <li>https://directory.goodonyou.eco/</li>
          </ul>
        </div>
      ) : null}
      <button
        type="button"
        className="repos-button"
        onClick={() => setRepos(!repos)}
      >
        <FaCode />
      </button>
      {repos ? (
        <div className="repos-info">
          <p>
            <a
              href="https://github.com/bowerscodes/ethical-brands-app"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="github-icon" /> Frontend
            </a>
          </p>
          <hr />
          <p>
            <a
              href="https://github.com/benjQuinn/ethical-brands-mongodb"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="github-icon" /> Backend
            </a>
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default SearchFooter;
