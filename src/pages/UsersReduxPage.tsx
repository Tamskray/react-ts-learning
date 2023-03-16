import React from "react";
import TodoList from "../components/redux-test/TodoList";
import UserList from "../components/redux-test/UserList";

const UsersReduxPage = () => {
  return (
    <>
      <UserList />
      <hr />
      <TodoList />
    </>
  );
};

export default UsersReduxPage;
