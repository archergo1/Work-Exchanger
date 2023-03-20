import React from "react";

import Button1 from "./Button1";
import Button2 from "./Button";

const StoreInfoCard = () => {
  return (
    <div className="h-96 w-80 rounded bg-white px-8 py-3 shadow-lg">
      <img
        className="mx-auto block h-20 w-20 rounded-full"
        src="/src/assets/images/dog.jpeg"
        alt=""
      />
      <h2 className="my-2 text-center text-3xl">北山古洋樓</h2>
      {/* rating */}
      <div className="flex justify-center">
        <div className="rating">4.5</div>
      </div>
      <ul>
        <li className="h-10 w-full pt-2 text-left">
          金門縣金寧鄉金寧鄉北山村55-3號
        </li>
        <li className="h-10 w-full pt-2 text-left">
          +886-82-313100
        </li>
        <li className="h-10 w-full pt-2 text-left">
          平均日工時：約3小時
        </li>
      </ul>

      <div className="my-3 flex justify-center">
        {/* <a className="button1 bg-mySecondColor">發問問題</a> */}
        {/* 確認一下能不能用important蓋掉背景色 */}
        {/* <a className="button2">發表評論</a> */}
        {/* <Button1
        text=""
        ></Button1> */}
        <Button2
        text="發表評論"
        ></Button2>
      </div>
    </div>
  );
};

export default StoreInfoCard;
