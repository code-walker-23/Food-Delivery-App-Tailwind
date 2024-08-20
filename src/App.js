import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./main/Header";
import Body from "./main/Body";
import Footer from "./main/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/Error";
import Menu from "./pages/Menu";
import ScrollToTop from "./components/ScrollToTop";
import TopRatedRestaurant from "./pages/TopRatedRestaurant";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import SearchCities from "./pages/SearchCities";
import { lazy, Suspense, useEffect } from "react";
import { Shimmer } from "./utils/Shimmer";
import LandingPage from "./pages/LandingPage";
import "./styles/tailwind.css";
import LocationComponent from "./pages/FindMe";
import "animate.css";
import UserContex from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./pages/Cart";

const Grocery = lazy(() => import("./pages/Grocery"));
const About = lazy(() => import("./pages/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState("Vinay Chhabra");
  const [cart, setCart] = useState(0);
  useEffect(() => {
    const data = {
      name: "Vinay Chhabra",
    };
    setUserName(data.name);
  }, []);

  console.log(userName);
  const handleCart = () => {
    setCart(cart + 1);
  };
  return (
    // Vinay Chhabra
    <Provider store={appStore}>
      <UserContex.Provider
        value={{ loggedInUser: userName, setUserName, cart, handleCart }}
      >
        <div className="app">
          <ScrollToTop />
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContex.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/main",
    element: <AppLayout />,
    children: [
      { path: "", element: <Body /> }, // Default child route
      {
        path: "about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "restaurants/:id",
        element: <Menu />,
      },
      {
        path: "top-rated-restaurants",
        element: <TopRatedRestaurant />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "cities",
        element: <SearchCities />,
      },
      {
        path: "location",
        element: <LocationComponent />,
      },
      {
        path: "groceries",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      ,
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "restaurant/:city",
        element: <Body />,
      },
      {
        path: "city/:cityName",
        element: <Body />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

