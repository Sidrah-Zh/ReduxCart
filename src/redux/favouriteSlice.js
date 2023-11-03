import { createSlice } from "@reduxjs/toolkit";

const fvrtlistSlice = createSlice({
  name: "fvrtlist",
  initialState: [],
  reducers: {
    setfvrtlist: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { setfvrtlist } = fvrtlistSlice.actions;
export default fvrtlistSlice.reducer;
