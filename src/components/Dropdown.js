import React from "react";
import PropTypes from "prop-types";
import getAllByName from "../requests/getAllByName";
import "../styles/dropdown.css";

getAllByName();

const Dropdown = (props) => {
  const { setBrandNames } = props;

  return (
    <>
      <input type="text" placeholder="enter brand" />
      {setBrandNames.map((brand) => {
        return (
          <button type="button" className="dropdown-button">
            {brand}
          </button>
        );
      })}
    </>
  );
};

export default Dropdown;

Dropdown.defaultProps = {
  setBrandNames: ["The North Face"],
};

Dropdown.propTypes = {
  setBrandNames: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
};
