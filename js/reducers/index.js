import { combineReducers } from "redux";
import * as AuthReducer from "./auth";

export default combineReducers(
  Object.assign(AuthReducer)
);
