import React from "react";

const Offer = ({ offers }) => {
  return (
    <div className="offers-section bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Special Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offers.map((offer, index) => {
          const { couponCode, description, header } = offer.info || {};
          return (
            <div
              key={index}
              className="offer-card bg-yellow-50 p-4 rounded-lg shadow-md"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-yellow-600">{header}</h3>
                <span className="text-sm bg-yellow-200 text-yellow-600 py-1 px-2 rounded-full">
                  {couponCode}
                </span>
              </div>
              <p className="text-gray-700">{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Offer;
