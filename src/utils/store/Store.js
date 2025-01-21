import { applyMiddleware, combineReducers, createStore } from "redux";
import { addAndRemoveItemReducer } from "../reducer/CartReducer";
import rootReducer from "../reducer";
import {thunk} from "redux-thunk";

// const store = createStore(addAndRemoveItemReducer);
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;