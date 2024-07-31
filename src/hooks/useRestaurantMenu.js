import React from "react";
import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(MENU_API + id);
    const json = await response.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
