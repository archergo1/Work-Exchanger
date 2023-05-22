import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [haveAccount, setHaveAccount] = useState(
    localStorage.getItem("haveAccount")
  );
  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const [JWTtoken, setJWTtoken] = useState(localStorage.getItem("JWTtoken"));
  const [userId, setUserId] = useState(localStorage.getItem("userId"));

  console.log(JWTtoken);
  console.log(userName);

  return (
    <div className="mx-auto flex justify-between bg-white p-4 shadow">
      <a href="/">
        <img src="/static/images/logo.png" className="h-14" alt="logo" />
      </a>
      <div>
        {isLoggedIn ? (
          <Button
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
