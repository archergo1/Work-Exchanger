import React from "react";

// import Rating from "./Rating";
import OurLastCard from "./OurLastCard";

import data from "./data/posts.js";

const posts=data.posts;

const createCard = (contact)=>{
  return(
     <OurLastCard
      key={contact.id}
      title={contact.title}
      author={contact.author}
      write_date={contact.write_date}
      score={contact.score}
      body={contact.body}
     />
  )
  // console.log(contact)
}


const OurLatest = () => {
  return (
    // <!-- latest -->
    <div className="ourLatest w-full bg-gray-100 pt-1">
      <h2 className="my-16 text-center text-4xl text-black">最新評論</h2>

      <ul className="mx-auto flex max-w-screen-xl flex-wrap justify-between">
        {posts.map(createCard)}
      </ul>
    </div>
  );
};

export default OurLatest;
