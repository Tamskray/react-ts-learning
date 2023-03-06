import React, { FC } from "react";
import { ITodo, ToggleTodo } from "../types/types";

interface ITodoItemProps {
  todo: ITodo;
  toggleTodo: ToggleTodo;
}

const TodoItem: FC<ITodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <div>
      {todo.id}. {todo.title}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo)}
      />
    </div>
  );
};

export default TodoItem;
