import React from "react";

import Header from "../components/Header";
import BannerArea from "../components/BannerArea";
import OurSelect from "../components/OurSelect";
import Latest from "../components/OurLatest";
import Footer from "../components/Footer";

import StoreInfoCard from "../components/StoreInfoCard";
import OnePost from "../components/OnePost";

import LastPage from "../components/LastPage";
import Rating from "../components/Rating";
import Button1 from "../components/Button1";
import Button2 from "../components/Button";

import { render } from 'react-dom'

const WritePage2 = () => {
  return (
    <>
        <Header />
        <LastPage />
        
        <div className="flex justify-around py-4 pl-6 pr-6">
         
          <div className="w-full rounded bg-white px-8 py-6 shadow-lg">
            <div className="max-w-3xl">
              <h1 className="my-4 text-2xl font-bold text-myFirstColor">
                換宿評價
              </h1>
              <form>
                {/* <!-- pros --> */}
                <div className="mb-6">
                  <label
                    htmlFor="pros"
                    className="mb-2 block text-xl font-medium text-gray-900"
                  >
                    優點福利(複選)
                  </label>
                  <a
                    href=""
                    className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                  >
                    #有供餐
                  </a>
                  <a
                    href=""
                    className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                  >
                    #職員友善
                  </a>
                  <a
                    href=""
                    className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                  >
                    #交通便利
                  </a>

                  <a
                    href=""
                    className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                  >
                    #居住環境佳
                  </a>
                  <a
                    href=""
                    className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                  >
                    #有體驗課程
                  </a>
                </div>

                {/* <!-- cons --> */}
                <div className="mb-6">
                  <label
                    htmlFor="storeName"
                    className="mb-2 block text-xl font-medium text-gray-900"
                  >
                    有待改進(複選)
                  </label>
                  <a
                    href=""
                    className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                  >
                    #有供餐
                  </a>
                  <a
                    href=""
                    className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                  >
                    #職員友善
                  </a>
                  <a
                    href=""
                    className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                  >
                    #交通便利
                  </a>

                  <a
                    href=""
                    className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                  >
                    #居住環境佳
                  </a>
                  <a
                    href=""
                    className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                  >
                    #有體驗課程
                  </a>
                </div>
                {/* <!-- rating --> */}
                <div className="mb-6">
                  <label
                    htmlFor="rating"
                    className="mb-2 block text-xl font-medium text-gray-900"
                  >
                    整體評分
                  </label>
                  <input
                    type="number"
                    max="5"
                    min="1"
                    id="workHour"
                    className="block w-16 rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                    placeholder="3"
                    required
                  />
                </div>

                
                <div className="mb-6">
                  <label
                    htmlFor="myTestimonial"
                    className="mb-2 block text-xl font-medium text-gray-900"
                  >
                    分享換宿心得
                  </label>
                  <textarea
                    required
                    id="myTestimonial"
                    className="block h-60 w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                    placeholder="分享你的換宿生活，有關店家環境、工作狀況和換宿生活等"
                    name=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>

                <Button1
                text="上一頁" 
                ></Button1>
                {/* <!-- submit --> */}
               <Button2
                text="送出"
               ></Button2>
              </form>
            </div>
          </div>
        </div>
        <Footer />
    </>
  );
};

export default WritePage2;
