import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import atmSlice from "./atmSlice";
const store = configureStore({
  reducer: {
    counter: counterSlice,
    atm: atmSlice,
  },
});
export default store;
