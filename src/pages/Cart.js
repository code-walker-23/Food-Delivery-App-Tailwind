import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemList from "../components/ItemList"; // Adjust the path as necessary
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items || []);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-container min-h-screen bg-gray-200 py-10 px-6 sm:px-8 lg:px-12">
      <header className="mb-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-3">Your Cart</h2>
        <p className="text-lg text-gray-600 mb-6">
          Review your selected items and proceed to checkout. Don't forget to review your selections before finalizing.
        </p>
        <button
          onClick={handleClearCart}
          className="bg-red-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-red-700 transition-colors duration-300 text-lg font-semibold"
        >
          Clear Cart
        </button>
      </header>
      <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-6">
        {cartItems.length > 0 ? (
          <ItemList items={cartItems} />
        ) : (
          <p className="text-center text-gray-700 text-xl font-medium">Your cart is empty.</p>
        )}
      </div>
      <footer className="mt-10 text-center">
        <p className="text-gray-600 text-sm">
          Need help? <a href="/main/contact" className="text-blue-600 hover:underline">Contact us</a>
        </p>
      </footer>
    </div>
  );
};

export default Cart;













/*
working
import React from "react";
import { useSelector } from "react-redux";
import ItemList from "../components/ItemList"; // Adjust the path as necessary
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items || []);
  const dispatch = useDispatch();
  // const handleClearCart = () => {}

  return (
    <div className="cart-container min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <header className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Your Cart</h2>
        <p className="text-lg text-gray-600">Review your selected items and proceed to checkout.</p>
        <button onClick={()=>dispatch(clearCart())}>Clear Cart</button>
      </header>
      <div className="bg-white shadow-md rounded-lg p-6">
        {cartItems.length > 0 ? (
          <ItemList items={cartItems} />
        ) : (
          <p className="text-center text-gray-700">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
 */