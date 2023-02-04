//! importing the redux toolkit for createSlice method
const createSlice = require("@reduxjs/toolkit").createSlice;
const { cakeActions } = require("../cake/cakeSlice");

//! creating a state
const initialState = {
  numOfIceCream: 20,
};

//! creating an icecreamSlice
const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfIceCream -= action.payload;
    },
    restocked: (state, action) => {
      state.numOfIceCream += action.payload;
    },
  },
  // extraReducers: {
  //   ["cake/ordered"]: (state) => {
  //     state.numOfIceCream--;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIceCream--;
    });
  },
});

//! exporting the reducers and action creator
module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
