import { useState, useEffect } from "react";
import axios from "axios";

const url = "http://localhost:3000";

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // get all the comments from the server

    const getComments = async () => {
      const res = await axios.get(`${url}/comments`);
      setComments(res.data);
      console.log(comments);
    };

    getComments();
  }, []);

  if (comments.length === 0) {
    return null;
  }

  const comment0 = comments[0];

  return (
    <div className="mt-4 flex">
      <img
        className="mx-2 h-16 w-16 rounded-full"
        src="/src/assets/images/dog.jpeg"
        alt=""
      />

      <div>
        <div className="text-2xl font-bold">{comment0.author}</div>
        <p className="my-2">{comment0.body}</p>
        <div>回覆日期：{comment0.comment_date}</div>
      </div>
    </div>
  );
};

export default Comments;
