import { useEffect, useState } from "react";
import { Shimmer } from "../../utils/Shimmer";
import cartData from "../../utils/cart.json"; // Import the JSON data
import { IMAGE_URL } from "../../utils/constants";

const Grocery = () => {
  const [groceryList, setGroceryList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    try {
      const json = cartData;
      console.log("Fetched JSON:", json);

      if (!json || !json.data || !json.data.widgets[1]?.data) {
        throw new Error("No data available");
      }

      const list = json.data.widgets[1]?.data || [];
      setGroceryList(list);
    } catch (err) {
      console.error("Error loading data:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Shimmer />;
  if (error) return <div className="text-red-600 text-lg p-4">Error: {error}</div>;

  return (
    <div className="grocery-container p-6 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Grocery List</h1>
      {groceryList.length > 0 ? (
        <div className="grocery-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {groceryList.map((item, index) => (
            <div
              key={index}
              className="grocery-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={`${IMAGE_URL}${item.imageId}`} // Adjust based on your image URL structure
                  alt={item.displayName}
                  className="w-full h-48 object-cover bg-gray-200"
                />
                <div className="absolute top-0 right-0 bg-gradient-to-t from-black via-transparent to-black opacity-50 p-2 text-white text-xs rounded-bl-lg">
                  <span className="font-bold">New</span>
                </div>
              </div>
              <div className="grocery-details p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{item.displayName}</h3>
                <p className="text-gray-600 text-lg">Count: {item.productCount}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-600 text-lg p-4 text-center">No grocery data available</div>
      )}
    </div>
  );
};

export default Grocery;
