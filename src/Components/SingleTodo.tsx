import React from "react";
import type { TodoModel } from "../Model";
import { useState } from "react";

import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import TodoList from "./TodoList";

interface Props {
  todo: TodoModel;
  todoArray: TodoModel[];
  setTodoArray: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}
function SingleTodo({ todo, todoArray, setTodoArray }: Props) {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

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

  function handleEdit(e: React.FormEvent, id: number) {
    e.preventDefault();

    setTodoArray(
      todoArray.map((todoo) =>
        todoo.id === id ? { ...todo, todo: editTodo } : todo,
      ),
    );
    setEdit(false);
  }

  return (
    <form onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          type="text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className="icon__buttons">{todo.todo}</s>
      ) : (
        <span className="icon__buttons">{todo.todo}</span>
      )}

      {/* <span>{todo.todo}</span> */}
      <div>
        <span
          className="icon__buttons"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
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
