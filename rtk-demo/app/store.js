const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
const iceCreamReducer = require("../features/icrecream/iceCreamSlice");
const userReducer = require("../features/user/userSlice");
// const reduxLogger = require("redux-logger");
// const logger = reduxLogger.logger;

//! creating a store
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: iceCreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(logger),
});

module.exports = store;
