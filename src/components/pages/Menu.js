import React, { useEffect, useState } from "react";
import { Shimmer } from "../../utils/Shimmer";
import { IMAGE_URL } from "../../utils/constants";
import { renderStars } from "../../utils/star";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../hooks/useRestaurantMenu";
import OfflineComponent from "../../utils/offlineComponent";
import useOnlineStatus from "../../hooks/useOnlineStatus";

const Menu = () => {
  const [selectedAddons, setSelectedAddons] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const [expandedCategories, setExpandedCategories] = useState({});
  const [showMenu, setShowMenu] = useState(true);
  const { id } = useParams();

  const resInfo = useRestaurantMenu(id);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        handleCloseAddons();
      }
    };
    
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  if (!onlineStatus) {
    return <OfflineComponent />;
  }

  if (resInfo.length === 0) {
    return <Shimmer />;
  }

  const { cards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR || [];
  const { carousel } = cards[1]?.card?.card || [];
  const { title } = cards[1]?.card?.card;

  const {
    name,
    city,
    areaName,
    avgRating,
    logo,
    cloudinaryImageId,
    costForTwoMessage,
    cuisines,
    sla,
    aggregatedDiscountInfoV2,
    totalRatingsString,
    availability,
  } = resInfo?.cards[2]?.card?.card?.info || {};
  const { deliveryTime } = sla || {};
  const { nextCloseTime, opened } = availability || {};
  const { header, descriptionList } = aggregatedDiscountInfoV2 || {};

  const img_id = cloudinaryImageId || logo;

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
        ...(prev[sectionIndex] || {}),
        [categoryIndex]: !prev[sectionIndex]?.[categoryIndex],
      },
    }));
  };

  const handleMenuToggle = () => {
    setShowMenu((prev) => !prev);
    if (showMenu) {
      const allSections = cards.reduce((acc, _, index) => {
        acc[index] = true;
        return acc;
      }, {});
      setExpandedSections(allSections);
    } else {
      setExpandedSections({});
    }
  };

  const renderItemCards = (items) => (
    <ul className="menu-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item, itemIndex) => {
        const {
          name,
          description,
          imageId,
          category,
          inStock,
          price,
          defaultPrice,
          addons,
        } = item.card.info;
        const value = price ?? defaultPrice;
        return (
          <li
            key={itemIndex}
            className={`menu-item bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 ${
              !inStock ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <img
              className="menu-item-image w-full h-40 object-cover"
              src={IMAGE_URL + imageId}
              alt={name}
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{name}</h4>
              <p className="text-gray-600 mb-2">{description}</p>
              <p className="text-gray-500 mb-2">Category: {category}</p>
              <p className={`font-medium mb-2 ${!inStock ? "text-red-500" : "text-green-500"}`}>
                {inStock ? "Available" : "Out of Stock"}
              </p>
              <p className="text-xl font-bold text-gray-900">₹{(value / 100).toFixed(2)}</p>
              {addons?.length > 0 && (
                <button
                  className="mt-3 bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600"
                  onClick={() => handleAddonsClick(addons)}
                >
                  Add+
                </button>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );

  const renderCategories = (categories, sectionIndex) => (
    <div className="categories-section mt-6">
      {categories.map((category, categoryIndex) => {
        const { title, itemCards } = category;
        return (
          itemCards.length > 0 && (
            <div key={categoryIndex} className="category-section border-t border-gray-300 pt-4">
              <h4
                className="text-xl font-semibold text-gray-700 cursor-pointer mb-2"
                onClick={() => toggleCategory(sectionIndex, categoryIndex)}
              >
                {title}{" "}
                {expandedCategories[sectionIndex]?.[categoryIndex] ? (
                  <span className="text-gray-600">▲</span>
                ) : (
                  <span className="text-gray-600">▼</span>
                )}
              </h4>
              {expandedCategories[sectionIndex]?.[categoryIndex] &&
                renderItemCards(itemCards)}
            </div>
          )
        );
      })}
    </div>
  );

  const renderMenuSections = (card, index) => {
    const { title, itemCards, categories } = card.card.card;

    return (
      (itemCards?.length > 0 || categories?.length > 0) && (
        <div key={index} className="menu-section border-b border-gray-300 pb-6 mb-6">
          <h3
            className="text-2xl font-bold text-gray-800 cursor-pointer mb-4"
            onClick={() => toggleSection(index)}
          >
            {title} {expandedSections[index] ? "▲" : "▼"}
          </h3>
          {expandedSections[index] && (
            <>
              {categories
                ? renderCategories(categories, index)
                : renderItemCards(itemCards)}
            </>
          )}
        </div>
      )
    );
  };

  return (
    <div className="menu-container p-6 bg-gray-100 min-h-screen">
      <div className="restaurant-info flex flex-col lg:flex-row items-center mb-8">
        <img
          className="restaurant-logo w-32 h-32 object-cover rounded-full shadow-lg mb-4 lg:mb-0 lg:mr-6"
          src={IMAGE_URL + img_id}
          alt="Restaurant Logo"
        />
        <div className="restaurant-details flex-1 text-center lg:text-left">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-2">{name}</h2>
          <h3 className="text-2xl text-gray-600 mb-1">{city}</h3>
          <h4 className="text-xl text-gray-500 mb-2">{areaName}</h4>
          <div className="rating-and-delivery flex flex-col lg:flex-row justify-center lg:justify-start items-center mb-4">
            <div className="flex items-center mb-2 lg:mb-0 lg:mr-4">
              <div className="flex items-center space-x-2 bg-green-500 text-white py-1 px-3 rounded-lg shadow-md">
                <span className="text-xl">✪</span>
                <span className="text-lg font-semibold">{avgRating}</span>
              </div>
              <span className="text-gray-600 ml-2">{`(${totalRatingsString})`}</span>
            </div>
            <div className="restaurant-delivery-time text-gray-600">
              Delivery in {deliveryTime} mins
            </div>
          </div>
          <div className="restaurant-cost-for-two text-lg text-gray-800 mb-2">
            {costForTwoMessage}
          </div>
          <div className="restaurant-cuisines text-lg text-gray-700">
            Cuisines: {cuisines.join(", ")}
          </div>
        </div>
      </div>

      {carousel && (
        <div className="carousel-container overflow-x-auto mb-8">
          <div className="carousel flex space-x-4 pb-4">
            {carousel.map((item, index) => {
              const {
                name,
                description,
                imageId,
                category,
                price,
                defaultPrice,
                addons,
              } = item.dish.info;
              const value = price ?? defaultPrice;
              return (
                <div key={index} className="carousel-item bg-white rounded-lg shadow-lg p-4 flex-none w-60">
                  <img
                    className="carousel-item-image w-full h-32 object-cover rounded-md mb-2"
                    src={IMAGE_URL + imageId}
                    alt={name}
                  />
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">{name}</h4>
                  <p className="text-gray-600 mb-1">{description}</p>
                  <p className="text-gray-500 mb-1">{category}</p>
                  <p className="text-xl font-bold text-gray-900">₹{(value / 100).toFixed(2)}</p>
                  {addons?.length > 0 && (
                    <button
                      className="mt-2 bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600"
                      onClick={() => handleAddonsClick(addons)}
                    >
                      Add+
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      <h2 className="text-3xl font-bold text-gray-800 mb-4 cursor-pointer" onClick={handleMenuToggle}>
        Menu {showMenu ? "▲" : "▼"}
      </h2>

      {showMenu && (
        <>
          {cards.flatMap((card, index) => renderMenuSections(card, index))}
        </>
      )}

      {selectedAddons && (
        <div className="addons-modal-overlay fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="addons-modal bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg relative overflow-hidden">
            <button
              className="close-addons-button absolute top-2 right-2 text-gray-600 text-2xl"
              onClick={handleCloseAddons}
            >
              ✖
            </button>
            <h5 className="text-2xl font-bold text-gray-800 mb-4">Add-ons:</h5>
            <div className="addon-scroll-container h-80 overflow-y-auto pr-4">
              {selectedAddons.map((addon, addonIndex) => (
                <div key={addonIndex} className="addon-group mb-4">
                  <h6 className="text-xl font-semibold text-gray-700 mb-2">{addon.groupName}</h6>
                  <ul className="addon-choices list-disc pl-5">
                    {addon.choices.map((choice, choiceIndex) => (
                      <li key={choiceIndex} className="text-gray-600">
                        {choice.name}
                        {isNaN(choice.price)
                          ? " - Not Available"
                          : " - ₹" + choice.price / 100}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <button className="scroll-up-button absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full p-2">
              ▲
            </button>
            <button className="scroll-down-button absolute bottom-1/2 right-2 transform translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full p-2">
              ▼
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
