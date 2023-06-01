import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { url } from "../components/contexts/apiUrl";
import { userNameContext } from "../components/contexts/GlobalState";
import Post from "../components/Post";
import Rating from "../components/Rating";
import Button from "../components/Button";
import axios from "axios";
import Swal from "sweetalert2";

export default function StoreBriefAndPosts() {
  const navigate = useNavigate();

  const { userName, setUserName } = useContext(userNameContext);
  const [store, setStore] = useState([]);
  const [posts, setPosts] = useState([]);
  const routeParams = useParams();
  const storeId = routeParams.storeId;

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`${url}/stores/${storeId}`);
      setStore(res.data);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`${url}/stores/${storeId}/posts`);
      setPosts(res.data);
    };
    getData();
  }, []);
  // 為什麼stores有時候有接收到資料，從空陣列改變為有資料
  // 店有時候又沒有，維持空陣列？

  if (store.length === 0) {
    return null;
  }

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
      <div className="flex min-h-[calc(100vh-230px)] justify-around py-4 pl-6 pr-6">
        <div className="h-[28rem] w-80 rounded bg-white px-4 py-3 shadow-lg">
          <img
            className="mx-auto block h-24 w-24 rounded-full"
            src={img_url}
            alt="storeImage"
          />
          <h2 className="my-2 text-center text-3xl">{store_name}</h2>

          {/* rating */}
          <div className="my-4 flex justify-center">
            <Rating score={average_score} />
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
            <Button
              style={"button"}
              text="發表評論"
              onClick={() => {
                {
                  userName
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
          <p className="my-3 flex justify-between font-bold">
            {posts.length}則評論
          </p>
          {/* <!-- posts --> */}
          <div className="">
            <Post storeId={storeId} />
          </div>
        </div>
      </div>
    </div>
  );
}
