import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { url } from "../components/contexts/UserContext";
import axios from "axios";
import Swal from "sweetalert2";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LogIn() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );

  const [haveAccount, setHaveAccount] = useState(
    localStorage.getItem("haveAccount")
  );
  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const [JWTtoken, setJWTtoken] = useState(localStorage.getItem("JWTtoken"));
  const [userId, setUserId] = useState(localStorage.getItem("userId"));

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);

    const { email, password } = data;

    function logIn() {
      axios
        .post(`${url}/login`, {
          email: email.trim(),
          password: password.trim(),
        })
        .then((response) => {
          // console.log(response.data);

          setIsLoggedIn(response.data.accessToken);
          setUserId(response.data.user.id);
          setUserName(response.data.user.name);
          setIsLoggedIn(true);
          setHaveAccount(true);

          // NOTE: DO NOT USE setState HERE FOR ASYNC ISSUE
          localStorage.setItem("JWTtoken", response.data.accessToken);
          localStorage.setItem("userName", response.data.user.name);
          localStorage.setItem("userId", response.data.user.id);
          localStorage.setItem("isLoggedIn", true);

          Swal.fire({ title: `登入成功` });
          setTimeout(() => {
            navigate("/member"), 2000;
          });
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({ title: `登入失敗` });
        });
    }
    logIn();
  };

  function toLogIn() {
    setHaveAccount(false);
  }

  function toSignUp() {
    setHaveAccount(true);
  }

  return (
    <div className="mx-auto max-w-screen-2xl bg-myFifthColor">
      <Header />
      <div className="mx-auto my-4 w-[640px] flex-col rounded-lg bg-white px-6 py-6">
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
                placeholder="Password"
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                {...register("password", {
                  required: {
                    value: true,
                    message: "請輸入密碼！",
                  },
                  minLength: {
                    value: 6,
                    message: "密碼長度至少6位字元",
                  },
                })}
              />
              <p className="mb-2 text-red-600">{errors.password?.message}</p>
            </div>
            <input
              type="submit"
              value="登入"
              className="mr-2 mb-2 w-full rounded-full bg-myFirstColor px-5 py-3 text-center text-lg font-medium text-white hover:cursor-pointer hover:bg-myyFirstColorHover"
            />
          </form>
        </div>
        <div className="mx-auto text-center">
          <span>沒有帳號？</span>
          <div
            onClick={() => {
              navigate("/signup");
            }}
            className="my-4 text-center text-lg text-myThirdColor hover:cursor-pointer"
          >
            立即註冊
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
