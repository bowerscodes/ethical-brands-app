/* eslint-disable react/prop-types */
import React from "react";
import "../styles/infocard.css";

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
    news,
    totalScore,
  } = props;
  return (
    <>
      <div className="info">
        <div>{`${name}, ${category}`}</div>
        <div>Revenue: {revenue}</div>
        <div>{ownership}</div>
      </div>
      <div className="info-card">
        <div>Animal Testing: {anTesting}</div>
        <div>{anInfo}</div>
      </div>
      <div className="info-card">
        <div>Environment: {`${envScore}, ${envInfo}`}</div>
      </div>
      <div className="info-card">
        <div>Labour: {`${labScore}, ${labInfo}`}</div>
      </div>
      <div className="info-card">
        <div>Philanthropy: {`${philDonate}, ${philInfo}`}</div>
      </div>
      <div className="info-card">
        <a href={news[0].source}>{news[0].headline}</a>
      </div>
      <div>Score: {totalScore}</div>
    </>
  );
};

export default InfoCard;
