import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

const LogIn = () => (
  <>
    <Header />
    <div className="mx-auto my-4 w-[640px] flex-col rounded-lg bg-white px-6 py-6">
      <div className="flex justify-end ">
        <a href="" className="text-lg">
          X
        </a>
      </div>
      <div className="">
        <form action="">
          <div className="mb-6 text-center">
            <label
              htmlFor="account"
              className="mb-2 flex text-left text-xl font-medium text-gray-900"
            >
              帳號
            </label>
            <input
              type="text"
              id="account"
              className="w-full justify-center rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
              placeholder=""
              required
            />
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
              placeholder=""
              required
            />
          </div>
          <input
            type="submit"
            value="登入"
            className="mr-2 mb-2 w-full rounded-full bg-myFirstColor px-5 py-3 text-center text-lg font-medium text-white hover:bg-myyFirstColorHover"
          />
        </form>
      </div>
      <div className="mx-auto text-center">
        <span>沒有帳號？</span>
        <a
          href="#"
          className="my-4 text-center text-lg text-myyFirstColorHover"
        >
          立即註冊
        </a>
      </div>
    </div>
    <Footer></Footer>
  </>
);

export default LogIn;
