import React, { useState } from "react";
import FetchRestaurantLatLong from "../components/FetchRestaurantLatLong"; // Adjust the path if necessary

const FindMe = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setError(null); // Clear any previous error
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="location-container bg-gray-50 min-h-screen flex flex-col items-center justify-center py-2 px-4">
      <h1 className="location-heading text-4xl font-extrabold text-gray-800 mb-6">
        Discover Restaurants Near You
      </h1>
      <button
        className="get-location-button bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        onClick={getLocation}
      >
        Find Nearby Restaurants
      </button>
      {location ? (
        <FetchRestaurantLatLong latitude={location.latitude} longitude={location.longitude} />
      ) : (
        error && (
          <p className="error-message text-red-600 text-lg mt-4">{error}</p>
        )
      )}
    </div>
  );
};

export default FindMe;
