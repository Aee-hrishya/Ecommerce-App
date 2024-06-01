import React from "react";
import Card from "../Card/Card.component";
import "./CategoryMenu.styles.scss";

function CategoryMenu({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <Card key={category.id} category={category} />
      ))}
    </div>
  );
}

export default CategoryMenu;
