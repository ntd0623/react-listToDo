import React from "react";
import "./nav.scss";
import { Link, NavLink } from "react-router";
class NavigationComponent extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/todo">ToDo</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    );
  }
}
export default NavigationComponent;
