import React from "react";
import ItemCards from "./ItemCards";
import CategorySection from "./CategorySection";

const MenuSection = ({
  card,
  index,
  expandedSections,
  toggleSection,
  expandedCategories,
  toggleCategory,
  onAddonsClick,
}) => {
  const { title, itemCards, categories } = card.card.card;
  let length = 0;
  if (itemCards != undefined) {
    length = itemCards.length;
  } else if(categories != undefined) {
    length = categories.length;
  }

  return (
    (itemCards?.length > 0 || categories?.length > 0) && (
      <div className="menu-section border-b border-gray-300 pb-6 mb-6">
        <h3
          className="text-2xl font-bold text-gray-800 cursor-pointer mb-4"
          onClick={() => toggleSection(index)}
        >
          {title} ({length}) {expandedSections[index] ? "▲" : "▼"}
        </h3>
        {expandedSections[index] && (
          <>
            {categories ? (
              <CategorySection
                categories={categories}
                sectionIndex={index}
                expandedCategories={expandedCategories}
                toggleCategory={toggleCategory}
                onAddonsClick={onAddonsClick}
              />
            ) : (
              <ItemCards items={itemCards} onAddonsClick={onAddonsClick} />
            )}
          </>
        )}
      </div>
    )
  );
};

export default MenuSection;
