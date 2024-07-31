import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  useEffect(() => {
    // Add any additional logic if needed
  }, [btnName]);

  const onlineStatus = useOnlineStatus();
  const statusString = onlineStatus ? "Online" : "Offline";
  const statusColor = onlineStatus ? "bg-green-500" : "bg-red-500";

  return (
    <header className="bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg py-4 px-8 flex justify-between items-center">
      {/* Logo Section */}
      <div className="logo-container">
        <Link
          to="/"
          className="text-3xl font-extrabold text-white hover:text-gray-300 transition duration-300"
        >
          Suman Food & Beverages
        </Link>
      </div>

      {/* Navigation and Status Section */}
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2 text-white">
          <div
            className={`w-3 h-3 rounded-full ${statusColor}`}
            aria-label={statusString}
          ></div>
          <span className="text-sm">{statusString}</span>
        </div>

        <nav className="nav-items flex space-x-6">
          <Link
            to="/main/"
            className="text-white hover:text-gray-300 transition duration-300 text-lg font-medium"
          >
            Home
          </Link>
          <Link
            to="/main/location"
            className="text-white hover:text-gray-300 transition duration-300 text-lg font-medium"
          >
            Find Me
          </Link>
          <Link
            to="/main/search"
            className="text-white hover:text-gray-300 transition duration-300 text-lg font-medium"
          >
            Search
          </Link>
          <Link
            to="/main/top-rated-restaurants"
            className="text-white hover:text-gray-300 transition duration-300 text-lg font-medium"
          >
            Top Rated
          </Link>
          <Link
            to="/main/groceries"
            className="text-white hover:text-gray-300 transition duration-300 text-lg font-medium"
          >
            Grocery
          </Link>
          <Link
            to="/main/cart"
            className="text-white hover:text-gray-300 transition duration-300 text-lg font-medium"
          >
            Cart
          </Link>
          <Link
            to="/main/profile"
            className="text-white hover:text-gray-300 transition duration-300 text-lg font-medium"
          >
            Profile
          </Link>
        </nav>

        <button
          className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 text-lg"
          onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
        >
          {btnName}
        </button>
      </div>
    </header>
  );
};

export default Header;
