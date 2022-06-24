import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const productsUrl = process.env.REACT_APP_PRODUCTS_URL;

export const getCartProducts = createAsyncThunk("cart/getProducts", async (_, thunkAPI) => {
  try {
    const response = await axios(productsUrl);
    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue("Something went wrong!");
  }
});
