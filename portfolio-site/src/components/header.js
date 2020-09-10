import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  /* 
  <header>
    <h1>Expensify</h1>
    <Link to="/">Dashboard</Link>
    <Link to="/create">Create</Link>
    <Link to="/edit">Edit</Link>
    <Link to="/help">Help</Link>
  </header>
   */
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Dashboard
    </NavLink>
    <NavLink to="/contact" activeClassName="is-active" exact={true}>
      Contact
    </NavLink>
  </header>
);

export default Header;
