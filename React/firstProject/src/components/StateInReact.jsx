import { useState } from "react";

export default function StateInReact() {
  // The state of the function is declared just like the way below
  const [count, setValue] = useState(0);
  const [changeBy, changeChangeBy] = useState(1);

  function incr() {
    setValue(count + changeBy);
  }

  function decr() {
    setValue(count - changeBy);
  }

  function dbl() {
    setValue(count * changeBy);
  }

  function hlf() {
    setValue(count / changeBy);
  }

  function incTheChange() {
    changeChangeBy(changeBy + 1);
  }

  function decTheChange() {
    changeChangeBy(changeBy - 1);
  }

  function resetbtn() {
    setValue(0);
    changeChangeBy(1);
  }
  return (
    <div>
      <h1>We are changing the values by {changeBy}</h1>
      <button onClick={incTheChange}>Increase the change by</button>
      <button onClick={decTheChange}>Decrease the change by</button>

      <h1>The Count value is {count}</h1>
      <button onClick={incr}>Increment by {changeBy}</button>
      <button onClick={decr}>Decrement by {changeBy}</button>
      <button onClick={dbl}>Grow by {changeBy}</button>
      <button onClick={hlf}>Reduce by {changeBy}</button>
      <br />
      <button onClick={resetbtn}>Reset</button>
    </div>
  );
}
