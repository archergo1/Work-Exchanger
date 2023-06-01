import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

import { userNameContext } from "./contexts/GlobalState";

export default function Header() {
  const navigate = useNavigate();
 
  // const [userName, setUserName] = useState(localStorage.getItem("userName"));

  const { userName, setUserName } = useContext(userNameContext)

  const [JWTtoken, setJWTtoken] = useState(localStorage.getItem("JWTtoken"));
  const [userId, setUserId] = useState(localStorage.getItem("userId"));

  return (
    <div className="mx-auto flex max-w-screen-2xl justify-between bg-mySecondColor p-4">
      <a href="/">
        <img src="/static/images/logo.png" className="h-14" alt="logo" />
      </a>
      <div>
        {userName ? (
          <Button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            style={"button"}
            text={`Hi ${userName}`}
            onClick={() => {
              navigate("/member", {});
            }}
          />
        ) : (
          <Button
            style={"button"}
            text="登入/註冊"
            onClick={() => {
              navigate("/signup", {});
            }}
          />
        )}
      </div>
    </div>
  );
}
