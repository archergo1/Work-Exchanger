import React from "react";
import Button1 from "./Button1";
import Button2 from "./Button2";

const Header = () => {
  return (
    <header className="header mx-auto flex shadow justify-between bg-white p-4">
      <a className="h-10 w-10" href="#">
        <img src="/src/assets/images/uniqlo.png" alt="" />
      </a>
      {/* <!-- navBar --> */}
      <div className="navBar flex">
        <Button1></Button1>
        <Button2></Button2>
      </div>
    </header>
  );
};

export default Header;
