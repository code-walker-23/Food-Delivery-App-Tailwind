import React from "react";

const OfflineComponent = () => {
  return (
    <div className="offline-container">
      <div className="offline-content">
        <div className="offline-icon">🔌</div>
        <div className="offline-message">You are currently offline</div>
        <div className="offline-description">
          Please check your internet connection and try again.
        </div>
        <button
          className="retry-button"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default OfflineComponent;
