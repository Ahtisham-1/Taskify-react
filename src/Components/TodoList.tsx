import React from "react";
import type { TodoModel } from "../Model";
import SingleTodo from "./SingleTodo";

interface Props {
  todoArray: TodoModel[];
  setTodoArray: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}
function TodoList({ todoArray, setTodoArray }: Props) {
  return (
    <div>
      <ul>
        {todoArray.map((todo) => (
          <SingleTodo
            todo={todo}
            key={todo.id}
            todoArray={todoArray}
            setTodoArray={setTodoArray}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
