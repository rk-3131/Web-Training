import { useEffect, useState } from "react";
import styles from "./input.module.css";
const url = "https://api.spoonacular.com/recipes/complexSearch";
const apiKey = "4b98a20e6f044e7e8ffec8877128f01d";
export default function Input({ food, foodChanger, isLoading, setIsLoading }) {
  const [inp, changeInput] = useState("pizza");
  //   useEffect takes tow parameters
  //  first is what shoul happen and second is array of component to be considered for the change to happen
  useEffect(() => {
    async function fetchFood() {
      setIsLoading(true);
      const response = await fetch(`${url}?query=${inp}&apiKey=${apiKey}`);
      const data = await response.json();
      foodChanger(data.results);
      setIsLoading(false);
      console.log(data.results);
    }
    fetchFood();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch(`${url}?query=${inp}&apiKey=${apiKey}`);
    const data = await response.json();
    console.log(data.results);
    setIsLoading(false);
    foodChanger(data.results);
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
