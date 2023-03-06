import React, { FC } from "react";
import { ITodo } from "../types/types";

interface ITodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<ITodoItemProps> = ({ todo }) => {
  return (
    <div>
      {todo.id}. {todo.title}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => console.log(todo.completed)}
      />
    </div>
  );
};

export default TodoItem;
