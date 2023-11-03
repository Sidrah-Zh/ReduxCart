import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],

  total: 0,
  subtotal: 0,
};

const calculateSubtotalForItem = (item) => {
  return item.newPrice * item.quantity;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      item.quantity = 1;
      item.subTotal = item.newPrice;
      state.items.push(item);
    },
    addMultipleToCart: (state, action) => {
      action.payload.forEach((item) => {
        item.quantity = 1;
        item.subTotal = item.newPrice;
      });
      state.items.push(...action.payload);
    },
    updateQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.quantity = quantity;
        item.subTotal = item.newPrice * quantity;
      }
    },
    calculateSubtotal: (state) => {
      state.subtotal = state.items.reduce(
        (total, item) => total + item.subTotal,
        0
      );
    },

    removeFromCart: (state, action) => {
      const itemToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== itemToRemove.id);
    },
    removeAllFromCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  removeAllFromCart,
  updateQuantity,
  addMultipleToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
