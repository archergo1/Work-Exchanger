import { url } from "../components/contexts/UserContext";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import Swal from "sweetalert2";

export default function SignUp() {
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
      name: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);

    const { email, password, name } = data;

    function signUp() {
      axios
        .post(`${url}/signup`, {
          user_mug: "/static/images/userMug/defaultMug.png",
          email: email.trim(),
          password: password.trim(),
          name: name.trim(),
        })
        .then((response) => {
          console.log(response.data);
          Swal.fire({ title: `註冊成功，請重新登入` });
          setTimeout(() => {
            navigate("/login"), 2000
          });
          reset();
        })
        .catch((error) => {
          console.log(error.response);
          Swal.fire({ title: `註冊失敗` });
        });
    }
    signUp();
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
            {/* 需要註冊時顯示名稱欄 */}
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
            <input
              type="submit"
              value="註冊"
              className="mr-2 mb-2 w-full rounded-full bg-myFirstColor px-5 py-3 text-center text-lg font-medium text-white hover:bg-myyFirstColorHover hover:cursor-pointer"
            />
          </form>
        </div>

        <div className="mx-auto text-center">
          <span>已經有帳號？</span>
          <div
            onClick={() => {
              console.log("das");
              navigate("/login");
            }}
            className="my-4 text-center text-lg text-myThirdColor hover:cursor-pointer"
          >
            立即登入
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
