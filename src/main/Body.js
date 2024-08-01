import React, { useState, useEffect } from "react";
import RestaurantCard from "../components/RestaurantCard";
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
  const [selectedCityAPI, setSelectedCityAPI] = useState(SWIGGY_API_AGRA);
  const [selectedCity, setSelectedCity] = useState("Agra");

  useEffect(() => {
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
        console.log("restaurant0", restaurants0);
        console.log("restaurant1", restaurants1);
        console.log("restaurant2", restaurants2);
        console.log("restaurant3", restaurants3);
        console.log("uniqueRestaurants", uniqueRestaurants);
        setListOfRestaurants(uniqueRestaurants);
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

  const handleCityChange = (api, cityName) => {
    setSelectedCityAPI(api);
    setSelectedCity(cityName);
  };

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen mt-8">
      <div className="mb-6 flex flex-wrap gap-4 justify-center">
        <Link to="/main/cities">
          <Button label="Search Cities" />
        </Link>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {listOfRestaurants.length > 0 ? (
            listOfRestaurants.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={`/main/restaurants/${restaurant.info.id}`}
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600">
              No restaurants found.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

const Button = ({ label }) => (
  <button className="bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
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

/* 

Props Drilling : In React, the process of passing data from one component to another component is called props drilling. It is a common pattern in React to pass data from a parent component to a child component. However, when the data needs to be passed to multiple levels of nested components, it can become cumbersome and lead to code complexity.

In props drilling, data is passed down through multiple levels of nested components by passing props from parent components to child components. This can lead to a lot of boilerplate code and make the code harder to maintain.

React Context API : The Context API is a feature in React that allows components to share data without having to pass props manually at every level of the component tree. It provides a way to pass data through the component tree without having to pass props down manually at every level.

React Context Advantages : The Context API in React provides several advantages for managing global state in an application:

1. Avoids prop drilling: The Context API allows data to be passed down through the component tree without having to pass props manually at every level. This can help reduce boilerplate code and make the codebase more maintainable.

2. Centralized state management: The Context API provides a centralized way to manage global state in an application. This can help simplify state management and make it easier to share data between components.

3. Provider and Consumer components: The Context API provides Provider and Consumer components that allow data to be shared between components. The Provider component is used to provide data to the component tree, while the Consumer component is used to access the data.

4. Hooks support: The Context API supports the use of hooks, such as useContext and useReducer, to access and update the shared data. This can help simplify data fetching and updating in components.

5. Performance optimizations: The Context API provides optimizations, such as memoization and lazy loading, to improve performance when accessing and updating shared data. This can help reduce unnecessary re-renders and improve the overall performance of the application.

React Context Disadvantages : The Context API in React also has some disadvantages that developers should be aware of:

1. Complexity: The Context API can introduce complexity to the codebase, especially when managing multiple contexts and providers. This can make the code harder to understand and maintain.

2. Global state management: The Context API promotes the use of global state management, which can lead to issues with data consistency and debugging. It is important to carefully manage the shared data to avoid unexpected behavior.

3. Performance overhead: The Context API can introduce performance overhead, especially when using multiple contexts and providers. This can impact the performance of the application and lead to slower rendering times.

4. Limited use cases: The Context API is not suitable for all use cases, such as managing complex state or handling asynchronous data fetching. In such cases, other state management libraries, such as Redux or React Query, may be more suitable.

5. Learning curve: The Context API has a learning curve, especially for developers who are new to React. It is important to understand the concepts and best practices of using the Context API to avoid common pitfalls and issues.





Context API : The Context API is a feature in React that allows components to share data without having to pass props manually at every level of the component tree. It provides a way to pass data through the component tree without having to pass props down manually at every level.

Redux : Redux is a state management library for JavaScript applications, primarily used with React. It helps manage the state of an application in a predictable and centralized way. Redux provides a global store that holds the state of the entire application, and components can access and update the state using actions and reducers.

React Query : React Query is a library for managing server state in React applications. It provides hooks and utilities for fetching, caching, and updating data from APIs. React Query simplifies data fetching and caching, and provides a consistent way to manage server state in React applications.

Apollo Client : Apollo Client is a state management library for managing data in React applications. It is primarily used with GraphQL APIs and provides tools for fetching, caching, and updating data from GraphQL servers. Apollo Client simplifies data fetching and caching, and provides a consistent way to manage data in React applications.










*/
