import { combineReducers } from "redux";
import { cartReducer } from "./CartReducer";

/* export default combineReducers({
    addAndRemoveItemReducer
});
 */

const rootReducer = combineReducers({
    cartReducer, // combine the reducer as a slice of the state
  });
  
  export default rootReducer;