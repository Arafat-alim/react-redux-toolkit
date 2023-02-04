//! importing createSlice from the redux toolkit
const createSlice = require("@reduxjs/toolkit").createSlice;

//! state
const initialState = {
  numOfCake: 10,
};

//! creating createSlice
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      //! direclty mutable the state
      state.numOfCake--;
    },
    restocked: (state, action) => {
      //! directly mutable the state
      state.numOfCake += action.payload;
    },
  },
});

//! exporting the reducers and action creators(created by slice method)
module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
