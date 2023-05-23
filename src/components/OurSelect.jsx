import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from "../components/contexts/apiUrl";

export default function OurSelect() {
  const [data, setData] = useState([]);
  const [post, setPost] = useState([]);

  useEffect(() => {
    const getData = async () => {
      axios.get(`${url}/stores`).then((res) => {
        setData(res.data);
      });
    };
    getData();
  }, []);

  useEffect(() => {
    const getPost = async () => {
      axios.get(`${url}/posts`).then((res) => {
        setPost(res.data);
      });
    };
    getPost();
  }, []);

  const scoreDescending = data
    .slice()
    .sort((a, b) => {
      return b.average_score - a.average_score;
    })
    .slice(0, 4);

  const hourAscending = data
    .slice()
    .sort((c, d) => {
      return c.average_hour - d.average_hour;
    })
    .slice(0, 4);

  console.log(hourAscending);

  const count = {};
  post.forEach((item, index) => {
    const name = post[index].store_name;
    if (count[name]) {
      count[name].count += 1;
    } else {
      count[name] = { count: 1, index: index };
    }
  });

  console.log(count);

  const countArr = Object.entries(count);

  console.log(countArr);

  countArr.sort((a, b) => b[1].count - a[1].count);

  const resultArr = [];
  const addedNames = new Set();
  for (let i = 0; i < countArr.length; i++) {
    const name = countArr[i][0];
    const index = countArr[i][1].index;
    if (!addedNames.has(name)) {
      resultArr.push(post[index]);
      addedNames.add(name);
    }
  }
  console.log(resultArr);

  const mostPopular = resultArr.slice(0, 4);

  return (
    <div className="ourSelect bg-mySecondColor pt-1">
      <div className="my-16 mx-auto flex items-center justify-center">
        <img
          src="/static/images/thumbup.png"
          alt="thumbup"
          className="h-12 w-12"
        />
        <h2 className="mx-2 text-center text-5xl font-bold text-black">
          精選換宿
        </h2>
      </div>
      <div className="mx-auto flex max-w-screen-xl flex-wrap justify-between">
        {/* <!-- ourSelect cards --> */}
        <div className="mb-24 mt-6 h-72 w-72 rounded border-2 border-myyFirstColorHover bg-white shadow-lg">
          <h3 className="my-8 text-center text-3xl text-myyFirstColorHover underline">
            最高評分
          </h3>
          <ol className="list-decimal pl-12">
            {scoreDescending.map(({ id, store_name }, index) => {
              return (
                <Link key={id} to={`/stores/${id}`}>
                  <li
                    className="my-3 text-lg font-bold hover:text-myyFirstColorHover"
                    key={index}
                  >
                    {store_name}
                  </li>
                </Link>
              );
            })}
          </ol>
        </div>
        <div className="mb-24 mt-6 h-72 w-72 rounded border-2 border-myyFirstColorHover bg-white shadow-lg">
          <h3 className="my-8 text-center text-3xl text-myyFirstColorHover underline">
            最熱門討論
          </h3>
          <ol className="list-decimal pl-12">
            {mostPopular.map(({ storeId, store_name }) => {
              return (
                <Link key={storeId} to={`/stores/${storeId}`}>
                  <li
                    className="my-3 text-lg font-bold hover:text-myyFirstColorHover"
                    key={storeId}
                  >
                    {store_name}
                  </li>
                </Link>
              );
            })}
          </ol>
        </div>
        <div className="mb-24 mt-6 h-72 w-72 rounded border-2 border-myyFirstColorHover bg-white shadow-lg">
          <h3 className="my-8 text-center text-3xl text-myyFirstColorHover underline">
            最短工時
          </h3>
          <ol className="list-decimal pl-12">
            {hourAscending.map(({ id, store_name }) => {
              return (
                <Link key={id} to={`/stores/${id}`}>
                  <li
                    className="my-3 text-lg font-bold hover:text-myyFirstColorHover"
                    key={id}
                  >
                    {store_name}
                  </li>
                </Link>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
