import React from "react";

const OfflineComponent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm mx-auto transform transition-transform duration-300 hover:scale-105">
        <div className="text-6xl text-red-500 mb-4 animate-pulse">🔌</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">You are currently offline</h2>
        <p className="text-gray-600 mb-6">
          Please check your internet connection and try again.
        </p>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-300"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default OfflineComponent;
