import { useState, useEffect } from "react";
import Button1 from "./Button1";
import Button2 from "./Button";
import axios from "axios";

const url = "http://localhost:3000";

const StoreInfoCard = () => {
  
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const getStores = async () => {
      const res = await axios.get(`${url}/stores`);
      setStores(res.data);
      // console.log(res);
      // console.log(stores);
    };
    getStores();
  }, []);
  // 為什麼stores有時候有接收到資料，從空陣列改變為有資料
  // 店有時候又沒有，維持空陣列？

  const store0 = stores[0];
  // 先以第一項測試
  if (stores.length === 0) {
    return null;
  }

  return (
    <div className="h-96 w-80 rounded bg-white px-4 py-3 shadow-lg">
      <img
        className="mx-auto block h-20 w-20 rounded-full"
        src="/src/assets/images/dog.jpeg"
        alt=""
      />
      <h2 className="my-2 text-center text-3xl">{store0.name}</h2>

      {/* rating */}
      <div className="flex justify-center">
        <div className="rating">{store0.average_score}</div>
      </div>
      <ul>
        <li className="my-1 h-10 w-full text-left">地址：{store0.store_address}</li>
        <li className="my-1 h-10 w-full text-left">電話：{store0.store_phone}</li>
        <li className="my-1 h-10 w-full text-left">
          平均日工時：{store0.average_hour}小時
        </li>
      </ul>

      <div className="my-3 flex justify-center">
        {/* <a className="button1 bg-mySecondColor">發問問題</a> */}
        {/* 確認一下能不能用important蓋掉背景色 */}
        {/* <a className="button2">發表評論</a> */}
        {/* <Button1
        text=""
        ></Button1> */}
        <Button2 text="發表評論"></Button2>
      </div>
    </div>
  );
};

export default StoreInfoCard;
