import React from "react";

import Rating from "./Rating";
import Avatar from "./Avatar";
import HashTags from "./HashTags";

const OurLastCard = ({ title, author, post_date, score, body }) => {
  return (
    <li>
      <div className="mt-6 mb-6 h-72 w-600px rounded bg-white px-6 py-4 shadow-lg">
        <div className="flex">
          <Avatar
          //   img={props.img}
          />
          <div className="flex w-full justify-between">
            <div>
              <div className="mb-2 text-xl font-bold">{title}</div>
              <div>{author}</div>
              <div>{post_date}</div>
            </div>

            <Rating score={score} />
          </div>
        </div>
        <p className="mt-4 mb-4 text-base text-gray-700">{body}</p>
        <HashTags />
      </div>
    </li>
  );
};

export default OurLastCard;
