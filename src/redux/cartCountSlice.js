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
  },
});

export const { updateCartCount, incrementCartCount, decrementCartCount } =
  cartCountSlice.actions;

export default cartCountSlice.reducer;
