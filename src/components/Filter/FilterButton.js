import React, { useState } from "react";
import FilterModal from "./FilterModal";

const FilterButton = ({ onFilterChange }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button onClick={toggleModal} className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
        Filter
      </button>
      {isModalOpen && (
        <FilterModal
          onFilterChange={onFilterChange}
          closeModal={toggleModal}
        />
      )}
    </div>
  );
};

export default FilterButton;
