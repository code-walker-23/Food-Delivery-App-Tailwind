// Menu.js
import React, { useEffect, useState } from "react";
import { Shimmer } from "../utils/Shimmer";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import OfflineComponent from "../utils/offlineComponent";
import useOnlineStatus from "../hooks/useOnlineStatus";
import ItemCards from "../components/MenuSection/ItemCards";
import RestaurantInformation from "../components/MenuSection/RestaurantInformation";
import MenuSection from "../components/MenuSection/MenuSection";
import Offer from "../components/MenuSection/Offer";
import CarouselCard from "../components/MenuSection/Carousel"; // Import the CarouselCard component
import AddonsModal from "../components/MenuSection/AddonsModal"; // Import the AddonsModal component
import { useParams } from "react-router-dom";

const Menu = () => {
  const [selectedAddons, setSelectedAddons] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const [expandedCategories, setExpandedCategories] = useState({});
  const [showMenu, setShowMenu] = useState(true);
  const { id } = useParams();

  const resInfo = useRestaurantMenu(id);
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <OfflineComponent />;
  }

  if (resInfo.length === 0) {
    return <Shimmer />;
  }

  const { cards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR || [];
  const { carousel } = cards[1]?.card?.card || [];
  const { title } = cards[1]?.card?.card;

  const offers =
    resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers || [];

  const handleAddonsClick = (addons) => {
    setSelectedAddons(addons);
  };

  const handleCloseAddons = () => {
    setSelectedAddons(null);
  };

  const toggleSection = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleCategory = (sectionIndex, categoryIndex) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [sectionIndex]: {
        ...prev[sectionIndex],
        [categoryIndex]: !prev[sectionIndex]?.[categoryIndex],
      },
    }));
  };

  const handleMenuToggle = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="menu-container p-6 bg-gray-100 min-h-screen">
      <RestaurantInformation resInfo={resInfo} />
      {offers.length > 0 && <Offer offers={offers} />}
      {carousel && carousel.length > 0 && (
        <CarouselCard 
          carousel={carousel} 
          handleAddonsClick={handleAddonsClick} 
        />
      )}
      <div className="menu-card bg-white rounded-lg shadow-lg p-6">
        <h2
          className="text-3xl font-bold text-gray-800 mb-4 cursor-pointer"
          onClick={handleMenuToggle}
        >
          Menu {showMenu ? "▲" : "▼"}
        </h2>
        {showMenu &&
          cards.flatMap((card, index) => (
            <MenuSection
              key={index}
              card={card}
              index={index}
              expandedSections={expandedSections}
              toggleSection={toggleSection}
              expandedCategories={expandedCategories}
              toggleCategory={toggleCategory}
              onAddonsClick={handleAddonsClick}
            />
          ))}
      </div>
      {selectedAddons && (
        <AddonsModal 
          selectedAddons={selectedAddons} 
          handleCloseAddons={handleCloseAddons} 
        />
      )}
    </div>
  );
};

export default Menu;
