const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreator = redux.bindActionCreators;
const combineReducer = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

//! importing redux-logger middleware
const logger = require("redux-logger").createLogger();

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICRECREAM_RESTOCKED = "ICRECREAM_RESTOCKED";

//! creating an action creator
function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function reStock(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

function iceCreamOrder(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

function iceCreamRestock(qty = 1) {
  return {
    type: ICRECREAM_RESTOCKED,
    payload: qty,
  };
}
//! creating a store
const initialCakeState = {
  noOfCake: 10,
  //   anotherProperty: 0,
};

const initialIceCreamState = {
  noOfIceCream: 20,
};
//! (prevState, action) => newState
function iceCreamReducer(state = initialIceCreamState, action) {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        noOfIceCream: state.noOfIceCream - action.payload,
      };
    case ICRECREAM_RESTOCKED:
      return {
        ...state,
        noOfIceCream: state.noOfIceCream + action.payload,
      };
    default:
      return state;
  }
}

//! creating a cake reducers (pure function)
function cakeReducer(state = initialCakeState, action) {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        noOfCake: state.noOfCake - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        noOfCake: state.noOfCake + action.payload,
      };
    default:
      return state;
  }
}

//! creating a combine reducers
const rootReducer = combineReducer({
  cakeReducer,
  iceCreamReducer,
});

//! creating a redux store
const store = createStore(rootReducer, applyMiddleware(logger));

//! getting the state
console.log("Initial State: ", store.getState());

//! subscribe
// const unsubscribe = store.subscribe(() =>
//   console.log("Updated State: ", store.getState())
// );

const unsubscribe = store.subscribe(() => {});

//! dispatch methods calling
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(reStock(3));

//! bind action creator
const actions = bindActionCreator({ orderCake, reStock }, store.dispatch);

actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.reStock(3);

//! calling the unsubscribe
unsubscribe();

//! After unsubscribe method, the state wont change .
store.dispatch(orderCake());
