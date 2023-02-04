import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../Cake/cakeSlice";

//! initial State
const initialState = {
  noOfIceCream: 20,
};

//! creating reducers and actions
const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.noOfIceCream--;
    },
    restocked: (state, action) => {
      state.noOfIceCream += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.noOfIceCream--;
    });
  },
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
