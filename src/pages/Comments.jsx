import React from "react";

import Header from "../components/Header";
import BannerArea from "../components/BannerArea";
import OurSelect from "../components/OurSelect";
import Latest from "../components/Latest";
import Footer from "../components/Footer";

import StoreInfoCard from "../components/StoreInfoCard";
import OneComment from "../components/OneComment";
import Response from "../components/Response";
import LastPage from "../components/LastPage";

const Comment = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto max-w-screen-2xl bg-myFifthColor">
        <Header />
        <LastPage/>
        
        <div class="flex justify-around py-4 pl-6 pr-6">
          
          <StoreInfoCard />

          {/* <!-- store comments right--> */}
          <div class="">
            {/* <!-- matched nums & sorting --> */}
            <div class="my-3 flex justify-between">
              <div>12則評論</div>

              <div>
                {/* <!-- <label
                for="sorting"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >Select an option</label
              > --> */}
                <select
                  id="sorting"
                  class="block w-full rounded-md border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                >
                  <option selected>排序</option>
                  <option value="latest">最新評論</option>
                  <option value="highest">最高評分</option>
                  <option value="hottest">最熱門</option>
                </select>
              </div>
            </div>

            {/* <!-- comments --> */}
            <div class="my-4 w-960px rounded bg-white px-8 py-6 shadow-lg">
              <OneComment />

              <hr />

              {/* <!-- plz log in  --> */}
              <a
                class="my-4 block h-14 w-full rounded-md bg-orange-200 pt-4 text-center font-bold text-myThirdColor"
                href=""
              >
                登入以留言
              </a>

              {/* <!-- each response --> */}
              <Response></Response>

              {/* more comments */}
              <a
                class="my-4 block h-14 w-full rounded-md bg-mySecondColor pt-4 text-center font-bold text-myyFirstColorHover"
                href=""
              >
                載入更多留言
              </a>
            </div>

            {/* <!-- second comment --> */}
            <div class="my-4 w-960px rounded bg-white px-8 py-6 shadow-lg">
              <OneComment />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Comment;
