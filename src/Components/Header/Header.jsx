import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  useEffect(() => {
    console.log("ComponentDidMount");
  }, []);
  return (
    <header className={s.header}>
      <div className={s.light}></div>
      <div className={s.content}>
        <div className={s.logo}>
          <NavLink to="/">RAZRAB</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
