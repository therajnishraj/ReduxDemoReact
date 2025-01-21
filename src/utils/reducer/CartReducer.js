import { ADD_ITEM, REMOVE_ITEM } from "../action/ActionType";

const initialState = { count: 0, loading:"OK" };

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, count: state.count + action.addItemBy };
    case REMOVE_ITEM:
      return { ...state, count: state.count - action.removeItemBy };
    default:
      return state;
  }
}
