import { configureStore } from "@reduxjs/toolkit";
import cartCountReducer from "./cartCountSlice";
import cartReducer from "./cartSlice";
import favoritesCountReducer from "./fvrtCountSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartCount: cartCountReducer,
    favoritesCount: favoritesCountReducer,
  },
});

export default store;
