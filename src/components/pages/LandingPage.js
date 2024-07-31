import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className="relative z-10 text-center px-4 md:px-8">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Welcome to{" "}
          <span className="text-orange-300">Suman Food and Beverages</span>
        </h1>
        {/* Subheading */}
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Discover the finest selection of food and drinks, crafted to
          perfection. Your culinary adventure starts here!
        </p>
        {/* Button */}
        <Link to="/main">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105">
            Explore
          </button>
        </Link>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-transparent via-orange-300/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-transparent via-orange-300/30 to-transparent"></div>
      </div>
    </div>
  );
};

export default LandingPage;
