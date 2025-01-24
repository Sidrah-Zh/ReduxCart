import { configureStore } from "@reduxjs/toolkit";
import { persistedReducer } from "./persistConfig";
import cartCountReducer from "./cartCountSlice";
import cartReducer from "./cartSlice";
import favoritesCountReducer from "./fvrtCountSlice";
import searchReducer from "./searchSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  search: searchReducer,
  cart: cartReducer,
  cartCount: cartCountReducer,
  favoritesCount: favoritesCountReducer,
});

const store = configureStore({
  reducer: persistedReducer(rootReducer),
});

export default store;
