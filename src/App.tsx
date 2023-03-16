import React from "react";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import TodosPage from "./pages/TodosPage";
import UserPage from "./pages/UserPage";
import Navbar from "./components/Navbar";
import UserItemPage from "./pages/UserItemPage";
import UsersReduxPage from "./pages/UsersReduxPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/users"} element={<UserPage />} />
          <Route path={"/todos"} element={<TodosPage />} />
          <Route path={"/users/:id"} element={<UserItemPage />} />
          <Route path={"/users-redux"} element={<UsersReduxPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
