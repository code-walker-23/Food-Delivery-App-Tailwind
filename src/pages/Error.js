import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto">
        <div className="text-6xl font-bold text-red-600 mb-4">404</div>
        <div className="text-2xl font-semibold text-gray-800 mb-4">Oops! Page Not Found</div>
        <p className="text-gray-600 mb-6">
          Sorry, the page you are looking for does not exist. 
          You can go back to the <Link to="/" className="text-blue-500 hover:underline">homepage</Link> or check out some other pages.
        </p>
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          onClick={() => window.location.href = '/'}
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
