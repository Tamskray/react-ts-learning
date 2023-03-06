import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/todos">Todos</NavLink>
    </div>
  );
};

export default Navbar;
