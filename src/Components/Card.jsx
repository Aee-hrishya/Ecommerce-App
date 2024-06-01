import React from "react";

function Card(props) {
  return (
    <div className="category-card">
      <h2>{props.item}</h2>
      <p>Shop Now!!</p>
    </div>
  );
}

export default Card;
