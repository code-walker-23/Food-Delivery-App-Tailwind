// CategorySection.js
import React from "react";
import ItemCards from "./ItemCards";

const CategorySection = ({
  categories,
  sectionIndex,
  expandedCategories,
  toggleCategory,
  onAddonsClick,
}) => {
  return (
    <div className="categories-section mt-6">
      {categories.map((category, categoryIndex) => {
        const { title, itemCards } = category;
        return (
          itemCards.length > 0 && (
            <div
              key={categoryIndex}
              className="category-section border-t border-gray-300 pt-4"
            >
              <h4
                className="text-xl font-semibold text-gray-700 cursor-pointer mb-2"
                onClick={() => toggleCategory(sectionIndex, categoryIndex)}
              >
                {title} ({(itemCards.length)})
                {expandedCategories[sectionIndex]?.[categoryIndex] ? (
                  <span className="text-gray-600">▲</span>
                ) : (
                  <span className="text-gray-600">▼</span>
                )}
              </h4>
              {expandedCategories[sectionIndex]?.[categoryIndex] && (
                <ItemCards items={itemCards} onAddonsClick={onAddonsClick} />
              )}
            </div>
          )
        );
      })}
    </div>
  );
};

export default CategorySection;
