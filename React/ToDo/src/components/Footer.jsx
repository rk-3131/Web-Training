import styles from "./footer.module.css";

export default function Footer({ todos }) {
  const taskCount = todos.length;

  let count = todos.filter((todo) => todo.done).length;
  // for (let i = 0; i < todos.length; i++) {
  //   if (todos[i].done) {
  //     count++;
  //   }
  // }
  return (
    <div className={styles.mainContainer}>
      <h3>Total Tasks: {taskCount}</h3>
      <h3>Tasks Completed: {count}</h3>
    </div>
  );
}
