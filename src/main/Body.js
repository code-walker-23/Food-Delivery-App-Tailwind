import React, { useState, useEffect } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { Shimmer } from "../utils/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import OfflineComponent from "../utils/offlineComponent";
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
  const [searchText, setSearchText] = useState("");
  let filteredRestaurant = null;

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

  filteredRestaurant = listOfRestaurants.filter((res) =>
    res.info.name.toLowerCase().includes(searchText.toLowerCase())
  );

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
          {searchText != "" && (
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

/* 


In react there is one way data flow, which means that the data flows from parent component to child component. If you want to pass data from child component to parent component, you can use props and callbacks. In this case, you can pass a function as a prop to the child component, and the child component can call this function to pass data to the parent component.

In React, data can be passed from parent components to child components using props. Props are a way to pass data from one component to another in React. When a component receives props, it can use the data passed in the props to render its output. Props are read-only and cannot be modified by the component that receives them. However, the parent component can update the props and pass new data to the child component.

In React , everything is a component and having it's own state. The state of a component is an object that holds data that influences the output of the component. The state of a component can be updated using the setState method. When the state of a component changes, the component re-renders to reflect the updated state. The state of a component is local to that component and cannot be accessed or modified by other components. However, the state can be passed down to child components as props.



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


Use Cases of Context Api : 
1. Theme management: The Context API can be used to manage the theme of an application. By storing the theme data in a context, components can access and update the theme data without having to pass props manually.

2. User authentication: The Context API can be used to manage user authentication in an application. By storing the user data in a context, components can access and update the user data without having to pass props manually.

3. Localization: The Context API can be used to manage localization in an application. By storing the locale data in a context, components can access and update the locale data without having to pass props manually.

4. Global state management: The Context API can be used to manage global state in an application. By storing the global state data in a context, components can access and update the global state data without having to pass props manually.

5. Data fetching: The Context API can be used to manage data fetching in an application. By storing the data fetching logic in a context, components can access and update the data without having to pass props manually.










*/
