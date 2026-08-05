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
        todoo.id === id ? { ...todoo, todo: editTodo } : todoo,
      ),
    );
    setEdit(false);
  }

  return (
    <form className="todo-item" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          className="todo-edit-input"
          type="text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : (
        <div className={`todo-text ${todo.isDone ? 'done' : ''}`}>
          {todo.todo}
        </div>
      )}

      <div className="todo-actions">
        <button
          type="button"
          className="icon-button"
          aria-label="Edit task"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </button>
        <button
          type="button"
          className="icon-button"
          aria-label="Delete task"
          onClick={() => handleDelete(todo.id)}
        >
          <AiFillDelete />
        </button>
        <button
          type="button"
          className="icon-button"
          aria-label="Mark task done"
          onClick={() => handleDone(todo.id)}
        >
          <MdDone />
        </button>
      </div>
    </form>
  );
}

export default SingleTodo;
