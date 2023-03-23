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
  const post0 = posts[0];

  if (posts.length === 0) {
    return null;
  }

  const {
    author,
    title,
    post_date,
    work_year,
    first_half,
    work_hour,
    work_span,
    type_pro,
    score,
    body,
    pros,
    cons,
  } = post0;
  // could i use destructuring assignment here?

  let firstHalf = "";
  if (first_half) {
    firstHalf = "上半年";
  } else {
    firstHalf = "下半年";
  }

  let typePro = "";
  if (type_pro) {
    typePro = "專長換宿";
  } else {
    typePro = "一般換宿";
  }

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
            <div className="flex items-center">
              <div className="text-2xl font-bold">{author}</div>
              <div className="mx-4 h-6 w-32 rounded-lg bg-yellow-400 text-white">
                {typePro}
              </div>
            </div>
            <div>
              <div className="mt-2">
                <div className="mr-2 inline-block">日工時：{work_hour}小時</div>
                •<div className="ml-2 inline-block">換宿期間：3個月</div>
              </div>
              <div className="mb-2">
                <div className="mr-2 inline-block">
                  換宿時間：{work_year} {firstHalf}
                </div>
                •<div className="ml-2 inline-block">發文日期：{post_date}</div>
              </div>
            </div>
          </div>
          {/* <!-- rating stars --> */}
          <div>
            <Rating score={score}></Rating>
          </div>
        </div>
        <p className="my-2 text-lg">{body}</p>

        {/* <!-- pros --> */}
        <div className="my-3">
          <div className="mb-4 font-bold">優點福利</div>
          <ul>
            {pros.map((item, index) => {
              return (
                <li
                  key={index}
                  className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #{item}
                </li>
              );
            })}
          </ul>
        </div>
        {/* <!-- cons --> */}
        <div className="my-3">
          <div className="mb-4 font-bold">有待改進</div>
          <ul>
            {cons.map((item, index) => {
              return (
                <li
                  key={index}
                  className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #{item}
                </li>
              );
            })}
          </ul>
        </div>
        {/* <!-- other functions may need to be added in the future*/}
        <div></div>
      </div>
    </div>
  );
};

export default OnePost;
