import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";
import modalSlice from "./reducers/modalSlice";

const Store = configureStore({
  reducer:{
    productSlice,
    modalSlice
  }
});

export default Store;