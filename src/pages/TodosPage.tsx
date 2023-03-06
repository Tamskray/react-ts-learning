import axios from "axios";
import React, { useEffect, useState } from "react";
import { AddTodo, ITodo } from "../types/types";
import List from "../components/List";
import TodoItem from "../components/TodoItem";
import AddTodoForm from "../components/AddTodoForm";

const TodosPage = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(response.data);
    } catch (e) {
      alert(e);
    }
  }

  const toggleTodo = (selectedTodo: ITodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (title: string) => {
    const newTodo = { id: todos.length + 1, title, completed: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <AddTodoForm addTodo={addTodo} />
      <List
        items={todos}
        renderItem={(todo: ITodo) => (
          <TodoItem todo={todo} key={todo.id} toggleTodo={toggleTodo} />
        )}
      />
    </>
  );
};

export default TodosPage;
