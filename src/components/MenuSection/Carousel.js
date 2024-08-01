// CarouselCard.js
import React from "react";

import { IMAGE_URL } from "../../utils/constants"; // Update this URL accordingly

const CarouselCard = ({ carousel, handleAddonsClick, title }) => {
  return (
    <div className="carousel-card bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
      <div className="carousel overflow-x-auto">
        <div className="carousel-inner flex space-x-4 pb-4">
          {carousel.map((item, index) => {
            const {
              name,
              description,
              imageId,
              category,
              price,
              defaultPrice,
              addons,
            } = item.dish.info;
            const value = price ?? defaultPrice;
            return (
              <div
                key={index}
                className="carousel-item bg-white rounded-lg shadow-lg p-4 flex-none w-60"
              >
                <img
                  className="carousel-item-image w-full h-32 object-cover rounded-md mb-2"
                  src={IMAGE_URL + imageId}
                  alt={name}
                />
                <h4 className="text-lg font-semibold text-gray-800 mb-1">
                  {name}
                </h4>
                <p className="text-gray-600 mb-1">{description}</p>
                <p className="text-gray-500 mb-1">{category}</p>
                <p className="text-xl font-bold text-gray-900">
                  ₹{(value / 100).toFixed(2)}
                </p>
                {addons?.length > 0 && (
                  <button
                    className="mt-2 bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600"
                    onClick={() => handleAddonsClick(addons)}
                  >
                    Add-ons
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
