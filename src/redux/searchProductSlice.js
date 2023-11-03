import { createSlice } from "@reduxjs/toolkit";

const initialSearching = {
  searching: false,
};

const initialSearchState = {
  products: [],
};

const searchProductsSlice = createSlice({
  name: "searchProducts",
  initialState: initialSearchState,
  reducers: {
    setSearchProducts: (state, action) => {
      return { ...state, products: action.payload };
    },
  },
});

const searchState = createSlice({
  name: "searchStatus",
  initialState: initialSearching,
  reducers: {
    setSearchStatus: (state, action) => {
      state.searching = action.payload;
    },
  },
});

export const { setSearchProducts } = searchProductsSlice.actions;
export const { setSearchStatus } = searchState.actions;
export const searchReducer = searchProductsSlice.reducer;
export const searchStateReducer = searchState.reducer;
