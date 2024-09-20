import { useEffect, useState } from "react";
import styles from "./input.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import JsonData from "../Utils/JsonData";
import { setFoodItems } from "../redux/actions/foodActions";

const url = "https://api.spoonacular.com/recipes/complexSearch";
const apiKey = "4b98a20e6f044e7e8ffec8877128f01d";

function Input() {
  const [inp, changeInput] = useState("pizza");

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${url}?query=${inp}&apiKey=${apiKey}`);
      const data = await response.json();
      console.log(data.results);
      dispatch(setFoodItems(data.results));
    }
    // fetchFood();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(`${url}?query=${inp}&apiKey=${apiKey}`);
    const data = await response.json();
    console.log(data.results);
    dispatch(setFoodItems(data.results));
  }
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          className={styles.textInp}
          type="text"
          value={inp}
          onChange={(e) => {
            changeInput(e.target.value);
          }}
        />
        <button
          className={styles.btn}
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Input;
