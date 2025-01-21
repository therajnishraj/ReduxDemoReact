import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_ITEM, REMOVE_ITEM } from "../utils/action/CartAction";

function Home() {
  const { count,loading } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  return (
    <div>
        <h1>{loading}</h1>

      <div>
      <h1 style={{color:"green"}}>Count: {count}</h1>
      <button onClick={() => dispatch({ type: ADD_ITEM ,addItemBy:5})}>Add 5</button>
      <button onClick={() => dispatch({ type: REMOVE_ITEM,removeItemBy:5 })}>Remove 5</button>
    </div>
    </div>
  );
}

export default Home;
