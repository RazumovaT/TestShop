import { createSlice } from "@reduxjs/toolkit";
import { CartDataList } from "../types/products/productsTypes";

const initialState = {
  items: [] as CartDataList,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ product: action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload
      );
    },
    addPieceToCart: (state, action) => {
      state.items = state.items.map((item) =>
        item.product.id === action.payload
          ? { ...item, quantity: (item.quantity += 1) }
          : item
      );
    },
    subtractPieceFromCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.product.id !== action.payload
          );
        }
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addPieceToCart,
  subtractPieceFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
