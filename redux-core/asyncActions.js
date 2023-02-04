//! creating a state
const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const thunkMiddleware = require("redux-thunk").default;

const axios = require("axios");

const initialState = {
  loading: false,
  data: [],
  error: "",
};

//! actions constants
const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

//! action creators
//! fetch user Request
const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};
//! fetch user Success
const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

//! fetch user Failure
const fetchUserFailure = (err) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: err,
  };
};

//! creating a reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_USER_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

//! fetching apis
//! Async Action creator return a function
function fetchUser() {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        //! response.data is the users
        const users = response.data.map((item) => item.id);
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        //! error,message is the error message
        dispatch(fetchUserFailure(error.message));
      });
  };
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchUser());
