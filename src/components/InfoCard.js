/* eslint-disable react/prop-types */
import React from "react";

const InfoCard = (props) => {
  const {
    name,
    revenue,
    ownership,
    category,
    anTesting,
    anInfo,
    envScore,
    envInfo,
    labScore,
    labInfo,
    philDonate,
    philInfo,
    totalScore,
  } = props;
  return (
    <>
      <div className="info-card_company">
        <div>{`${name}, ${category}`}</div>
        <div>Revenue: {revenue}</div>
        <div>{ownership}</div>
      </div>
      <div className="info-card_animal">
        <div>Animal Testing: {anTesting}</div>
        <div>{anInfo}</div>
      </div>
      <div className="info-card_environment">
        <div>Environment: {`${envScore}, ${envInfo}`}</div>
      </div>
      <div className="info-card_labour">
        <div>Labour: {`${labScore}, ${labInfo}`}</div>
      </div>
      <div className="info-card_philathropy">
        <div>Philanthropy: {`${philDonate}, ${philInfo}`}</div>
      </div>
      <div>Score: {totalScore}</div>
    </>
  );
};

export default InfoCard;
