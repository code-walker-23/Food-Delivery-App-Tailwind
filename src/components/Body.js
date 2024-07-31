import { useState, useEffect } from "react";
import RestaurantCard from "../utils/RestaurantCard";
import { Shimmer } from "../utils/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import OfflineComponent from "../utils/offlineComponent"; // Ensure correct path
import {
  SWIGGY_API,
  SWIGGY_API_AGRA,
  SWIGGY_API_HYD,
  SWIGGY_API_KOLKATA,
  SWIGGY_API_MUM,
  SWIGGY_API_DELHI,
} from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCityAPI, setSelectedCityAPI] = useState(SWIGGY_API);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(selectedCityAPI);
        const json = await response.json();
        const restaurants =
          json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];
        setListOfRestaurants(restaurants);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCityAPI]);

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <OfflineComponent />;
  }

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen mt-8">
      <div className="mb-6 flex flex-wrap gap-4 justify-center">
        <Link to="/main/cities">
          <Button label="Search Cities" />
        </Link>
        <ButtonFilter onClick={() => setSelectedCityAPI(SWIGGY_API)} label="All" />
        <ButtonFilter onClick={() => setSelectedCityAPI(SWIGGY_API_AGRA)} label="Agra" />
        <ButtonFilter onClick={() => setSelectedCityAPI(SWIGGY_API_HYD)} label="Hyderabad" />
        <ButtonFilter onClick={() => setSelectedCityAPI(SWIGGY_API_KOLKATA)} label="Kolkata" />
        <ButtonFilter onClick={() => setSelectedCityAPI(SWIGGY_API_MUM)} label="Mumbai" />
        <ButtonFilter onClick={() => setSelectedCityAPI(SWIGGY_API_DELHI)} label="Delhi" />
      </div>
      {loading ? (
        <Shimmer />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {listOfRestaurants.length > 0 ? (
            listOfRestaurants.map((restaurant) => (
              <Link key={restaurant.info.id} to={`/main/restaurants/${restaurant.info.id}`}>
                <RestaurantCard resData={restaurant} />
              </Link>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600">No restaurants found.</p>
          )}
        </div>
      )}
    </div>
  );
};

const Button = ({ label }) => (
  <button
    className="bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
  >
    {label}
  </button>
);

const ButtonFilter = ({ onClick, label }) => (
  <button
    onClick={onClick}
    className="bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
  >
    {label}
  </button>
);

export default Body;
