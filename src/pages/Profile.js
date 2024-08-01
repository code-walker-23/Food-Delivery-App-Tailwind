import React from "react";
import OfflineComponent from "../utils/offlineComponent";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Profile = () => {
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <OfflineComponent />;
  }

  return (
    <div className="profile-container p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
      <div className="profile-header flex flex-col items-center text-center">
        <img
          src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/6/2020_6$largeimg_1449588168.jpg"
          alt="Profile"
          className="profile-picture w-32 h-32 object-cover rounded-full border-4 border-gray-200 shadow-md"
        />
        <h2 className="profile-name text-3xl font-extrabold text-gray-800 mt-4">
          Vinay Chhabra
        </h2>
        <p className="profile-title text-xl text-gray-600 mt-1">
          Software Engineer
        </p>
      </div>
      <div className="profile-body mt-8">
        <p className="profile-bio text-gray-700 mb-6">
          Passionate about building web applications and learning new technologies. Enjoys solving complex problems and collaborating with cross-functional teams.
        </p>
        <div className="profile-contact bg-gray-50 p-4 rounded-lg shadow-sm mb-6">
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Email:</span> ChhabraVinay549@gmail.com
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Phone:</span> (+91) 9058934746
          </p>
        </div>
        <div className="profile-social flex justify-center space-x-4">
          <a href="#" className="social-link bg-blue-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-600 transition duration-300">
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/vinay-chhabra-a377601a9/"
            className="social-link bg-blue-700 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-800 transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/code-walker-23"
            className="social-link bg-gray-900 text-white py-2 px-4 rounded-full shadow-md hover:bg-gray-800 transition duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
