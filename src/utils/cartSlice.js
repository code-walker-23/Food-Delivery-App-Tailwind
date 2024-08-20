import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      // mutating the state here
      state.items.push(action.payload);
      console.log("action.payload", action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      // state.items.pop();
    },
    clearCart: () => {
      return { items: [] };
    },
  },
});

console.log("CartSlice", cartSlice);

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
