import { useState } from "react";
import { CitiesList } from "../utils/cities"; // Adjust the path if necessary
import RestaurantCard from "../components/RestaurantCard"; // Adjust the path if necessary
import { Shimmer } from "../utils/Shimmer"; // Adjust the path if necessary
import { Link } from "react-router-dom";

const SearchCities = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  const cities = CitiesList();

  // Function to normalize strings
  const normalizeString = (str) => {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // Remove diacritics (accents)
  };

  const filteredCities = cities.filter((city) =>
    normalizeString(city.City).includes(normalizeString(searchTerm))
  );

  const fetchRestaurants = async (lat, lng) => {
    setLoading(true);
    const response = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await response.json();
    const fetchedRestaurants =
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setRestaurants(fetchedRestaurants);
    setLoading(false);
  };

  const handleCityClick = (city) => {
    fetchRestaurants(city.Lat, city.Long);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Search Input */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search for a city..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg shadow-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />
      </div>
      {/* Cities List */}
      <div className="mb-8">
        {searchTerm && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredCities.map((city, index) => (
              <button
                key={index}
                onClick={() => handleCityClick(city)}
                className="bg-white text-gray-800 p-4 rounded-lg shadow-lg hover:bg-blue-100 hover:text-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                {city.City}
              </button>
            ))}
          </div>
        )}
      </div>
      {/* Restaurants Display */}
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <Shimmer />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant, index) => (
            <Link
              key={index}
              to={`/main/restaurants/${restaurant.info.id}`}
              className="block transform transition-transform hover:scale-105"
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchCities;
