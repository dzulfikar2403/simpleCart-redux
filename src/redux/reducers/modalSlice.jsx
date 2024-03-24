import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setOpen } = modal.actions;
export default modal.reducer;
