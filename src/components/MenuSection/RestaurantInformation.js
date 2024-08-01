// RestaurantInformation.js
import React from "react";
import { IMAGE_URL } from "../../utils/constants";

const RestaurantInformation = ({ resInfo }) => {
  const {
    name,
    city,
    areaName,
    avgRating,
    logo,
    cloudinaryImageId,
    costForTwoMessage,
    cuisines,
    sla,
    aggregatedDiscountInfoV2,
    totalRatingsString,
    availability,
  } = resInfo?.cards[2]?.card?.card?.info || {};
  const { deliveryTime } = sla || {};
  const { header, subHeader } = aggregatedDiscountInfoV2 || {};
  const { nextCloseTime, opened } = availability || {};
  const img_id = cloudinaryImageId || logo;

  return (
    <div className="restaurant-info-card bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="flex flex-col lg:flex-row items-center">
        <img
          className="restaurant-logo w-32 h-32 object-cover rounded-full shadow-lg mb-4 lg:mb-0 lg:mr-6"
          src={IMAGE_URL + img_id}
          alt="Restaurant Logo"
        />
        <div className="restaurant-details flex-1 text-center lg:text-left">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
            {name}
          </h2>
          <h3 className="text-2xl text-gray-600 mb-1">{city}</h3>
          <h4 className="text-xl text-gray-500 mb-2">{areaName}</h4>
          <div className="rating-and-delivery flex flex-col lg:flex-row justify-center lg:justify-start items-center mb-4">
            <div className="flex items-center mb-2 lg:mb-0 lg:mr-4">
              <div className="flex items-center space-x-2 bg-green-500 text-white py-1 px-3 rounded-lg shadow-md">
                <span className="text-xl">✪</span>
                <span className="text-lg font-semibold">{avgRating}</span>
              </div>
              <span className="text-gray-600 ml-2">{`(${totalRatingsString})`}</span>
            </div>
            <div className="restaurant-delivery-time text-gray-600">
              Delivery in {deliveryTime} mins
            </div>
          </div>
          <div className="restaurant-cost-for-two text-lg text-gray-800 mb-2">
            {costForTwoMessage}
          </div>
          <div className="restaurant-cuisines text-lg text-gray-700">
            Cuisines: {cuisines.join(", ")}
          </div>
        </div>
      </div>
      {header && (
        <div className="discount-info mt-4 bg-blue-600 text-white p-2 rounded-lg">
          <h5 className="font-semibold">
            {header} {subHeader}
          </h5>
        </div>
      )}
    </div>
  );
};

export default RestaurantInformation;
