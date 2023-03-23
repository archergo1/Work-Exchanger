import React from "react";

const HashTags = ({ pros }) => {
  return (
    <ul className="pt-2 pb-2">
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
  );
};

export default HashTags;
