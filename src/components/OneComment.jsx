import React from "react";

import Rating from "./Rating";

const OneComment = () => {
  return (
    <div className="oneComment flex">
      {/* <!-- mug --> */}
      <img
        className="mx-2 h-16 w-16 rounded-full"
        src="/src/assets/images/dog.jpeg"
        alt=""
      />

      {/* <!-- info & comment --> */}
      <div>
        {/* <!-- basic info --> */}
        <div className="flex justify-between">
          <div>
            <div className="text-2xl font-bold">Tom</div>
            <div>
              <span>日工時：約3小時</span>
              <span>換宿期間：3個月</span>
              <div>2022/12/09</div>
            </div>
          </div>
          {/* <!-- rating stars --> */}
          <div>
            <Rating
            score="5"
            ></Rating>
          </div>
        </div>

        {/* <!-- comment content --> */}
        <p className="my-2">
          若無法徹底理解打工換宿，恐怕會是人類的一大遺憾。既然如此，我們都很清楚，這是個嚴謹的議題。打工換宿似乎是一種巧合，但如果我們從一個更大的角度看待問題，這似乎是一種不可避免的事實。對我個人而言，打工換宿不僅僅是一個重大的事件
        </p>

        {/* <!-- pros --> */}
        <div className="pt-2 pb-2">
          <div className="my-3 text-base font-bold">優點福利</div>
          <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #環境整潔
          </span>
          <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #職員友善
          </span>
          <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #有供餐
          </span>
        </div>
        {/* <!-- cons --> */}
        <div className="pt-2 pb-2">
          <div className="my-3 text-base font-bold">優點福利</div>
          <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            交通不便
          </span>
        </div>
        {/* <!-- functions here not done yet--> */}

        <div></div>
      </div>
    </div>
  );
};

export default OneComment;
