import { createSlice } from "@reduxjs/toolkit";

//! initial State
const initialState = {
  noOfCake: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.noOfCake--;
    },
    restocked: (state, action) => {
      state.noOfCake += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
