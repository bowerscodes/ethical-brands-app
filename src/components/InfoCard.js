/* eslint-disable react/prop-types */
import React from "react";

const InfoCard = (props) => {
  const { name, revenue, ownership, animals, environment } = props;
  return (
    <>
      <div>{name}</div>
      <div>{revenue}</div>
      <div>{ownership}</div>
      <div>{animals}</div>
      <div>{environment}</div>
    </>
  );
};

export default InfoCard;
