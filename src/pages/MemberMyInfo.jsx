import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import MySetting from "../components/MySetting";
import Button from "../components/Button";
import Button1 from "../components/Button1";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OnePost from "../components/OnePost";
import Comments from "../components/Comments";

function MemberMyInfo() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="mx-auto max-w-screen-2xl flex-col bg-myFifthColor">
      <Header />
      <div className="">
        <Tabs className="flex flex-grow justify-around py-4 pl-6 pr-6">
          <div className="h-96 w-80 rounded bg-white px-8 py-3 shadow-lg">
            <img
              className="mx-auto block h-20 w-20 rounded-full"
              src="/src/assets/images/dog.jpeg"
              alt=""
            />
            <h1 className="my-6 text-center text-3xl">Archer</h1>

            <TabList className="">
              <Tab className="flex">
                <MySetting text="個人資料"></MySetting>
              </Tab>
              <Tab className="flex">
                <MySetting text="我的通知"></MySetting>
              </Tab>
              <Tab className="flex">
                <MySetting text="我的評論"></MySetting>
              </Tab>
            </TabList>
          </div>

          <TabPanel>
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
                <div className="flex justify-center">
                  <Button1 text="修改密碼"></Button1>
                  <Button text="儲存"></Button>
                </div>
              </form>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="w-960px rounded bg-white px-8 py-6 shadow-lg">
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
          </TabPanel>
          <TabPanel>
            <div>
              {/* <!-- matched nums & sorting --> */}
              <div className="my-3 flex justify-between">
                <div>12則評論</div>
                {/* <div>
                <select
                  defaultValue={"latest"}
                  id="sorting"
                  className="block w-full rounded-md border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="latest">依最新評論</option>
                  <option value="highest">依最高評分</option>
                   <option value="hottest">最熱門</option> 
                </select>
              </div> */}
              </div>

              <div className="my-4 w-960px rounded bg-white px-8 py-6 shadow-lg">
                <OnePost />
                <hr />

                {/* if logged in, render the link */}
                {isLoggedIn ? null : (
                  <a
                    className="my-4 block h-14 w-full rounded-md bg-orange-200 pt-4 text-center font-bold text-myThirdColor"
                    href="#"
                  >
                    登入以留言
                  </a>
                )}
                {/* <!-- each response --> */}
                <Comments />

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
          </TabPanel>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}
// 如何在content不足的時候，把footer置底？ 用了flex-grow好像沒效果？
export default MemberMyInfo;
