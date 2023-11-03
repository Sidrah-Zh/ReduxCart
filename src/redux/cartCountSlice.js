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
  },
});

export const { updateCartCount, incrementCartCount } = cartCountSlice.actions;

export default cartCountSlice.reducer;
