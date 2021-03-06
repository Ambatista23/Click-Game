import React from "react";
import "./style.css";

function heroCard(props) {
  return (
    <div
      role="img"
      aria-label="click item"
      onClick={() => props.handleCount(props.id)}
      style={{ backgroundImage: `url("${props.image}")` }}
      className={`click-item${props.shake ? " shake" : ""}`}
    />
  );
}

export default heroCard;
