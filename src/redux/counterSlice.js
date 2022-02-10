import { createSlice } from "@reduxjs/toolkit";

const withdrawalCounterSlice = createSlice({
  name: "withdrawal",
  initialState: {
    count: 1000,
  },

  reducers: {
    decrement100: (state) => {
      state.count -= 100;
    },
    decrement200: (state) => {
      state.count -= 200;
    },
    decrement500: (state) => {
      state.count -= 500;
    },
    decrement1000: (state) => {
      state.count -= 1000;
    },
    increment100: (state) => {
      state.count += 100;
    },
    increment200: (state) => {
      state.count += 200;
    },
    increment500: (state) => {
      state.count += 500;
    },
    increment1000: (state) => {
      state.count += 1000;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const {
  decrement100,
  decrement200,
  decrement500,
  decrement1000,
  increment100,
  increment200,
  increment500,
  increment1000,
  reset,
} = withdrawalCounterSlice.actions;

export default withdrawalCounterSlice.reducer;
