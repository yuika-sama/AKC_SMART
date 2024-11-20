// src/slice/leftMenuSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const leftMenuSlice = createSlice({
  name: "leftMenu",
  initialState,
  reducers: {
    toggleSubMenu: (state, action) => {
      const key = action.payload;

      // Nếu sub-menu đang mở, đóng nó, nếu không thì mở và đóng tất cả các menu khác
      if (state[key]) {
        state[key] = false; // Đóng menu hiện tại
      } else {
        // Đóng tất cả các menu khác và mở menu hiện tại
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
