// Finalize the contract the of custom hook
// what is the parameter and what is the return value.
import { useEffect, useState } from "react";

import { useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  }, []);
  return onlineStatus; // boolean value
};
export default useOnlineStatus;

