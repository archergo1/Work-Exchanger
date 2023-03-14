import React from "react";

import Rating from "./Rating";

import Avatar from "./Avatar";
import HashTags from "./HashTags";


const OurLastCard = (props) => {
  return (
    <li>
      <div className="mt-6 mb-6 h-72 w-600px rounded bg-white px-6 py-4 shadow-lg">
        <div className="flex">
          <Avatar 
        //   img={props.img}
          />
          <div className="flex w-full justify-between">
            <div>
              <div className="mb-2 text-xl font-bold">{props.title}</div>
              <div>{props.author}</div>
              <div>{props.write_date}</div>
            </div>

            <Rating score={props.score}></Rating>
          </div>
        </div>
        <p className="mt-4 mb-4 text-base text-gray-700">{props.body}</p>
        <HashTags />
      </div>
    </li>
  );
};

export default OurLastCard;
