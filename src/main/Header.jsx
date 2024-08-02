import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const loggedInUser = useContext(UserContext);
  console.log("Moder Way", loggedInUser);// it is being change by the value of the context
  const onlineStatus = useOnlineStatus();
  const statusString = onlineStatus ? "Online" : "Offline";
  const statusTextColor = onlineStatus ? "text-green-500" : "text-red-500";

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
            <span className={`text-sm ${statusTextColor}`}>{statusString}</span>
            {loggedInUser && (
              <span className="text-sm text-gray-300">
                Welcome, {loggedInUser.name}
              </span>
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap gap-6 mt-4 md:mt-0">
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
            to="/main/top-rated-restaurants"
            className="text-lg font-semibold text-gray-300 hover:text-white transition duration-300"
          >
            Top Rated
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
            Cart
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
          className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 text-lg"
          onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
        >
          {btnName}
        </button>
      </div>
    </header>
  );
};

export default Header;

// import React, { useEffect, useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../hooks/useOnlineStatus";
// import UserContex from "../utils/UserContext";

// const Header = () => {
//   // we will use an hook ot use context data
//   // const { loggedInUser } = useContext(UserContex);
//   const loggedInUser = useContext(UserContex);
//   console.log("Moder Way",loggedInUser);

//   // There are two ways to use context data:
//   // 1. Using useContext hook
//   // 2. Using Consumer component
//   /*
//    const loggedInUser = useContext(UserContex); // most common way to use context data
//    console.log(loggedInUser);

//   */

//    /*

//    <UserContex.Consumer> // Consumer component :  it takes a function as a child and that function will receive the context value as an argument

//    It was used when we were not able to use hooks in functional components.In the class based components, we were not able to use hooks, so we used Consumer component to get the context data.

//    */

//   const [btnName, setBtnName] = useState("Login");

//   useEffect(() => {
//     // Add any additional logic if needed
//   }, [btnName]);

//   const onlineStatus = useOnlineStatus();
//   const statusString = onlineStatus ? "Online" : "Offline";
//   // const statusColor = onlineStatus ? "bg-green-500" : "bg-red-500";
//   const statusTextColor = onlineStatus ? "text-green-400" : "text-red-400";

//   return (
//     <header className="bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg py-4 px-8 flex justify-between items-center">
//       {/* <UserContex.Consumer>{(data)=>(console.log("Traditional Way",data))}</UserContex.Consumer> */}
//       {/* <UserContex.Consumer>{({loggedInUser})=>(<h1>loggedInUser</h1>)}</UserContex.Consumer> */}

//       {/* Logo Section */}
//       <div className="logo-container">
//         <Link
//           to="/"
//           className="text-3xl font-extrabold text-white hover:text-gray-300 transition duration-300"
//         >
//           Suman Food & Beverages
//         </Link>
//       </div>

//       {/* Navigation and Status Section */}
//       <div className="flex items-center space-x-8">
//         <div className="flex items-center space-x-3">
//           {/* Status Indicator
//           <div
//             className={`w-4 h-4 rounded-full ${statusColor} border-2 border-gray-900`}
//             aria-label={statusString}
//           ></div> */}
//           {/* Status Text */}
//           <span className={`text-sm font-medium text-white ${statusTextColor}`}>
//             {statusString}
//           </span>
//         </div>

//         <nav className="nav-items flex space-x-6">
//           <Link
//             to="/main/"
//             className="text-white hover:text-gray-300 transition duration-300 text-lg font-medium"
//           >
//             Home
//           </Link>
//           <Link
//             to="/main/location"
//             className="text-white hover:text-gray-300 transition duration-300 text-lg font-medium"
//           >
//             Find Me
//           </Link>
//           <Link
//             to="/main/cities"
//             className="text-white hover:text-gray-300 transition duration-300 text-lg font-medium"
//           >
//             ExploreCities
//           </Link>
//           {/* <Link
//             to="/main/top-rated-restaurants"
//             className="text-white hover:text-gray-300 transition duration-300 text-lg font-medium"
//           >
//             Top Rated
//           </Link> */}
//           <Link
//             to="/main/groceries"
//             className="text-white hover:text-gray-300 transition duration-300 text-lg font-medium"
//           >
//             Grocery
//           </Link>
//           <Link
//             to="/main/cart"
//             className="text-white hover:text-gray-300 transition duration-300 text-lg font-medium"
//           >
//             Cart
//           </Link>
//           <Link
//             to="/main/profile"
//             className="text-white hover:text-gray-300 transition duration-300 text-lg font-medium"
//           >
//             Profile
//           </Link>
//         </nav>

//         <button
//           className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 text-lg"
//           onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
//         >
//           {btnName}
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;
