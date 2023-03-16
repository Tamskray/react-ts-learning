import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink className="nav__item" to="/users">
        Users
      </NavLink>
      <NavLink className="nav__item" to="/todos">
        Todos
      </NavLink>
      <NavLink className="nav__item" to="/users-redux">
        Redux
      </NavLink>
    </div>
  );
};

export default Navbar;
