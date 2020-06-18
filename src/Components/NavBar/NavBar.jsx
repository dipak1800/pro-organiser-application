import React from "react";
import Style from "./NavBar.module.scss";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../../Firebase/firebase.utils";
const NavBar = ({ currentUser }) => {
  let handleSignOut = () => {
    auth.signOut();
  };
  return (
    <div className={Style.container}>
      <h2 className={Style.brand}>
        Pro-Organizer{" "}
        <i
          style={{ fontSize: "35px", color: "#546de5" }}
          class="fab fa-stack-overflow"
        ></i>
      </h2>
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
        {currentUser ? (
          <li onClick={handleSignOut}>Sign Out</li>
        ) : (
          <NavLink
            to="/signin"
            exact
            activeClassName={Style.active}
            style={{ textDecoration: "none" }}
          >
            <li className={Style.item1}>Sign In</li>
          </NavLink>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
