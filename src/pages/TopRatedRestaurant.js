import { useState, useEffect } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { Shimmer } from "../utils/Shimmer";
import { SWIGGY_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import OfflineComponent from "../utils/offlineComponent";

const TopRatedRestaurant = () => {
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    const res1 =
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setFilteredRestaurant(res1.filter((res) => res.info.avgRating >= 4.5));
    setLoading(false);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <OfflineComponent />;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Top Rated Restaurants
        </h1>

        {loading ? (
          <Shimmer />
        ) : filteredRestaurant.length === 0 ? (
          <div className="text-center text-gray-600 text-lg font-semibold">
            No Top Rated Restaurants Found
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredRestaurant.map((restaurant) => (
              <Link
                to={`/main/restaurants/${restaurant.info.id}`}
                key={restaurant.info.id}
                className="block"
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

export default TopRatedRestaurant;
