import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const initalState = {};
const middleware = [thunk]; //each individual middleware element is passed to the createStore method using the spread operator

// using the spread
const store = createStore(
  rootReducer,
  initalState,
  applyMiddleware(...middleware)
);

export default store;
