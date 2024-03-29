import { useState, useEffect } from "react";
import { url } from "../components/contexts/apiUrl";
import ShowMoreText from "react-show-more-text";
import axios from "axios";
import Rating from "./Rating";
import HashTags from "./HashTags";

export default function Post({ storeId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `${url}/stores/${storeId}/posts?_expand=user`
      );
      setPosts(res.data);
    };
    getData();
  }, []);

  if (posts.length === 0) {
    return null;
  }

  function dateComparison(a, b) {
    const date1 = new Date(a.post_date);
    const date2 = new Date(b.post_date);

    return date2 - date1;
  }

  const dateDescending = posts.slice().sort(dateComparison);

  return (
    <ul>
      {dateDescending.map(
        ({
          id,
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
          user,
        }) => {
          return (
            <li
              key={id}
              className="onePost my-4 flex w-960px rounded bg-white px-8 py-6 shadow-lg"
            >
              {/* <!-- mug --> */}
              <img
                className="mx-2 h-20 w-20 rounded-full"
                src={user.user_mug}
                alt="userMug"
              />

              <div className="w-full">
                <div className="flex justify-between">
                  <div>
                    <div className="flex items-center">
                      <div className="text-2xl font-bold">{user.name}</div>
                      <div className="mx-4 h-8 w-[136px] rounded-lg bg-myFirstColor pt-1 text-center text-white">
                        {type_pro}
                      </div>
                    </div>
                    <div>
                      <div className="mt-2">
                        <p className="mr-2 inline-block">
                          日工時：{work_hour}小時
                        </p>
                        •
                        <p className="ml-2 inline-block">
                          換宿期間：{work_span}
                        </p>
                      </div>
                      <div className="mb-2">
                        <p className="mr-2 inline-block">
                          換宿時間：{work_year} {first_half}
                        </p>
                        •
                        <p className="ml-2 inline-block">
                          發文日期：{post_date.substring(0, 10)}
                        </p>
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
                    expanded={true}
                    width={780}
                    truncatedEndingComponent={"... "}
                  >
                    {body}
                  </ShowMoreText>
                </div>

                <div className="my-3">
                  <p className="mb-4 font-bold">優點福利</p>
                  <HashTags tags={pros} />
                </div>

                <div className="my-3">
                  <p className="mb-4 font-bold">有待改進</p>
                  <HashTags tags={cons} />
                </div>
              </div>
            </li>
          );
        }
      )}
    </ul>
  );
}
