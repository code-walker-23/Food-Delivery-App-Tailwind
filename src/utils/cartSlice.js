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
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      // state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
      // state.items.length = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;


/* Behind the scenes 

it will create an cartSlice object: 
{

  actions: {addToCart: ƒ, removeFromCart: ƒ, clearCart: ƒ},
  caseReducers: {addToCart: ƒ, removeFromCart: ƒ, clearCart: ƒ},
  extraReducers: undefined,
  name: "cart",
  reducer: ƒ (state, action),
  type: "Slice"

}







*/