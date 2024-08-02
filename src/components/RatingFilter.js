import React, { useState, useRef, useEffect } from "react";

const RatingFilter = ({ onSelectRating }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleRatings, setVisibleRatings] = useState([]);
  const ratings = Array.from({ length: 20 }, (_, i) => (3.1 + i * 0.1).toFixed(1)); // Generate ratings from 3.1 to 5.0
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Show the first set of ratings initially (e.g., 3.1 to 3.3)
      setVisibleRatings(ratings.slice(0, 3));
    }
  }, [isOpen, ratings]);

  const handleRatingClick = (rating) => {
    onSelectRating(rating);
    setIsOpen(false);
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = dropdownRef.current;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      // Load more ratings when scrolled near the bottom
      setVisibleRatings((prevRatings) => {
        const nextIndex = prevRatings.length;
        const newRatings = ratings.slice(nextIndex, nextIndex + 3);
        return [...prevRatings, ...newRatings];
      });
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="bg-gray-600 text-white py-2 px-4 rounded-lg shadow hover:bg-gray-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        Filter by Rating
      </button>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg overflow-auto max-h-60"
          onScroll={handleScroll}
        >
          <ul className="py-1">
            {visibleRatings.length === 0 ? (
              <li className="px-4 py-2 text-gray-800">Loading...</li>
            ) : (
              visibleRatings.map((rating) => (
                <li
                  key={rating}
                  onClick={() => handleRatingClick(rating)}
                  className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                >
                  {rating}
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RatingFilter;
