import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Shimmer } from "../utils/Shimmer"; // Adjust the path if necessary
import RestaurantCard from "./RestaurantCard"; // Adjust the path if necessary

const FetchRestaurantLatLong = ({ latitude, longitude }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (latitude && longitude) {
      fetchRestaurants(latitude, longitude);
    }
  }, [latitude, longitude]);

  const fetchRestaurants = async (lat, lng) => {
    setLoading(true); // Start loading
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
      console.error("Failed to fetch restaurants:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Nearby Restaurants
        </h1>

        {loading ? (
          <Shimmer />
        ) : restaurants.length === 0 ? (
          <div className="text-center text-gray-600 text-lg font-semibold">
            No Restaurants Found
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {restaurants.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={`/main/restaurants/${restaurant.info.id}`}
                className="block"
                target="_blank"
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FetchRestaurantLatLong;
