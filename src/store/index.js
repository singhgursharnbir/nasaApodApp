import { createStore, applyMiddleware } from "redux";
import allReducers from "../reducers/index";
import thunk from "redux-thunk";

const initialState = {};

const middleWare = [thunk];

const store = createStore(
  allReducers,
  initialState,
  applyMiddleware(...middleWare)
);

export default store;
