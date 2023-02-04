import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/Cake/cakeSlice";
import iceCreamReducer from "../features/Icecream/icecreamSlice";
import userReducer from "../features/User/userSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: iceCreamReducer,
    user: userReducer,
  },
});

export default store;
