import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducers";
import courseReducer from "./courseReducer";
import cartReducer from "./cartReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  courses: courseReducer,
  cartItem : cartReducer,
});

export default rootReducer;
