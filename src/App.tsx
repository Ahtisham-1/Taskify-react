import InputField from "./Components/InputField";
import React, { useState } from "react";
import type { TodoModel } from "./Model";
import TodoList from "./Components/TodoList";
function App() {
  const [todo, setTodo] = useState<string>("");
  const [todoArray, setTodoArray] = useState<TodoModel[]>([]);

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();

    setTodoArray([...todoArray, { id: Date.now(), todo, isDone: false }]);
    setTodo("");
  }
  // console.log(todoArray);
  return (
    <div>
      <h1>TASKIFY!</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todoArray={todoArray} setTodoArray={setTodoArray} />
    </div>
  );
}

export default App;
