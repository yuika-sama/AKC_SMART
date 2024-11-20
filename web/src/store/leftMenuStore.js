import { configureStore } from '@reduxjs/toolkit';
import leftMenuReducer from '../slice/leftMenuSlice.js';
export const leftMenustore = configureStore({
  reducer: {
    menu: leftMenuReducer
  }
});

