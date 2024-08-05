import { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
// import { Shimmer } from "../utils/Shimmer";
import { Link } from "react-router-dom";

const Search = ({ listOfRestaurants }) => {
  const [searchText, setSearchText] = useState("");

  const filteredRestaurants = listOfRestaurants.filter((res) =>
    res.info.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Search Input */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search for restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg shadow-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />
      </div>
      {/* Restaurants Display */}
      {filteredRestaurants.length === 0 ? (
        <div className="text-center text-gray-600 text-xl">
          No Restaurants Found
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={`/main/restaurants/${restaurant.info.id}`}
              className="block transform transition-transform hover:scale-105"
              target="_blank"
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
