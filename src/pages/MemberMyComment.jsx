import React from "react";

import Header from "../components/Header";

import Footer from "../components/Footer";

import StoreInfoCard from "../components/StoreInfoCard";
import MySetting from "../components/MySetting";
import Button1 from "../components/Button1";
import Button2 from "../components/Button";
import OneComment from "../components/OneComment";
import Response from "../components/Response";

function MemberMyComment() {
  return (
    <>
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
            <MySetting text="個人資料"></MySetting>
            <MySetting text="我的通知"></MySetting>
            <MySetting text="我的評論"></MySetting>
          </div>
        </div>
        <div>
          {/* <!-- matched nums & sorting --> */}
          <div className="my-3 flex justify-between">
            <div>12則評論</div>

            <div>
              {/* <!-- <label
                for="sorting"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >Select an option</label
              > --> */}
              <select
                id="sorting"
                className="block w-full rounded-md border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              >
                <option defaultValue>排序</option>
                <option value="latest">最新評論</option>
                <option value="highest">最高評分</option>
                <option value="hottest">最熱門</option>
              </select>
            </div>
          </div>
          <div className="my-4 w-960px rounded bg-white px-8 py-6 shadow-lg">
            <OneComment />

            <hr />

            {/* <!-- plz log in  --> */}
            <a
              className="my-4 block h-14 w-full rounded-md bg-orange-200 pt-4 text-center font-bold text-myThirdColor"
              href=""
            >
              登入以留言
            </a>

            {/* <!-- each response --> */}
            <Response></Response>

            {/* more comments */}
            <a
              className="my-4 block h-14 w-full rounded-md bg-mySecondColor pt-4 text-center font-bold text-myyFirstColorHover"
              href=""
            >
              載入更多留言
            </a>
          </div>

          {/* <!-- second comment --> */}
          <div className="my-4 w-960px rounded bg-white px-8 py-6 shadow-lg">
            <OneComment />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MemberMyComment;
