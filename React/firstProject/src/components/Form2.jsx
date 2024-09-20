import { useState } from "react";

export default function Form2() {
  const [name, setName] = useState({
    fName: "",
    mName: "",
    lName: "",
    city: "",
  });

  function afterButtonClicked(e) {
    e.preventDefault();
    console.log(name);
  }
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(e) => {
            setName({ ...name, fName: e.target.value });
          }}
          value={name.fName}
        />
        <input
          type="text"
          onChange={(e) => {
            setName({ ...name, mName: e.target.value });
          }}
          value={name.mName}
        />
        <input
          type="text"
          onChange={(e) => {
            setName({ ...name, lName: e.target.value });
          }}
          value={name.lName}
        />

        <input
          type="text"
          onChange={(e) => {
            setName({ ...name, city: e.target.value });
          }}
          value={name.city}
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
