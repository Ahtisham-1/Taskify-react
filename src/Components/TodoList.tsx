import React from "react";
import type { TodoModel } from "../Model";
import SingleTodo from "./SingleTodo";

interface Props {
  todoArray: TodoModel[];
  setTodoArray: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}
function TodoList({ todoArray, setTodoArray }: Props) {
  function handleDropTodo(draggedId: number, targetId: number) {
    const draggedIndex = todoArray.findIndex((item) => item.id === draggedId);
    const targetIndex = todoArray.findIndex((item) => item.id === targetId);
    if (draggedIndex === -1 || targetIndex === -1 || draggedIndex === targetIndex) {
      return;
    }

    const updated = [...todoArray];
    const [movedItem] = updated.splice(draggedIndex, 1);
    const targetTodo = todoArray[targetIndex];
    const insertIndex = draggedIndex < targetIndex ? targetIndex - 1 : targetIndex;
    updated.splice(insertIndex, 0, { ...movedItem, isDone: targetTodo.isDone });
    setTodoArray(updated);
  }

  function handleSectionDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  function handleSectionDrop(draggedId: number, sectionDone: boolean) {
    const draggedIndex = todoArray.findIndex((item) => item.id === draggedId);
    if (draggedIndex === -1) {
      return;
    }

    const updated = [...todoArray];
    const [movedItem] = updated.splice(draggedIndex, 1);
    updated.push({ ...movedItem, isDone: sectionDone });
    setTodoArray(updated);
  }

  const activeTodos = todoArray.filter((item) => !item.isDone);
  const completedTodos = todoArray.filter((item) => item.isDone);

  return (
    <section className="todo-list-card">
      <div
        className="todo-list-section"
        onDragOver={handleSectionDragOver}
        onDrop={(e) => handleSectionDrop(Number(e.dataTransfer.getData("text/plain")), false)}
      >
        <h2>Current Tasks</h2>
        {activeTodos.length === 0 ? (
          <div className="empty-state">No active tasks. Add something to get started.</div>
        ) : (
          <ul className="todo-list">
            {activeTodos.map((todo) => (
              <SingleTodo
                todo={todo}
                key={todo.id}
                todoArray={todoArray}
                setTodoArray={setTodoArray}
                onDropTodo={handleDropTodo}
              />
            ))}
          </ul>
        )}
      </div>

      <div
        className="todo-list-section"
        onDragOver={handleSectionDragOver}
        onDrop={(e) => handleSectionDrop(Number(e.dataTransfer.getData("text/plain")), true)}
      >
        <h2>Completed Tasks</h2>
        {completedTodos.length === 0 ? (
          <div className="empty-state">No completed tasks yet.</div>
        ) : (
          <ul className="todo-list">
            {completedTodos.map((todo) => (
              <SingleTodo
                todo={todo}
                key={todo.id}
                todoArray={todoArray}
                setTodoArray={setTodoArray}
                onDropTodo={handleDropTodo}
              />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default TodoList;
