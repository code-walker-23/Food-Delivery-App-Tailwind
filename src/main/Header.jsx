import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const { loggedInUser, cart } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  const statusString = onlineStatus ? "Online" : "Offline";
  const statusTextColor = onlineStatus ? "text-green-500" : "text-red-500";
  // subscribing to the store
  const cartItems = useSelector((store) => store.cart.items);


  return (
    <header className="bg-gray-900 text-white shadow-lg py-4 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo and Status Section */}
        <div className="flex flex-col items-center md:items-start space-y-2 md:space-y-0">
          <Link
            to="/"
            className="text-4xl font-extrabold text-orange-400 hover:text-orange-300 transition duration-300"
          >
            Suman Food & Beverages
          </Link>
          <div className="flex items-center space-x-4">
            <span className={`text-sm ${statusTextColor}`}>
              {statusString},
            </span>
            <span className="text-sm text-gray-300">Welcome</span>
          </div>
        </div>

        {/* Navigation and Button Section */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 mt-4 md:mt-0 w-full md:w-auto">
          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-6 md:gap-8">
            <Link
              to="/main/"
              className="text-lg font-semibold text-gray-300 hover:text-white transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/main/location"
              className="text-lg font-semibold text-gray-300 hover:text-white transition duration-300"
            >
              Find Me
            </Link>
            <Link
              to="/main/cities"
              className="text-lg font-semibold text-gray-300 hover:text-white transition duration-300"
            >
              Explore Cities
            </Link>
            <Link
              to="/main/groceries"
              className="text-lg font-semibold text-gray-300 hover:text-white transition duration-300"
            >
              Grocery
            </Link>
            <Link
              to="/main/cart"
              className="text-lg font-semibold text-gray-300 hover:text-white transition duration-300"
            >
              Cart-({cartItems.length} items)
            </Link>
            <Link
              to="/main/profile"
              className="text-lg font-semibold text-gray-300 hover:text-white transition duration-300"
            >
              Profile
            </Link>
          </nav>

          {/* Button */}
          <button
            className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 text-lg mt-4 md:mt-0"
            onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
          >
            {btnName}
          </button>
          {/* <Link to="#">{loggedInUser}</Link> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
