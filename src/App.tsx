import InputField from "./Components/InputField";
import { useState } from "react";
// import type { TodoModel } from "./Model";

function App() {
  const [todo, setTodo] = useState<string>("");
  // const [todos, setTodos] = useState<TodoModel[]>([]);
  return (
    <div>
      <h1>TASKIFY!</h1>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
