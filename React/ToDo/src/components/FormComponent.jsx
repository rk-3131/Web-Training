import { useState } from "react";
import styles from "./formComponent.module.css";

export default function FormComponent({ todos, setTodos, todo, setTodo }) {
  // const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    const isPresent = todos.some((el) => el.name === todo.name);
    if (isPresent) {
      setTodo({ name: "", done: false });
      alert("Task already exist");
      return;
    }
    if (todo.name === "" || todo.name === null) {
      alert("Task can't be empty");
      return;
    }
    // here the console was getting executed asyncronously and hence we were getting the late output in the array but after printing the console at the end of the form we got the output correctly
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <div className={styles.formDiv}>
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setTodo({ name: e.target.value, done: false });
          }}
          type="text"
          value={todo.name}
          placeholder="Enter the task here....."
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}
