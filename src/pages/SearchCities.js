import { useState } from "react";
import { CitiesList } from "../utils/cities";
import RestaurantCard from "../components/RestaurantCard";
import { Shimmer } from "../utils/Shimmer";
import { Link } from "react-router-dom";
import Search from "./Search"; // Make sure this is correctly imported

const SearchCities = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

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
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      );
      const json = await response.json();
      const fetchedRestaurants =
        json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setRestaurants(fetchedRestaurants);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCityClick = (city) => {
    fetchRestaurants(city.Lat, city.Long);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for a city..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
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
                className="bg-white text-gray-800 p-4 rounded-lg shadow-md hover:bg-blue-100 hover:text-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
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
        <div className="w-full">
          <Search listOfRestaurants={restaurants} />
        </div>
      )}
    </div>
  );
};

export default SearchCities;
