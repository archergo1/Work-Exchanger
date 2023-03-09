import React from "react";

import Header from "../components/Header";
import BannerArea from "../components/BannerArea";
import OurSelect from "../components/OurSelect";
import Latest from "../components/OurLatest";
import Footer from "../components/Footer";

import StoreInfoCard from "../components/StoreInfoCard";
import OneComment from "../components/OneComment";
import Response from "../components/Response";
import LastPage from "../components/LastPage";
import Rating from "../components/Rating";
import Button2 from "../components/Button2";


const WritePage1 = () => {
  return (
    <>
        <Header />
        <LastPage />
        {/* <!-- body --> */}
        <div className="flex justify-around py-4 pl-6 pr-6">
          {/* start writing */}
          <div className="w-full rounded bg-white px-8 py-6 shadow-lg">
            <div className="max-w-3xl">
              <h1 className="my-4 text-2xl font-bold">發表評論</h1>
              <div className="my-6">
                分享你的換宿經驗，幫助下一個換宿人有更棒的換宿體驗！
              </div>

              <h1 className="my-4 text-2xl font-bold text-myFirstColor">
                換宿資訊
              </h1>
              <form>Name
                {/* <!-- store name --> */}
                <div className="mb-6">
                  <label
                    htmlFor="storeName"
                    className="mb-2 block text-xl font-medium text-gray-900"
                  >
                    換宿名稱
                  </label>
                  <input
                    type="text"
                    id="storeName"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                    placeholder="beishan"
                    required
                  />
                </div>

                {/* <!-- store phone --> */}
                <div className="mb-6">
                  <label
                    htmlFor="storePhone"
                    className="mb-2 block text-xl font-medium text-gray-900"
                  >
                    換宿電話
                  </label>
                  <input
                    type="text"
                    id="storePhone"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                    placeholder="07 123 4567"
                    required
                  />
                </div>

                {/* <!-- date --> */}
                <div className="mb-6">
                  <label
                    htmlFor="address"
                    className="mb-2 block text-xl font-medium text-gray-900"
                  >
                    換宿地址
                  </label>
                  <select
                    defaultValue={"taipei"}
                    name=""
                    id="county"
                    className="rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                  >
                    <option value="taipei">台北市</option>
                    <option value="kaohsiung">高雄市</option>
                  </select>
                  <select
                    defaultValue={"daan"}
                    name=""
                    id="district"
                    className="rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                  >
                    <option value="daan">大安區</option>
                    <option value="nanzih">楠梓區</option>
                  </select>
                  <input
                    type="text"
                    id="road"
                    className="my-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                    placeholder="XX區XX路"
                    required
                  />
                </div>
                {/* <!-- length --> */}
                <div className="mb-6">
                  <label
                    htmlFor="length"
                    className="mb-2 block text-xl font-medium text-gray-900"
                  >
                    換宿天數
                  </label>
                  <select
                    defaultValue={"7days"}
                    name=""
                    id="length"
                    className="rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                  >
                    <option value="7days">1週</option>
                    <option value="14days">2週</option>
                    <option value="21days">3週</option>
                    <option value="30days">1個月</option>
                    <option value="60days">大於1個月</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="workDate"
                    className="mb-2 block text-xl font-medium text-gray-900"
                  >
                    換宿日期
                  </label>
                  <input
                    type="date"
                    max="8"
                    min="1"
                    id="workDate"
                    className="block w-40 rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                    placeholder="3"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="workHour"
                    className="mb-2 block text-xl font-medium text-gray-900"
                  >
                    每日工時
                  </label>
                  <input
                    type="number"
                    max="8"
                    min="1"
                    id="workHour"
                    className="block w-40 rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                    placeholder="3"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="exchangeType"
                    className="mb-2 block text-xl font-medium text-gray-900"
                  >
                    換宿類型
                  </label>
                  <select
                    defaultValue={"normal"}
                    name=""
                    id="exchangeType"
                    className="rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                  >
                    <option value="normal">一般換宿</option>
                    <option value="pro">專業換宿</option>
                  </select>
                </div>

                <Button2 text="下一步"></Button2>
              </form>
            </div>
          </div>
          
        </div>
        <Footer />
    </>
  );
};

export default WritePage1;
