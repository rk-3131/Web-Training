import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyItem, restock } from "./icecreamSlice";

export const IcecreamView = () => {
  const icecream = useSelector((state) => state.icecream.numOfIceCream);
  const dispatch = useDispatch();
  const [val, setVal] = useState(1);
  return (
    <div>
      <h1>Number of Ice-cream {icecream}</h1>
      <button onClick={() => dispatch(buyItem())}>Order Icecream</button>
      <br />
      <input
        type="number"
        value={val}
        onChange={(e) => setVal(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restock(val))}>Restock Icecream</button>
    </div>
  );
};
