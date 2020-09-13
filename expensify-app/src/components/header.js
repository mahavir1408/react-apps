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
    <NavLink to="/create" activeClassName="is-active" exact={true}>
      Create
    </NavLink>
    <NavLink to="/edit/99?q=search" activeClassName="is-active" exact={true}>
      Edit
    </NavLink>
    <NavLink to="/help" activeClassName="is-active" exact={true}>
      Help
    </NavLink>
  </header>
);

export default Header;
