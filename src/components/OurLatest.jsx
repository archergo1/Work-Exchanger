import React from "react";

import OurLastCard from "./OurLatestCard";

import data from "../data/data"

const posts = data.posts

const OurLatest = () => {
  return (
    <div className="ourLatest w-full bg-gray-100 pt-1">
      <h2 className="my-16 text-center text-4xl text-black">最新評論</h2>

      <ul className="mx-auto flex max-w-screen-xl flex-wrap justify-between">
        {posts.map((post) => (
          <OurLastCard
            id={post.id}
            key={post.id}
            title={post.title}
            author={post.author}
            post_date={post.post_date}
            score={post.score}
            body={post.body}
          />
        ))}
      </ul>
    </div>
  );
};

export default OurLatest;
