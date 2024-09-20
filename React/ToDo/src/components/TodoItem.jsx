import styles from "./TodoItem.module.css";

export default function TodoItem({ item, todos, setTodos, todo, setTodo }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleComplete(item) {
    const newArray = todos.map((el) =>
      el.name === item ? { ...el, done: !el.done } : el
    );
    console.log(newArray);
    setTodos(newArray);
  }

  function handleEdit(item) {
    console.log("Edit " + item.name);
    setTodo({ name: item.name, done: item.done });

    setTodos(todos.filter((todo) => todo !== item));
  }
  const varClassName = item.done ? styles.lt : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span
          className={varClassName}
          onClick={() => {
            handleComplete(item.name);
          }}
        >
          {item.name}
        </span>
        <span>
          <button
            onClick={() => {
              handleEdit(item);
            }}
            className={styles.editButton}
          >
            Edit
          </button>
        </span>
        <span>
          <button
            onClick={() => {
              handleDelete(item);
            }}
            className={styles.deleteButton}
          >
            X
          </button>
        </span>
      </div>
    </div>
  );
}
