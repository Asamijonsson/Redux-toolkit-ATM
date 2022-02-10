import { createSlice } from "@reduxjs/toolkit";

const atmSlice = createSlice({
  name: "atm",
  initialState: {
    atm: false,
  },
  reducers: {
    toggleAtm: (state) => {
      state.atm = !state.atm;
    },
  },
});
export const { toggleAtm } = atmSlice.actions;
export default atmSlice.reducer;
