import React, { FC, useState } from "react";
import { AddTodo } from "../types/types";

interface AddTodoProps {
  addTodo: AddTodo;
}

const AddTodoForm: FC<AddTodoProps> = ({ addTodo }) => {
  const [title, setTitle] = useState<string>("");

  const titleChangeHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(title);
    setTitle("");
  };

  return (
    <form>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button type="submit" onClick={titleChangeHandler}>
        Add Todo
      </button>
    </form>
  );
};

export default AddTodoForm;
