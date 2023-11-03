import { configureStore } from "@reduxjs/toolkit";
import cartCountReducer from "./cartCountSlice";
import cartReducer from "./cartSlice";
import favoritesCountReducer from "./fvrtCountSlice";
import searchReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    cart: cartReducer,
    cartCount: cartCountReducer,
    favoritesCount: favoritesCountReducer,
  },
});

export default store;
