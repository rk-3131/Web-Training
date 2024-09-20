import Footer from "./Footer";
import FormComponent from "./FormComponent";
import TodoList from "./TodoList";
import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ name: "", done: false });

  return (
    <div>
      <FormComponent
        todos={todos}
        setTodos={setTodos}
        todo={todo}
        setTodo={setTodo}
      />
      <TodoList todos={todos} setTodos={setTodos} todo={todo} setTodo = {setTodo} />
      <Footer todos={todos} />
    </div>
  );
}
