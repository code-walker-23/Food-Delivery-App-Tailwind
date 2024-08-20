import React, { useState, useEffect, useContext } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { Shimmer } from "../utils/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import OfflineComponent from "../utils/offlineComponent";
import { useParams } from "react-router-dom";


import FilterButton from "../components/Filter/FilterButton";
import {
  SWIGGY_API,
  SWIGGY_API_AGRA,
  SWIGGY_API_HYD,
  SWIGGY_API_KOLKATA,
  SWIGGY_API_MUM,
  SWIGGY_API_DELHI,
} from "../utils/constants";

const Body = () => {
  const { city } = useParams();
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCityAPI, setSelectedCityAPI] = useState(SWIGGY_API_AGRA);
  const [selectedCity, setSelectedCity] = useState(city || "Agra");
  const [searchText, setSearchText] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  let filteredRestaurant = listOfRestaurants;

  useEffect(() => {
    fetchData();
  }, [selectedCityAPI]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(selectedCityAPI);
      const json = await response.json();
      const restaurants0 =
        json.data.cards[0]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      const restaurants1 =
        json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      const restaurants2 =
        json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      const restaurants3 =
        json.data.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      const restaurants = [
        ...restaurants0,
        ...restaurants1,
        ...restaurants2,
        ...restaurants3,
      ];
      const uniqueRestaurants = Array.from(
        new Set(restaurants.map((r) => r.info.id))
      ).map((id) => restaurants.find((r) => r.info.id === id));
      setListOfRestaurants(uniqueRestaurants);
      setSelectedFilter(""); // Reset filter
      filteredRestaurant = uniqueRestaurants;
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <OfflineComponent />;
  }

  const handleCityChange = (api, cityName) => {
    setSelectedCityAPI(api);
    setSelectedCity(cityName);
  };

  const handleFilterChange = (filterType) => {
    setSelectedFilter(filterType); // Update filter state
  };

  filteredRestaurant = listOfRestaurants
    .filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => {
      // Function to extract numeric cost from the string
      const extractCost = (costString) => {
        const match = costString.match(/\d+/); // Extracts the first numeric value
        return match ? Number(match[0]) : 0; // Convert to number or return 0 if no match
      };

      const costA = extractCost(a.info.costForTwo);
      const costB = extractCost(b.info.costForTwo);

      switch (selectedFilter) {
        case "costLowToHigh":
          return costA - costB; // Ascending order
        case "costHighToLow":
          return costB - costA; // Descending order
        case "ratings":
          return b.info.avgRating - a.info.avgRating; // Highest rating first
        case "deliveryTime":
          return a.info.sla.deliveryTime - b.info.sla.deliveryTime; // Shortest delivery time first
        default:
          return 0; // No sorting
      }
    });

  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-1">
      <div className="mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-grow gap-4">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder={`Search Restaurants from ${selectedCity}...`}
            className="flex-grow px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-400 transition duration-300"
          />
          {/* Enhanced Filter Button */}
          <div className="flex items-center">
            <FilterButton onFilterChange={handleFilterChange} />
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
          <ButtonFilter
            onClick={() => handleCityChange(SWIGGY_API, "Bangalore")}
            label="Bangalore"
          />
          <ButtonFilter
            onClick={() => handleCityChange(SWIGGY_API_AGRA, "Agra")}
            label="Agra"
          />
          <ButtonFilter
            onClick={() => handleCityChange(SWIGGY_API_HYD, "Hyderabad")}
            label="Hyderabad"
          />
          <ButtonFilter
            onClick={() => handleCityChange(SWIGGY_API_KOLKATA, "Kolkata")}
            label="Kolkata"
          />
          <ButtonFilter
            onClick={() => handleCityChange(SWIGGY_API_MUM, "Mumbai")}
            label="Mumbai"
          />
          <ButtonFilter
            onClick={() => handleCityChange(SWIGGY_API_DELHI, "Delhi")}
            label="Delhi"
          />
        </div>
      </div>

      {/* Enhanced Heading */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
          Top Rated Restaurants
        </h2>
        <p className="text-lg text-gray-600">{`From ${selectedCity}`}</p>
      </div>

      {loading ? (
        <Shimmer />
      ) : (
        <div className="space-y-8">
          {/* Enhanced Search Result Header */}
          {searchText !== "" && (
            <div className="bg-white p-2 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-700">
                {`Search Results for "${searchText}" (${filteredRestaurant.length})`}
              </h3>
            </div>
          )}

          {/* Display Results */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredRestaurant.length > 0 ? (
              filteredRestaurant.map((restaurant) => (
                <Link
                  key={restaurant.info.id}
                  to={`/main/restaurants/${restaurant.info.id}`}
                  target="_blank"
                >
                  <RestaurantCard resData={restaurant} />
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center">
                <p className="text-lg text-gray-600">No restaurants found.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const ButtonFilter = ({ onClick, label }) => (
  <button
    onClick={onClick}
    className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
  >
    {label}
  </button>
);

export default Body;
