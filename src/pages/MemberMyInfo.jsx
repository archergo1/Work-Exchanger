import React from "react";

import Header from "../components/Header";

import Footer from "../components/Footer";

import StoreInfoCard from "../components/StoreInfoCard";
import MySetting from "../components/MySetting";

function MemberMyInfo() {
  return (
    <div className="w-full">
      <div className="container mx-auto max-w-screen-2xl bg-myFifthColor">
        <Header />
        <div className="flex justify-around py-4 pl-6 pr-6">
        <div className="h-96 w-80 rounded bg-white px-8 py-3 shadow-lg">
          <img
            className="mx-auto block h-20 w-20 rounded-full"
            src="/src/assets/images/dog.jpeg"
            alt=""
          />
          <h1 className="my-6 text-center text-3xl">Archer</h1>

          <div className="">
            <MySetting></MySetting>
            <MySetting></MySetting>
            <MySetting></MySetting>
          </div>
        </div>

        <div className="w-960px rounded bg-white px-8 py-6 shadow-lg">
          <img
            className="mx-auto block h-20 w-20 rounded-full"
            src="/src/assets/images/dog.jpeg"
            alt=""
          />
          {/* <!-- upload your mug --> */}
          <div className="flex justify-center">
            <a
              className="my-2 h-10 w-20 rounded-md bg-mySecondColor pt-2 text-center text-myFirstColor"
              href=""
            >
              上傳頭貼
            </a>
          </div>

          <form>
            <div className="mb-6">
              <label
                htmlFor="yourName"
                className="mb-2 block text-xl font-medium text-gray-900"
              >
                名稱
              </label>
              <input
                type="text"
                id="yourName"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                placeholder="Archer Huang"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 block text-xl font-medium text-gray-900"
              >
                信箱
              </label>
              <input
                type="email"
                id="email"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                placeholder="WorkExchange@gmail.com"
                required
              />
            </div>
            <button className="mr-2 mb-2 rounded-full bg-mySecondColor px-5 py-2.5 text-center text-sm font-medium text-myFirstColor hover:bg-myyFirstColorHover hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300">
              修改密碼
            </button>
            <button
              type="submit"
              className="mr-2 mb-2 rounded-full bg-myFirstColor px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-myyFirstColorHover focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              儲存
            </button>
          </form>
        </div>
        </div>
       
        <Footer />
      </div>
    </div>
  );
}

export default MemberMyInfo;
