// ItemCards.js
import React from "react";
import { IMAGE_URL } from "../../utils/constants";

const ItemCards = ({ items, onAddonsClick }) => {
  return (
    <ul className="menu-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item, itemIndex) => {
        const {
          name,
          description,
          imageId,
          category,
          inStock,
          price,
          defaultPrice,
          addons,
          ratings,
          isVeg,
        } = item.card.info;

        const value = price ?? defaultPrice;
        const rating = ratings?.aggregatedRating?.rating || "0";
        const ratingCount = ratings?.aggregatedRating?.ratingCount || "0";
        const ratingColor = rating >= 4 ? "bg-green-600" : "bg-yellow-600";

        return (
          <li
            key={itemIndex}
            className={`menu-item bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 ${
              !inStock ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <div className="flex flex-col">
              {/* Image Section */}
              <div className="relative">
                <img
                  className="w-full h-40 object-cover rounded-t-lg"
                  src={IMAGE_URL + imageId}
                  alt={name}
                />
                <div
                  className={`absolute top-2 left-2 bg-${
                    isVeg ? "green" : "red"
                  }-600 text-white text-xs py-1 px-2 rounded-full`}
                >
                  {isVeg ? "Veg" : "Non-Veg"}
                </div>
                <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white text-green-600 text-lg py-2 px-6 rounded-full shadow-lg border border-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition ease-in-out duration-300">
                  Add to Cart
                </button>
                {/* Rating Badge */}
                {rating !== "0" && (
                  <div
                    className={`absolute top-2 right-2 ${ratingColor} text-white text-xs py-1 px-2 rounded-full flex items-center space-x-1`}
                  >
                    <span>{rating}</span>
                    <span>✪</span>
                    <span>({ratingCount})</span>
                  </div>
                )}
              </div>
              {/* Details Section */}
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">
                    {name}
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">{description}</p>
                  <p className="text-gray-500 text-sm mb-2">
                    Category: {category}
                  </p>
                  <p
                    className={`font-medium text-sm mb-2 ${
                      !inStock ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {inStock ? "Available" : "Out of Stock"}
                  </p>
                  <p className="text-xl font-bold text-gray-900 mb-3">
                    ₹{(value / 100).toFixed(2)}
                  </p>
                </div>
                {addons?.length > 0 ? (
                  <button
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white text-xs py-1 px-3 rounded-lg hover:bg-yellow-600 transition"
                    onClick={() => onAddonsClick(addons)}
                  >
                    Add-ons
                  </button>
                ) : (
                  <button
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs py-1 px-3 rounded-lg hover:bg-red-600 transition"
                    disabled
                  >
                    No Add-ons
                  </button>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemCards;
