import Button from "./Button";
// import Modal from '@mui/material/Modal';
import Modal from "react-modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const url = "http://localhost:3000";

Modal.setAppElement("#root");

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [haveAccount, setHaveAccount] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);

    const { email, password, name } = data;
    if (data.name === "") {
      logIn();
    } else {
      signUp();
    }

    function signUp() {
      axios
        .post(`${url}/signup`, {
          email: email.trim(),
          password: password.trim(),
          name: name.trim(),
        })
        .then((response) => {
          console.log(response.data);
          Swal.fire({ title: `註冊成功，請重新登入` });
          setTimeout(closeModal, 1000);
        })
        .catch((error) => {
          console.log(error.response);
          Swal.fire({ title: `註冊失敗` });
        });
    }

    function logIn() {
      axios
        .post(`${url}/login`, {
          email: email.trim(),
          password: password.trim(),
        })
        .then((response) => {
          console.log(response.data);
          setUserName(response.data.user.name);
          localStorage.setItem("JWTtoken", response.data.accessToken);
          localStorage.setItem("userName", response.data.user.name);
          localStorage.setItem("userId", response.data.user.id);
          Swal.fire({ title: `登入成功` });
          setTimeout(closeModal, 1000);
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({ title: `登入失敗` });
        });
    }
  };

  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }
  function toLogIn() {
    setHaveAccount(false);
  }

  function toSignUp() {
    setHaveAccount(true);
  }

  //Q 註冊 登入互相切換要用巢狀迴圈嗎？
  // A 用state切換即可

  return (
    <div className="mx-auto flex justify-between bg-white p-4 shadow">
      <a className="h-10 w-10" href="/">
        <img src="/src/assets/images/uniqlo.png" alt="" />
      </a>
      {isLoggedIn ? (
        // direct to memberpage
        <button
          className="button2"
          onClick={() => {
            console.log("hahah");
            navigate("/memberpage", {});
          }}
        >{`Hi ${userName}`}</button>
      ) : (
        // <Button
        //   // goToMemberPage={() => {
        //   //   console.log("hahah");
        //   //   navigate("/memberpage", {});
        //   // }}
        //   text={`Hi ${userName}`}
        // />
        <Button openModal={openModal} text="登入/註冊" />
      )}

      <Modal
        className="flex"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        {/* Login Component */}
        <div className="mx-auto my-4 w-[640px] flex-col rounded-lg bg-white px-6 py-6">
          <div className="flex justify-end ">
            <button className="text-lg" onClick={closeModal}>
              X
            </button>
          </div>
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6 text-center">
                <label
                  htmlFor="email"
                  className="mb-2 flex text-left text-xl font-medium text-gray-900"
                >
                  帳號（Email）
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full justify-center rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                  {...register("email", { required: true })}
                />
                {errors.email && <p className="text-red-600">請輸入帳號</p>}
              </div>

              <div className="mb-6 text-center">
                <label
                  htmlFor="password"
                  className="mb-2 flex text-left text-xl font-medium text-gray-900"
                >
                  密碼
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                  {...register("password", { required: true })}
                />
                {errors.password && <p className="text-red-600">請輸入密碼</p>}
              </div>

              {/* 需要註冊時顯示 */}
              {haveAccount ? (
                <div className="mb-6 text-center">
                  <label
                    htmlFor="name"
                    className="mb-2 flex text-left text-xl font-medium text-gray-900"
                  >
                    暱稱
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                    {...register("name", { required: true })}
                  />
                  {errors.name && <p className="text-red-600">請輸入暱稱</p>}
                </div>
              ) : null}
              {haveAccount ? (
                <input
                  type="submit"
                  value="註冊"
                  className="mr-2 mb-2 w-full rounded-full bg-myFirstColor px-5 py-3 text-center text-lg font-medium text-white hover:bg-myyFirstColorHover"
                />
              ) : (
                <input
                  type="submit"
                  value="登入"
                  className="mr-2 mb-2 w-full rounded-full bg-myFirstColor px-5 py-3 text-center text-lg font-medium text-white hover:bg-myyFirstColorHover"
                />
              )}
            </form>
          </div>
          {haveAccount ? (
            <div className="mx-auto text-center">
              <span>已經有帳號？</span>
              <a
                onClick={toLogIn}
                className="my-4 text-center text-lg text-myyFirstColorHover"
              >
                立即登入
              </a>
            </div>
          ) : (
            <div className="mx-auto text-center">
              <span>沒有帳號？</span>
              <a
                onClick={toSignUp}
                className="my-4 text-center text-lg text-myyFirstColorHover"
              >
                立即註冊
              </a>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Header;
