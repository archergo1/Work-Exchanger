import React from "react";

import Header from "../components/Header";

import Footer from "../components/Footer";

import StoreInfoCard from "../components/StoreInfoCard";
import MySetting from "../components/MySetting";
import Button1 from "../components/Button1";
import Button2 from "../components/Button2";

function MemberMyNoti() {
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

        <div className="w-960px rounded bg-white px-8 pt-6 shadow-lg">
          <ul>
            <li className="my-2 rounded-md bg-mySecondColor">
              <img
                className="mx-2 my-2 inline h-12 w-12 rounded-full"
                src="/src/assets/images/bird.jpg"
                alt=""
              />
              <span>Amy 和其他 2 人 已回覆您在 小彩虹民宿 的評論</span>
            </li>
            <li className="my-2 rounded-md bg-mySecondColor">
              <img
                className="mx-2 my-2 inline h-12 w-12 rounded-full"
                src="/src/assets/images/bird.jpg"
                alt=""
              />
              <span>Amy 和其他 2 人 已回覆您在 小彩虹民宿 的評論</span>
            </li>
            <li className="my-2 rounded-md bg-mySecondColor">
              <img
                className="mx-2 my-2 inline h-12 w-12 rounded-full"
                src="/src/assets/images/bird.jpg"
                alt=""
              />
              <span>Amy 和其他 2 人 已回覆您在 小彩虹民宿 的評論</span>
            </li>
            <li className="my-2 rounded-md bg-mySecondColor">
              <img
                className="mx-2 my-2 inline h-12 w-12 rounded-full"
                src="/src/assets/images/bird.jpg"
                alt=""
              />
              <span>Amy 和其他 2 人 已回覆您在 小彩虹民宿 的評論</span>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MemberMyNoti;
