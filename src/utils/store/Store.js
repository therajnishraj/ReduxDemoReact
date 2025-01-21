import { combineReducers, createStore } from "redux";
import { addAndRemoveItemReducer } from "../reducer/CartReducer";
import rootReducer from "../reducer";

// const store = createStore(addAndRemoveItemReducer);
const store = createStore(rootReducer);
export default store;