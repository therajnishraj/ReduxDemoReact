import { createStore } from "redux";
import { addAndRemoveItemReducer } from "../reducer/CartReducer";

const cartStore = createStore(addAndRemoveItemReducer);
export default cartStore;