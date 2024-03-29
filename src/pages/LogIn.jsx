import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { url } from "../components/contexts/apiUrl";
import axios from "axios";
import Swal from "sweetalert2";
import { userNameContext } from "../components/contexts/GlobalState";

export default function LogIn() {
  const navigate = useNavigate();

  const { userName, setUserName } = useContext(userNameContext);

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
    const { email, password } = data;

    function logIn() {
      axios
        .post(`${url}/login`, {
          email: email.trim(),
          password: password.trim(),
        })
        .then((response) => {
          // NOTE: DO NOT USE setState HERE FOR ASYNC ISSUE
          reset();
          localStorage.setItem("JWTtoken", response.data.accessToken);
          localStorage.setItem("userName", response.data.user.name);
          localStorage.setItem("userId", response.data.user.id);
          setUserName(response.data.user.name);
          Swal.fire({ title: `登入成功` });
          setTimeout(() => {
            navigate("/member"), 2000;
          });
        })
        .catch((error) => {
          Swal.fire({ title: `登入失敗` });
        });
    }
    logIn();
  };

  return (
    <div className="mx-auto max-w-screen-2xl bg-myFifthColor py-10">
      <div className="mx-auto w-[640px] flex-col rounded-lg bg-white px-6 py-6">
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
          <button
            onClick={() => {
              navigate("/signup");
            }}
            className="my-4 text-center text-lg text-myThirdColor hover:cursor-pointer"
          >
            立即註冊
          </button>
        </div>
      </div>
    </div>
  );
}
