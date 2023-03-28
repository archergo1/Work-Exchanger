import { useState, useEffect } from "react";
import OurLastCard from "./OurLatestCard";
import axios from "axios";

const url = "http://localhost:3000";

const OurLatest = () => {
  const [posts, setPosts] = useState([]);

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

  function dateComparison(a, b) {
    const date1 = new Date(a.post_date);
    const date2 = new Date(b.post_date);

    return date2 - date1;
  }

  const dateDescending = posts.slice().sort(dateComparison).slice(0, 4);
  console.log(posts);

  return (
    <div className="ourLatest w-full bg-gray-100 pt-1">
      <h2 className="my-16 text-center text-4xl text-black">最新評論</h2>
      <ul className="mx-auto flex max-w-screen-xl flex-wrap justify-between">
        {dateDescending.map((item) => (
          <OurLastCard
            id={item.id}
            key={item.id}
            store_name={item.store_name}
            author={item.author}
            post_date={item.post_date}
            score={item.score}
            body={item.body}
            pros={item.pros}
          />
        ))}
      </ul>
    </div>
  );
};

export default OurLatest;
