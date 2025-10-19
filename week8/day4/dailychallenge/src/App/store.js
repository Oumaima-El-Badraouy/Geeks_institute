import { configureStore } from "@reduxjs/toolkit";
import ageReducer from "../Age/ageSlice";

export const store = configureStore({
  reducer: {
    age: ageReducer,
  },
});

export default store;