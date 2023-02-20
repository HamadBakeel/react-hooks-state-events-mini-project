import React from "react";

function CategoryFilter({categories, onChangeCategory, selectedCategory}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
        {
            categories.map((category) =>
                <button
                    key={category}
                    data-category={category}
                    onClick={onChangeCategory}
                    className={selectedCategory===category? "selected" : ""}
                >{category}</button>)
        }
    </div>
  );
}

export default CategoryFilter;
