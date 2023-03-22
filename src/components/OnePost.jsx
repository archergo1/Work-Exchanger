import React from "react";
import { useState, useEffect } from "react";
import Rating from "./Rating";
import axios from "axios";
const url = "http://localhost:3000";

const OnePost = () => {
  const [posts, setPosts] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    // get all the posts from the server
    const getPosts = async () => {
      const res = await axios.get(`${url}/posts`);
      setPosts(res.data);
    };

    getPosts();
  }, []);

  if (posts.length === 0) {
    return null;
  }
  const post0 = posts[0];

  return (
    <div className="onePost flex">
      {/* <!-- mug --> */}
      <img
        className="mx-2 h-16 w-16 rounded-full"
        src="/src/assets/images/dog.jpeg"
        alt=""
      />

      {/* <!-- info & comment --> */}
      <div>
        <div className="flex justify-between">
          <div>
            <div className="text-2xl font-bold">{post0.author}</div>
            <div>
              <span className="my-2 mr-2 text-base">
                日工時：{post0.work_hour}小時
              </span>
              •<span className="my-2 ml-2">換宿期間：3個月</span>
              <div className="my-2 mr-2">發文日期：{post0.post_date}</div>
            </div>
          </div>
          {/* <!-- rating stars --> */}
          <div>
            <Rating score={post0.score}></Rating>
          </div>
        </div>
        <p className="my-2 text-lg">{post0.body}</p>

        {/* <!-- pros --> */}
        <div className="pt-2 pb-2">
          <div className="my-3 text-base font-bold">優點福利</div>
          <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #環境整潔
          </span>
          <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #職員友善
          </span>
          <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #有供餐
          </span>
        </div>
        {/* <!-- cons --> */}
        <div className="pt-2 pb-2">
          <div className="my-3 text-base font-bold">有待改進</div>
          <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            交通不便
          </span>
        </div>
        {/* <!-- functions here not done yet--> */}

        <div></div>
      </div>
    </div>
  );
};

export default OnePost;
