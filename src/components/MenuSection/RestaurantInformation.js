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
    hasBestsellerItems,
    orderabilityCommunication
  } = resInfo?.cards[2]?.card?.card?.info || {};
  
  const { deliveryTime } = sla || {};
  const { message, subTitle, title } = orderabilityCommunication || {};
  const { header, subHeader } = aggregatedDiscountInfoV2 || {};
  const img_id = cloudinaryImageId || logo;

  return (
    <div className="restaurant-info-card bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-200">
      <div className="flex flex-col lg:flex-row items-center">
        <img
          className="restaurant-logo w-36 h-36 object-cover rounded-full shadow-lg mb-6 lg:mb-0 lg:mr-8"
          src={IMAGE_URL + img_id}
          alt="Restaurant Logo"
        />
        <div className="restaurant-details flex-1 text-center lg:text-left">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-3">{name}</h2>
          <h3 className="text-3xl text-gray-700 mb-2">{city}</h3>
          <h4 className="text-xl text-gray-500 mb-3">{areaName}</h4>
          <div className="rating-and-delivery flex flex-col lg:flex-row justify-center lg:justify-start items-center mb-6">
            <div className="flex items-center mb-3 lg:mb-0 lg:mr-6">
              <div className="flex items-center space-x-2 bg-green-600 text-white py-2 px-4 rounded-full shadow-lg">
                <span className="text-xl">✪</span>
                <span className="text-lg font-bold">{avgRating}</span>
              </div>
              <span className="text-gray-600 ml-3 text-lg">{`(${totalRatingsString})`}</span>
            </div>
            { deliveryTime ? (
              <div className="restaurant-delivery-time text-gray-600 text-lg font-medium">
                Delivery in {deliveryTime} mins
              </div>
            ) : message ? (
              <div className={`orderability-message text-${message.textColor} p-4 rounded-lg border border-${message.textColor}`}>
                <h4 className="text-xl font-semibold">{title.text}</h4>
                <p className="text-base mt-1">{message.text}</p>
                {subTitle && <p className="text-sm italic mt-1">{subTitle.text}</p>}
              </div>
            ) : null }
          </div>
          <div className="restaurant-cost-for-two text-lg text-gray-800 mb-3">
            {costForTwoMessage}
          </div>
          <div className="restaurant-cuisines text-lg text-gray-700">
            Cuisines: {cuisines.join(", ")}
          </div>
          {hasBestsellerItems && (
            <div className="bestseller-badge bg-yellow-600 text-white py-2 px-4 rounded-full mt-4 shadow-md">
              <span className="font-semibold text-lg">Bestseller Items Available!</span>
            </div>
          )}
        </div>
      </div>
      {header && (
        <div className="discount-info mt-6 bg-blue-700 text-white p-4 rounded-lg shadow-md">
          <h5 className="font-semibold text-xl">
            {header} {subHeader}
          </h5>
        </div>
      )}
    </div>
  );
};

export default RestaurantInformation;
