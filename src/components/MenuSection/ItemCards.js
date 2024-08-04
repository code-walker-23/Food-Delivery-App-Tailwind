import React from "react";
import { IMAGE_URL } from "../../utils/constants";
import UserContex from "../../utils/UserContext";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../utils/cartSlice";

const ItemCards = ({ items, onAddonsClick }) => {
  const dispatch = useDispatch();
  console.log("Dispatch : ",dispatch);
  console.log("Add to Cart : ",addToCart);
  const handleAddItems = (item) => {
    dispatch(addToCart(item));
  };
  const { handleCart } = useContext(UserContex);
  return (
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
          ratings,
          isVeg,
        } = item.card.info;

        const value = price ?? defaultPrice;
        const rating = ratings?.aggregatedRating?.rating || "0";
        const ratingCount = ratings?.aggregatedRating?.ratingCount || "0";
        const ratingColor = rating >= 4 ? "bg-green-600" : "bg-yellow-600";

        return (
          <li
            key={itemIndex}
            className={`menu-item bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 ${
              !inStock ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <div className="flex flex-col">
              {/* Image Section */}
              <div className="relative">
                <img
                  className="w-full h-40 object-cover rounded-t-lg"
                  src={IMAGE_URL + imageId}
                  alt={name}
                />
                <div
                  className={`absolute top-2 left-2 bg-${
                    isVeg ? "green" : "red"
                  }-600 text-white text-xs py-1 px-2 rounded-full`}
                >
                  {isVeg ? "Veg" : "Non-Veg"}
                </div>
                <button
                  onClick={()=>handleAddItems(item)}
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white text-green-600 text-lg py-2 px-6 rounded-full shadow-lg border border-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition ease-in-out duration-300"
                >
                  Add to Cart
                </button>
                {/* Rating Badge */}
                {rating !== "0" && (
                  <div
                    className={`absolute top-2 right-2 ${ratingColor} text-white text-xs py-1 px-2 rounded-full flex items-center space-x-1`}
                  >
                    <span>{rating}</span>
                    <span>✪</span>
                    <span>({ratingCount})</span>
                  </div>
                )}
              </div>
              {/* Details Section */}
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">
                    {name}
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">{description}</p>
                  <p className="text-gray-500 text-sm mb-2">
                    Category: {category}
                  </p>
                  <p
                    className={`font-medium text-sm mb-2 ${
                      !inStock ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {inStock ? "Available" : "Out of Stock"}
                  </p>
                  <p className="text-xl font-bold text-gray-900 mb-3">
                    ₹{(value / 100).toFixed(2)}
                  </p>
                </div>
                {addons?.length > 0 ? (
                  <button
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white text-xs py-1 px-3 rounded-lg hover:bg-yellow-600 transition"
                    onClick={() => onAddonsClick(addons)}
                  >
                    Add-ons
                  </button>
                ) : (
                  <button
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs py-1 px-3 rounded-lg hover:bg-red-600 transition"
                    disabled
                  >
                    No Add-ons
                  </button>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemCards;

/*  

  onClick={handleAddItems} : It will call the handleAddItems function when the button is clicked.
  onClick={()=>handleAddItems(item)} : It will call the handleAddItems function with the item as an argument when the button is clicked.
  onClick={handleAddItems(item)} : It will call the handleAddItems function with the item as an argument when the button is rendered.




  Sure, let's break down the differences between these three ways of handling the `onClick` event in React:

1. **`onClick={handleAddItems}`**

   This approach directly assigns the `handleAddItems` function to the `onClick` event. When the button is clicked, `handleAddItems` will be called with no arguments. This is suitable when you don't need to pass any specific data or arguments to the function.

   ```jsx
   <button onClick={handleAddItems}>Add Item</button>
   ```

2. **`onClick={() => handleAddItems(item)}`**

   Here, an arrow function is used to create a new function that, when called, will invoke `handleAddItems` with `item` as an argument. This approach allows you to pass parameters to `handleAddItems` when the button is clicked.

   ```jsx
   <button onClick={() => handleAddItems(item)}>Add Item</button>
   ```

   This is useful if `handleAddItems` needs specific data from the context in which it’s called, like the `item` in this example.

3. **`onClick={handleAddItems(item)}`**

   This syntax is incorrect for handling event handlers in React. It will immediately call `handleAddItems` with `item` as soon as the component renders, not when the button is clicked. It’s like trying to assign the result of the function call (which is likely `undefined` unless `handleAddItems` explicitly returns something) to `onClick`, rather than passing the function itself.

   ```jsx
   <button onClick={handleAddItems(item)}>Add Item</button>
   ```

   This will lead to the function executing immediately during rendering, rather than on a button click.

### Summary

- **`onClick={handleAddItems}`**: Calls `handleAddItems` with no arguments on button click.
- **`onClick={() => handleAddItems(item)}`**: Calls `handleAddItems` with `item` as an argument on button click.
- **`onClick={handleAddItems(item)}`**: Incorrect. Executes `handleAddItems` immediately during rendering, not on button click.

In general, use the first approach for functions that don’t need parameters, and the second approach when you need to pass arguments to the function on a click event. Avoid the third approach unless you want to execute the function immediately for some reason (which is not typical for event handling).

*/
