import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import StoreInfoCard from "../components/StoreInfoCard";
import OnePost from "../components/OnePost";
import Response from "../components/Comments";
import LastPage from "../components/LastPage";

const Posts = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <Header />
      <LastPage />
      <div className="flex justify-around py-4 pl-6 pr-6">
        <StoreInfoCard />

        {/* <!-- store comments right--> */}
        <div className="">
          {/* <!-- matched nums & sorting --> */}
          <div className="my-3 flex justify-between">
            <div>12則評論</div>
            <div>
              
              <select
                defaultValue={"latest"}
                id="sorting"
                className="block w-full rounded-md border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="latest">依最新評論</option>
                <option value="highest">依最高評分</option>
                {/* <option value="hottest">最熱門</option> */}
              </select>
            </div>
          </div>

          {/* <!-- posts --> */}
          <div className="my-4 w-960px rounded bg-white px-8 py-6 shadow-lg">
            <OnePost />
            <hr />

            {/* if logged in, render the link */}
            {isLoggedIn? null:<a
              className="my-4 block h-14 w-full rounded-md bg-orange-200 pt-4 text-center font-bold text-myThirdColor"
              href="#"
            >
              登入以留言
            </a>}
            {/* <!-- each response --> */}
            <Response />

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
            <OnePost />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Posts;
