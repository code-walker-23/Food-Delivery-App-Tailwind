// src/utils/StarRating.js

export const renderStars = ({ rating }) => {
  const fullStar = "★";
  const emptyStar = "☆";
  const numStars = 5; // Total number of stars
  const filledStars = Math.round(rating); // Round rating to nearest integer

  return (
    <div className="flex">
      {[...Array(numStars)].map((_, index) => (
        <span key={index} className={`text-yellow-500 text-xl`}>
          {index < filledStars ? fullStar : emptyStar}
        </span>
      ))}
    </div>
  );
};

export default renderStars;
