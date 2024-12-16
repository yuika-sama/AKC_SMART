// src/slice/leftMenuSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const leftMenuSlice = createSlice({
  name: "leftMenu",
  initialState,
  reducers: {
    toggleSubMenu: (state, action) => {
      const key = action.payload;

      if (state[key]) {
        state[key] = false; // Đóng menu hiện tại
      } else {
        for (const itemKey in state) {
          state[itemKey] = false;
        }
        state[key] = true; // Mở menu hiện tại
      }
    },
  },
});

export const { toggleSubMenu } = leftMenuSlice.actions;
export default leftMenuSlice.reducer;
