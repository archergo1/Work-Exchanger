import React from "react";

import Header from "../components/Header";
import BannerArea from "../components/BannerArea";
import Footer from "../components/Footer";

const SearchFound = () => {
  return (
    <>
      <Header></Header>
      <BannerArea></BannerArea>
      {/* <!-- possible matches indicator --> */}
      <div className="my-4 ml-6 text-base">2個搜尋結果</div>
      {/* <!-- matched items --> */}
      <div className="mb-4 w-full px-6">
        <ul>
          {/* <!-- each short info card --> */}
          <li className="my-3 flex w-full rounded-md bg-white px-4 py-4">
            {/* <!-- mug --> */}
            <img
              className="h-24 w-24"
              src="/src/assets/images/cat.jpg"
              alt="cat"
            />

            <div className="ml-4 flex w-full items-center justify-between">
              {/* <!-- store info short version --> */}
              <div>
                <p className="text-xl font-bold">北山古洋樓</p>
                <p>金門縣金寧鄉金寧鄉北山村55-3號</p>
                <p>+886-82-313100</p>
              </div>
              {/* <!-- rating stars --> */}
              <div className="h-10 w-16 rounded-md bg-myThirdColor pt-1 text-center text-xl text-white">
                4.5
              </div>
            </div>
          </li>

          <li className="flex w-full rounded-md bg-white px-4 py-4">
            {/* <!-- mug --> */}
            <img
              className="h-24 w-24"
              src="/src/assets/images/cat.jpg"
              alt="cat"
            />

            <div className="ml-4 flex w-full items-center justify-between">
              {/* <!-- store info short version --> */}
              <div>
                <h1 className="text-xl font-bold">北山古洋樓</h1>
                <p>金門縣金寧鄉金寧鄉北山村55-3號</p>
                <p>+886-82-313100</p>
              </div>
              {/* <!-- rating stars --> */}
              <div className="h-10 w-16 rounded-md bg-myThirdColor pt-1 text-center text-xl text-white">
                4.5
              </div>
            </div>
          </li>
        </ul>
      </div>
      <Footer></Footer>
    </>
  );
};

export default SearchFound;
