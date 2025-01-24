import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  cartCount: 0,
  uniqueProductCount: 0,
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

      const existingItem = state.items.find((i) => i.id === item.id);

      if (!existingItem) {
        item.quantity = 1;
        item.subTotal = item.newPrice;
        item.addedToCart = true;
        state.items.push(item);
        state.cartCount++;
      }

      state.cartCount++;
    },
    addMultipleToCart: (state, action) => {
      action.payload.forEach((item) => {
        const existingItem = state.items.find((i) => i.id === item.id);

        if (!existingItem) {
          item.quantity = 1;
          item.subTotal = item.newPrice;
          item.addedToCart = true;
          state.items.push(item);
          state.uniqueProductCount++;
        }

        state.cartCount += item.quantity;
      });
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
