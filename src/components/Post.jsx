import { useState, useEffect } from "react";
import { url } from "../components/contexts/UserContext";
import Rating from "./Rating";
import axios from "axios";
// import LinesEllipsis from "react-lines-ellipsis";
import ShowMoreText from "react-show-more-text";

export default function Post({ storeId }) {
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // get all the posts from the server
  const getData = async () => {
    const res = await axios.get(`${url}/stores/${storeId}/posts`);
    setPosts(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  if (posts.length === 0) {
    return null;
  }
  console.log(posts);

  function dateComparison(a, b) {
    const date1 = new Date(a.post_date);
    const date2 = new Date(b.post_date);

    return date2 - date1;
  }

  const dateDescending = posts.slice().sort(dateComparison).slice(0, 4);
  console.log(dateDescending);

  return (
    <ul>
      {dateDescending.map(
        (
          {
            id,
            author,
            type_pro,
            work_hour,
            work_span,
            work_year,
            first_half,
            post_date,
            score,
            body,
            pros,
            cons,
          },
          index
        ) => {
          return (
            <li
              key={id}
              className="onePost my-4 flex w-960px rounded bg-white px-8 py-6 shadow-lg"
            >
              {/* <!-- mug --> */}
              <img
                className="mx-2 h-16 w-16 rounded-full"
                src="/src/assets/images/dog.jpeg"
                alt=""
              />

              {/* <!-- info & comment --> */}
              <div className="w-full">
                <div className="flex justify-between">
                  <div>
                    <div className="flex items-center">
                      <div className="text-2xl font-bold">{author}</div>
                      <div className="mx-4 h-6 w-32 rounded-lg bg-yellow-400 text-white">
                        {type_pro}
                      </div>
                    </div>
                    <div>
                      <div className="mt-2">
                        <div className="mr-2 inline-block">
                          日工時：{work_hour}小時
                        </div>
                        •
                        <div className="ml-2 inline-block">
                          換宿期間：{work_span}
                        </div>
                      </div>
                      <div className="mb-2">
                        <div className="mr-2 inline-block">
                          換宿時間：{work_year} {first_half}
                        </div>
                        •
                        <div className="ml-2 inline-block">
                          發文日期：{post_date.substring(0, 10)}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- rating stars --> */}
                  <div className="">
                    <Rating score={score} />
                  </div>
                </div>
                <div className="my-2 text-lg">
                  <ShowMoreText
                    lines={3}
                    more="看更多"
                    less="看更少"
                    className="content-css"
                    anchorClass="show-more-less-clickable"
                    expanded={false}
                    width={780}
                    truncatedEndingComponent={"... "}
                  >
                    {body}
                  </ShowMoreText>
                </div>
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
            </li>
          );
        }
      )}
    </ul>
  );
}
