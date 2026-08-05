import React from "react";
import type { TodoModel } from "../Model";
import SingleTodo from "./SingleTodo";

interface Props {
  todoArray: TodoModel[];
  setTodoArray: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}
function TodoList({ todoArray, setTodoArray }: Props) {
  return (
    <section className="todo-list-card">
      {todoArray.length === 0 ? (
        <div className="empty-state">No tasks yet. Add something to get started.</div>
      ) : (
        <ul className="todo-list">
          {todoArray.map((todo) => (
            <SingleTodo
              todo={todo}
              key={todo.id}
              todoArray={todoArray}
              setTodoArray={setTodoArray}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default TodoList;
