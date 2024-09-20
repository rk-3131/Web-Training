import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered } from "./cakeSlice";
import { restocked } from "./cakeSlice";

export const CakeView = () => {
  const cake = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  const [val, setVal] = useState(1);
  return (
    <div>
      <h2>Number of cakes {cake}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <br />
      <input
        type="number"
        value={val}
        onChange={(e) => setVal(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(val))}>Restock Cake</button>
    </div>
  );
};
