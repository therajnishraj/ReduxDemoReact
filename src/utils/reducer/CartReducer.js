import { ADD_ITEM, REMOVE_ITEM } from "../action/CartAction";

const initialState = { count: 0 };

export function addAndRemoveItemReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, count: state.count + action.addItemBy };
    case REMOVE_ITEM:
      return { ...state, count: state.count - action.removeItemBy };
    default:
      return state;
  }
}
