import { useState, useEffect } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { Shimmer } from "../utils/Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_API } from "../utils/constants";
import useOnlineStatus from "../hooks/useOnlineStatus";
import OfflineComponent from "../utils/offlineComponent";

const Search = () => {
  const [resFilter, setListOfRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  let filteredRestaurant = null;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    const res1 =
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setListOfRestaurant(res1);
    filteredRestaurant = res1;
    setLoading(false);
  };

  filteredRestaurant = resFilter.filter((res) =>
    res.info.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <OfflineComponent />;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 mb-6 border border-gray-300">
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <input
            type="text"
            id="search-input"
            placeholder="Search for restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="flex-grow px-4 py-2 border-none outline-none focus:ring-2 focus:ring-gray-500"
          />

          {/* <button
            className="bg-gray-600 text-white px-6 py-2 rounded-r-lg hover:bg-gray-700 transition duration-300"
            onClick={handleSearch}
          >
            Search
          </button> */}
        </div>
      </div>

      {loading ? (
        <Shimmer />
      ) : filteredRestaurant.length === 0 ? (
        <div className="text-center text-gray-600 text-xl">
          No Restaurant Found
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={`/main/restaurants/${restaurant.info.id}`}
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
