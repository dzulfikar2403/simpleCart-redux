import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  const getData = await axios.get("https://course-api.com/react-tours-project");
  const resp = await getData.data;

  return resp;
});

const initialState = {
  cards: [],
  cart: [],
  total: 0,
  isLoading: true,
  error: null,
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductsById: (state, action) => {
      const matchData = state.cards.filter((el) => el.id === action.payload);
      state.cards.map((el) => (el.amount = 1));

      const findCart = state.cart.find((el) => el.id === action.payload);
      if (findCart !== undefined) {
        findCart.amount += 1;
      } else {
        state.cart.push(...matchData);
      }
    },
    increment: (state, action) => {
      state.cart.filter((el) => {
        if (el.id === action.payload) {
          el.amount += 1;
        }
      });
    },
    decrement: (state, action) => {
      state.cart.filter((el) => {
        if (el.id === action.payload) {
          el.amount < 1 ? false : (el.amount -= 1);
        }
      });
    },
    totalAmount: (state) => {
      let resTotal = 0;
      let newNum;
      state.cart.map((el) => {
        newNum = el.price.replace(",", ".");
        resTotal += parseFloat(newNum) * el.amount;
      });
      state.total = resTotal;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.cards = action.payload;
    });
  },
});

export const { getProductsById, increment, decrement, totalAmount } = ProductSlice.actions;
export default ProductSlice.reducer;
