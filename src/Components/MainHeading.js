import React from "react";

export default function MainHeading(props) {
  return (
    <div className="headingContainer">
      <h1 className="mainHeading">
        <strong>{props.section}</strong>{" "}
      </h1>
      <div className="hLine">
        <div className="hLineSub"></div>
      </div>
    </div>
  );
}
