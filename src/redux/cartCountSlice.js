import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const cartCountSlice = createSlice({
  name: "cartCount",
  initialState,
  reducers: {
    updateCartCount: (state, action) => {
      return state + action.payload;
    },
    incrementCartCount: (state) => {
      return state + 1;
    },
    decrementCartCount: (state) => {
      if (state > 0) {
        return state - 1;
      }
      return state;
    },
    resetCartCount: (state) => {
      return 0;
    },
  },
});

export const {
  updateCartCount,
  incrementCartCount,
  decrementCartCount,
  resetCartCount,
} = cartCountSlice.actions;

export default cartCountSlice.reducer;
