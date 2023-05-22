import { useState, useEffect } from "react";
import { url } from "../components/contexts/apiUrl";
import axios from "axios";
import OurLastCard from "./OurLatestCard";

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
      <h2 className="my-16 text-center text-5xl font-bold text-black">
        最新評論
      </h2>
      <ul className="mx-auto flex max-w-screen-xl flex-wrap justify-between">
        {dateDescending.map(
          ({
            id,
            store_name,
            author,
            post_date,
            score,
            body,
            pros,
            storeId,
            store,
            user,
          }) => (
            <OurLastCard
              user={user}
              store={store}
              key={id}
              store_name={store_name}
              post_date={post_date.substring(0, 10)}
              score={score}
              body={body}
              pros={pros}
              storeId={storeId}
            />
          )
        )}
      </ul>
    </div>
  );
};

export default OurLatest;
