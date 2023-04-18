import React from "react";
import "./AnimateStar.scss";

const AnimateStar = () => {
  const stars = Array.from({ length: 150 }, (_, index) => (
    <div key={index} className="c"></div>
  ));

  return <div className="wr">{stars}</div>;
};

export default AnimateStar;
