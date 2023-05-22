import { useState, useEffect } from "react";
import { url } from "../components/contexts/apiUrl";
import { Link } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis";
import axios from "axios";
import Rating from "./Rating";
import HashTags from "./HashTags";

const OurLatest = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // get all the posts from the server
    const getPosts = async () => {
      const res = await axios.get(`${url}/posts?_expand=store&_expand=user`);
      setPosts(res.data);
    };
    getPosts();
  }, []);

  if (posts.length === 0) {
    return null;
  }

  function dateComparison(a, b) {
    const date1 = new Date(a.post_date);
    const date2 = new Date(b.post_date);

    return date2 - date1;
  }

  const dateDescending = posts.slice().sort(dateComparison).slice(0, 4);
  console.log(dateDescending);

  return (
    <div className="ourLatest w-full bg-gray-100 pt-1">
      <div className="my-16 mx-auto flex items-center justify-center">
        <img src="/static/images/chat.png" alt="chat" className="h-12 w-12" />
        <h2 className="mx-2 text-center text-5xl font-bold text-black">
          最新評論
        </h2>
      </div>
      <ul className="mx-auto flex max-w-screen-xl flex-wrap justify-between">
        {dateDescending.map(
          ({
            id,
            store_name,
            post_date,
            score,
            body,
            pros,
            storeId,
            store,
            user,
          }) => (
            <li key={id}>
              <Link to={`/stores/${storeId}`}>
                <div className="mt-6 mb-10 h-72 w-600px rounded bg-white p-4 shadow-lg">
                  <div className="flex">
                    <img
                      className="mr-2 h-24 w-24"
                      src={store?.img_url}
                      alt="storeImage"
                    />
                    <div className="flex w-full justify-between">
                      <div>
                        <div className="mb-2 text-xl font-bold">
                          {store_name}
                        </div>
                        <div>{user?.name}</div>
                        <div>{post_date.substring(0, 10)}</div>
                      </div>
                      <Rating score={score} />
                    </div>
                  </div>
                  <LinesEllipsis
                    className="mt-4 mb-4 text-base text-gray-700"
                    text={body}
                    maxLine="2"
                    ellipsis="..."
                    trimRight
                    basedOn="letters"
                  />
                  <HashTags tags={pros} />
                </div>
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default OurLatest;
