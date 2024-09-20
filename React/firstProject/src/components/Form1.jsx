import { useState } from "react";

export default function Form1() {
  const [fName, fNameChange] = useState("");
  const [mName, mNameChange] = useState("");
  const [lName, lNameChange] = useState("");
  function onFnameChange(e) {
    // console.log(e.target.value);
    fNameChange(e.target.value);
  }
  function onmNameChange(e) {
    mNameChange(e.target.value);
  }
  function afterButtonClicked(e) {
    e.preventDefault();
    console.log(fName);
    console.log(mName);
    console.log(lName);
    alert("Hello"+ fName);
  }
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={function (e) {
            return onFnameChange(e);
          }}
          value={fName}
        />
        <input
          type="text"
          onChange={(e) => {
            return onmNameChange(e);
          }}
          value={mName}
        />
        <input
          type="text"
          onChange={(e) => {
            return lNameChange(e.target.value);
          }}
          value={lName}
        />
        <button
          onClick={(e) => {
            return afterButtonClicked(e);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
