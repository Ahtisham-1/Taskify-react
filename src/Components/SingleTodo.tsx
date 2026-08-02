import React from "react";
import type { TodoModel } from "../Model";

import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
  todo: TodoModel;
  todoArray: TodoModel[];
  setTodoArray: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}
function SingleTodo({ todo, todoArray, setTodoArray }: Props) {
  return (
    <form>
      <span>{todo.todo}</span>
      <div>
        <span>
          <AiFillEdit />
        </span>
        <span>
          <AiFillDelete />
        </span>
        <span>
          <MdDone />
        </span>
      </div>
    </form>
  );
}

export default SingleTodo;
