import React from "react";
import type { TodoModel } from "../Model";

import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import TodoList from "./TodoList";

interface Props {
  todo: TodoModel;
  todoArray: TodoModel[];
  setTodoArray: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}
function SingleTodo({ todo, todoArray, setTodoArray }: Props) {
  function handleDone(id: number) {
    setTodoArray(
      todoArray.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  }

  function handleDelete(id: number) {
    setTodoArray(todoArray.filter((todo) => todo.id !== id));
  }

  
  return (
    <form>
      {todo.isDone ? (
        <s className="icon__buttons">{todo.todo}</s>
      ) : (
        <span className="icon__buttons">{todo.todo}</span>
      )}
      <span>{todo.todo}</span>
      <div>
        <span className="icon__buttons" onClick={() => handleEdit(todo.id)}>
          <AiFillEdit />
        </span>
        <span className="icon__buttons" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon__buttons" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
}

export default SingleTodo;
