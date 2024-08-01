import { IMAGE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    locality,
    costForTwo,
    cloudinaryImageId,
    sla,
    isOpen,
    aggregatedDiscountInfoV3,
  } = resData?.info;

  const { deliveryTime } = sla;
  const { header, subHeader } = aggregatedDiscountInfoV3 || {};

  // Convert avgRating to a number and round it to the nearest whole number
  const rating = Math.round(parseFloat(avgRating));
  const starEmoji = "✪"; // Star emoji for rating

  return (
    <div className="relative max-w-sm mx-auto bg-white rounded-3xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
      {/* Status Label */}
      <div
        className={`absolute top-4 left-4 px-3 py-1 text-white font-bold text-xs rounded-full shadow-lg ${
          isOpen ? "bg-green-600" : "bg-red-600"
        }`}
      >
        {isOpen ? "Opened" : "Closed"}
      </div>

      {/* Discount Info */}
      {aggregatedDiscountInfoV3 && (
        <div className="absolute top-4 right-4 px-3 py-1 text-white font-bold text-xs rounded-full bg-blue-600 shadow-lg">
          <span>{header}</span>
          {subHeader && <span className="block text-xs">{subHeader}</span>}
        </div>
      )}

      <div
        className="h-64 bg-cover bg-center bg-gray-200"
        style={{ backgroundImage: `url(${IMAGE_URL + cloudinaryImageId})` }}
      >
        <div className="flex items-center justify-end h-full p-4">
          <div className="bg-gradient-to-t from-black to-transparent w-full h-full absolute inset-0"></div>
          <div className="relative z-10 text-white text-xl font-semibold p-4 bg-black bg-opacity-50 rounded-lg">
            {name}
          </div>
        </div>
      </div>
      <div className="p-6">
        {/* Rating Box */}
        <div className="flex items-center space-x-2 mb-3">
          <div className="flex items-center bg-green-500 text-white py-1 px-3 rounded-lg shadow-md">
            <span className="text-xl">{starEmoji}</span>
            <span className="ml-2 text-lg font-semibold">{avgRating}</span>
          </div>
        </div>
        <p
          className="text-gray-700 text-sm mb-2 truncate"
          title={cuisines.join(", ")}
        >
          {cuisines.join(", ")}
        </p>
        <p className="text-gray-600 text-sm mb-2">{locality}</p>
        <p className="text-gray-600 text-sm mb-2">
          Delivery in {deliveryTime} mins
        </p>
        <p className="text-gray-800 font-semibold">{costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
