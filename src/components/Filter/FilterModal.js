import React, { useState } from "react";

const FilterModal = ({ onFilterChange, closeModal }) => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const applyFilter = () => {
    onFilterChange(selectedFilter); // Call the function to apply the filter
    closeModal(); // Close the modal after applying the filter
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Filter Options</h3>
        <div className="flex flex-col gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              value="costLowToHigh"
              checked={selectedFilter === "costLowToHigh"}
              onChange={handleFilterChange}
              className="mr-4 h-4 w-4"
            />
            <span className="text-lg">Cost: Low to High</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="costHighToLow"
              checked={selectedFilter === "costHighToLow"}
              onChange={handleFilterChange}
              className="mr-4 h-4 w-4"
            />
            <span className="text-lg">Cost: High to Low</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="ratings"
              checked={selectedFilter === "ratings"}
              onChange={handleFilterChange}
              className="mr-4 h-4 w-4"
            />
            <span className="text-lg">Ratings</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="deliveryTime"
              checked={selectedFilter === "deliveryTime"}
              onChange={handleFilterChange}
              className="mr-4 h-4 w-4"
            />
            <span className="text-lg">Delivery Time</span>
          </label>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={closeModal}
            className="bg-gray-300 text-gray-800 py-2 px-6 rounded-lg hover:bg-gray-400 transition duration-300"
          >
            Cancel
          </button>
          <button
            onClick={applyFilter}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Apply
          </button>
        </div>
        {/* {Close button cross} */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FilterModal;
