import React from "react";
import Button1 from "./Button1";
import Button2 from "./Button2";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="mx-auto flex shadow justify-between bg-white p-4">
      <a className="h-10 w-10" href="#">
        <img src="/src/assets/images/uniqlo.png" alt="" />
      </a>
      <NavBar/>
    </header>
  );
};

export default Header;
