import React from "react";

import Button1 from "./Button1";
import Button2 from "./Button2";

const NavBar = () => {
  return (
    <div className="flex">
      <Button1 text="發表評論"></Button1>
      <Button2 text="登入"></Button2>
    </div>
  );
};

export default NavBar;
