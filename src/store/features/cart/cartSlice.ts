import { createSlice } from "@reduxjs/toolkit";
import { getCartProducts } from "./cartThunk";

export type CartItemType = {
  id: string,
  title: string
  price: string,
  img: string,
  amount: number
}
export type CartStateType = {
  cartItems: CartItemType[] | [],
  totalPrice: number,
  totalItems: number,
  isLoading: boolean,
  error: object | null
}

const initialState: CartStateType = {
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
        let price: number = Number.parseFloat(item.price);
        amount += item?.amount;
        total += item?.amount * price;
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
      cartItem!.amount += 1;
    },
    decreaseAmount: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem!.amount -= 1;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.totalItems = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartProducts.pending,
      (state) => {
        state.isLoading = true;
      });
    builder.addCase(getCartProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    });
    builder.addCase(getCartProducts.rejected, (state) => {
      state.isLoading = false
    })

  }
});

export default cartSlice.reducer;
export const {
  calculateTotals,
  removeFromCart,
  increaseAmount,
  decreaseAmount,
  clearCart,
} = cartSlice.actions;
