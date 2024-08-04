import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
console.log("AppStore",appStore);
export default appStore;

/* 

reducer is an object that contains all the reducers that we have in our application.
reducer is containing small reducers that we have in our application.
for eg. cartReducer is a small reducer that we have in our application. 


*/