export const Shimmer = () => {
  return (
    <div className="shimmer-wrapper mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {Array(16)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-card bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <div className="shimmer-card-image bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 h-48 animate-pulse"></div>
            <div className="shimmer-card-details p-4">
              <div className="shimmer-line bg-gray-300 h-6 mb-3 rounded-full w-3/4 animate-pulse"></div>
              <div className="shimmer-line bg-gray-300 h-6 mb-3 rounded-full w-1/2 animate-pulse"></div>
              <div className="shimmer-line bg-gray-300 h-6 rounded-full w-1/3 animate-pulse"></div>
            </div>
          </div>
        ))}
    </div>
  );
};
