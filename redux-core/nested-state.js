const redux = require("redux");
const produce = require("immer").produce;

//! state
const initialState = {
  name: "Arafat",
  address: {
    street: "Topsia",
    city: "Kolkata",
    state: "West Bengal",
  },
};

//! creating constants
const STREET_UPDATED = "STREET_UPDATED";

//! action creator
const streetUpdate = (address) => {
  return {
    type: STREET_UPDATED,
    payload: address,
  };
};

//! reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

//! creating a store
const store = redux.createStore(reducer);
console.log("Initial State: ", store.getState());
//! unsubscribe
const unsubscribe = store.subscribe(() =>
  console.log("Updated State: ", store.getState())
);
store.dispatch(streetUpdate("Hyderabad"));
unsubscribe();
