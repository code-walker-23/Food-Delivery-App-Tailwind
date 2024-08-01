import React from "react";
import { IMAGE_URL } from "../../utils/constants";

const CarouselCard = ({ carousel, handleAddonsClick, title }) => {
  return (
    <div className="carousel-card bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-6">{title}</h2>
      <div className="carousel overflow-x-auto">
        <div className="carousel-inner flex space-x-6 pb-4">
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
                className="carousel-item bg-white rounded-lg shadow-md p-4 flex-none w-64 transition-transform transform hover:scale-105"
              >
                <img
                  className="carousel-item-image w-full h-48 object-cover rounded-lg mb-4"
                  src={IMAGE_URL + imageId}
                  alt={name}
                />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {name}
                </h4>
                <p className="text-gray-700 mb-2">{description}</p>
                <p className="text-gray-600 mb-2">{category}</p>
                <p className="text-2xl font-bold text-gray-900">
                  ₹{(value / 100).toFixed(2)}
                </p>
                {addons?.length > 0 && (
                  <button
                    className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
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
