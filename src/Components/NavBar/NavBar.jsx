import React from "react";
import Style from "./NavBar.module.scss";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className={Style.container}>
      <h3 className={Style.brand}>
        Pro-Organizer{" "}
        <i
          style={{ fontSize: "35px", color: "#546de5" }}
          class="fab fa-stack-overflow"
        ></i>
      </h3>
      <ul>
        <NavLink
          to="/"
          exact
          activeClassName={Style.active}
          style={{ textDecoration: "none" }}
        >
          <li className={Style.item1}>Home</li>
        </NavLink>
        <NavLink
          to="/createboard"
          activeClassName={Style.active}
          style={{ textDecoration: "none" }}
        >
          <li>Create a board</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default NavBar;
