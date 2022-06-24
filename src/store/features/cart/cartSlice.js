import { createSlice } from "@reduxjs/toolkit";
import { getCartProducts } from "./cartThunk";

const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalItems: 0,
  isLoading: true,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.totalPrice = total;
      state.totalItems = amount;
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      state.totalItems -= 1;
    },

    increaseAmount: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount += 1;
    },
    decreaseAmount: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount -= 1;
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalPrice = 0;
      state.totalItems = 0;
    },
  },
  extraReducers: {
    [getCartProducts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCartProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartProducts.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(state.error);
    },
  },
});

export default cartSlice.reducer;
export const {
  calculateTotals,
  removeFromCart,
  increaseAmount,
  decreaseAmount,
  clearCart,
  setCart,
  setIsLoading,
  setError,
} = cartSlice.actions;
