import React from "react";
import "./shimmer.css";

const Shimmer = () => {
  const shimmerElements = Array(30).fill(null).map((_, index) => (
    <div key={index} className="box"></div>
  ));

  return <div className="size">{shimmerElements}</div>;
};

export default Shimmer;
