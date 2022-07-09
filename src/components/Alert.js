import React from "react";
import PropTypes from "prop-types";
import "../styles/alert.css";

const Alert = ({ message, success }) => {
  if (!message) return null;

  return (
    <div className={`alert alert-${success ? "success" : "error"}`}>
      <p>{message}</p>
    </div>
  );
};

Alert.defaultProps = {
  success: false,
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool,
};

export default Alert;
