import React from "react";
import { NavLink } from "react-router-dom";

export function AppNav() {
  return (
    <nav className="app-nav">
      <NavLink to="/" className="home link">
        <div className="home__icon icon"></div>
        <span>home</span>
      </NavLink>
      <NavLink to="/contact" className="contact link">
        <div className="contact__icon icon"></div>
        <span>contact</span>
      </NavLink>
      <NavLink to="/market" className="market link">
        <div className="market__icon icon"></div>
        <span>market</span>
      </NavLink>
    </nav>
  );
}
