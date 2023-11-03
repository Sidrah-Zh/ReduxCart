import { createSlice } from "@reduxjs/toolkit";

const favoritesCountSlice = createSlice({
  name: "favoritesCount",
  initialState: 1,
  reducers: {
    incrementFavoritesCount: (state) => state + 1,
  },
});

export const { incrementFavoritesCount } = favoritesCountSlice.actions;

export default favoritesCountSlice.reducer;
