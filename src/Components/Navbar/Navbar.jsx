import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <NavLink to="/services">История</NavLink>
      <NavLink to="/info">Инфо</NavLink>
      <a href="https://github.com/Barkuta/Yandex.git">GitHub</a>
    </nav>
  );
};

export default Navbar;
