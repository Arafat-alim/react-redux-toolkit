const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamActions =
  require("./features/icrecream/iceCreamSlice").iceCreamActions;

const fetchUsers = require("./features/user/userSlice").fetchUsers;

console.log("Initial State: ", store.getState());

//! subscribe
const unsubscribe = store.subscribe(() =>
  console.log("Updated State: ", store.getState())
);
// const unsubscribe = store.subscribe(() => {});
//! dispatch the action - user
store.dispatch(fetchUsers());

//! dispatch the actions - for cakes
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());

// store.dispatch(cakeActions.restocked(3));

//! dispatch the actions - for icecreams
// store.dispatch(iceCreamActions.ordered(1));
// store.dispatch(iceCreamActions.ordered(2));
// store.dispatch(iceCreamActions.ordered(3));
// store.dispatch(iceCreamActions.restocked(6));

//! unsubscriber
// unsubscribe();
