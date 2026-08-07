import React, { useState } from "react";
import type { TodoModel } from "../Model";

import { AiFillEdit, AiFillDelete } from "react-icons/ai";

interface Props {
  todo: TodoModel;
  todoArray: TodoModel[];
  setTodoArray: React.Dispatch<React.SetStateAction<TodoModel[]>>;
  onDropTodo: (draggedId: number, targetId: number) => void;
}

function SingleTodo({ todo, todoArray, setTodoArray, onDropTodo }: Props) {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

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

  function handleDragStart(e: React.DragEvent<HTMLLIElement>) {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", String(todo.id));
  }

  function handleDragOver(e: React.DragEvent<HTMLLIElement>) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setIsDragOver(true);
  }

  function handleDragLeave() {
    setIsDragOver(false);
  }

  function handleDrop(e: React.DragEvent<HTMLLIElement>) {
    e.preventDefault();
    setIsDragOver(false);

    const draggedId = Number(e.dataTransfer.getData("text/plain"));
    if (draggedId === todo.id) {
      return;
    }

    onDropTodo(draggedId, todo.id);
  }

  return (
    <li
      className={`todo-item ${isDragOver ? "drag-over" : ""}`}
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <form className="todo-item-form" onSubmit={(e) => handleEdit(e, todo.id)}>
        {edit ? (
          <input
            className="todo-edit-input"
            type="text"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
        ) : (
          <div className={`todo-text ${todo.isDone ? "done" : ""}`}>
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
        </div>
      </form>
    </li>
  );
}

export default SingleTodo;
