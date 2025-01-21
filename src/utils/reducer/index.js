import { combineReducers } from "redux";
import { cartReducer } from "./CartReducer";
import { notesReducer } from "./NoteReducer";

/* export default combineReducers({
    addAndRemoveItemReducer
});
 */

const rootReducer = combineReducers({
    cartReducer,
    notesReducer // combine the reducer as a slice of the state
  });
  
  export default rootReducer;