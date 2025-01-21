import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_ITEM, REMOVE_ITEM } from "../utils/action/CartAction";

const About = () => {
    const {count} = useSelector((state) => state.cartReducer);
    const dispatch = useDispatch();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: ADD_ITEM,addItemBy: 2 })}>Add2</button>
      <button onClick={() => dispatch({ type: REMOVE_ITEM,removeItemBy: 2 })}>Remove 2</button>
    </div>
  );
};

export default About;
