import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { url } from "../components/contexts/UserContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Post from "../components/Post";
import LastPage from "../components/LastPage";
import Button2 from "../components/Button";
import axios from "axios";
import Swal from "sweetalert2";

export default function StoreBriefAndPosts() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );
  const [store, setStore] = useState([]);
  const routeParams = useParams();
  const storeId = routeParams.storeId;

  useEffect(() => {
    const getPostData = async () => {
      const res = await axios.get(`${url}/stores/${storeId}`);
      setStore(res.data);
    };
    getPostData();
  }, []);
  // 為什麼stores有時候有接收到資料，從空陣列改變為有資料
  // 店有時候又沒有，維持空陣列？

  if (store.length === 0) {
    return null;
  }
  console.log(store);

  const {
    store_name,
    store_address,
    store_phone,
    img_url,
    average_hour,
    average_score,
  } = store;

  return (
    <div className="mx-auto max-w-screen-2xl bg-myFifthColor">
      <Header />
      <LastPage />
      <div className="flex min-h-[calc(100vh-230px)] justify-around py-4 pl-6 pr-6">
        <div className="h-96 w-80 rounded bg-white px-4 py-3 shadow-lg">
          <img
            className="mx-auto block h-20 w-20 rounded-full"
            src={img_url}
            alt=""
          />
          <h2 className="my-2 text-center text-3xl">{store_name}</h2>

          {/* rating */}
          <div className="flex justify-center">
            <div className="rating">{average_score}</div>
          </div>
          <ul>
            <li className="my-1 h-10 w-full text-left">
              地址：{store_address}
            </li>
            <li className="my-1 h-10 w-full text-left">電話：{store_phone}</li>
            <li className="my-1 h-10 w-full text-left">
              平均日工時：{average_hour}小時
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
              onClick={() => {
                {
                  isLoggedIn
                    ? navigate("/writepost")
                    : Swal.fire({ title: `請先登入再發表評論` });
                }
              }}
            />
          </div>
        </div>
        {/* StoreInfoCard ends here */}

        <div className="">
          {/* <!-- matched nums & sorting --> */}
          <div className="my-3 flex justify-between">
            {/* <div>12則評論{}</div> */}
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
          {/* <!-- posts --> */}
          <div className="">
            <Post storeId={storeId} />

            {/* {isLoggedIn ? null : (
              <a
                className="my-4 block h-14 w-full rounded-md bg-orange-200 pt-4 text-center font-bold text-myThirdColor"
                href="#"
              >
                登入以留言
              </a>
            )} */}
            {/* <!-- each response --> */}
            {/* <Comments />s */}

            {/* more comments */}
            {/* <a
              className="my-4 block h-14 w-full rounded-md bg-mySecondColor pt-4 text-center font-bold text-myyFirstColorHover"
              href=""
            >
              載入更多留言
            </a> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
