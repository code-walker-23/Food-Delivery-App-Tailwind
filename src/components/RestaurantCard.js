import { IMAGE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  console.log(props);
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    locality,
    areaName,
    costForTwo,
    cloudinaryImageId,
    sla,
    isOpen,
    aggregatedDiscountInfoV3,
  } = resData?.info;

  const { deliveryTime } = sla;
  const { header, subHeader } = aggregatedDiscountInfoV3 || {};
  console.log(costForTwo);

  // Convert avgRating to a number and round it to the nearest whole number
  const rating = Math.round(parseFloat(avgRating));
  const starEmoji = "✪"; // Star emoji for rating

  return (
    <div className="relative max-w-xs mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
      {/* Delivery Time Banner */}
      <div className="absolute top-4 left-4 px-2 py-1 text-white font-bold text-xs rounded-lg bg-orange-600 shadow-md">
        <span>Delivery in {deliveryTime} mins</span>
      </div>

      {/* Discount Info */}
      {aggregatedDiscountInfoV3 && (
        <div className="absolute top-4 right-4 px-3 py-1 text-white font-bold text-xs rounded-full bg-blue-600 shadow-lg">
          <span>{header}</span>
          {subHeader && <span className="block text-xs">{subHeader}</span>}
        </div>
      )}

      <div
        className="h-48 bg-cover bg-center bg-gray-200 rounded-t-2xl"
        style={{ backgroundImage: `url(${IMAGE_URL + cloudinaryImageId})` }}
      >
        <div className="flex items-center justify-end h-full p-4">
          <div className="bg-gradient-to-t from-black to-transparent w-full h-full absolute inset-0 rounded-t-2xl"></div>
          <div className="relative z-10 text-white text-lg font-semibold p-2 bg-black bg-opacity-60 rounded-lg">
            {name}
          </div>
        </div>
      </div>

      <div className="p-4">
        {/* Rating Box and Status Label */}
        <div className="flex items-center space-x-2 mb-2">
          <div className="flex items-center bg-green-500 text-white py-1 px-2 rounded-full shadow-sm">
            <span className="text-lg">{starEmoji}</span>
            <span className="ml-1 text-sm font-semibold">{avgRating}</span>
          </div>
          <div
            className={`px-3 py-1 text-white font-bold text-xs rounded-full shadow-lg ${
              isOpen ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {isOpen ? "Opened" : "Closed"}
          </div>
        </div>
        <p
          className="text-gray-700 text-sm mb-2 truncate"
          title={cuisines.join(", ")}
        >
          {cuisines.join(", ")}
        </p>
        <div className="text-center relative z-10 text-white text-lg font-semibold p-2 bg-black bg-opacity-60 rounded-lg">
          {areaName} : ({costForTwo})
        </div>
        {/* <p className="text-gray-800 font-semibold text-sm mt-2">
          {costForTwo}
        </p> */}
      </div>
    </div>
  );
};

export default RestaurantCard;
