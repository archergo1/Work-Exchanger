import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from "../components/contexts/UserContext";


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
    .slice(0, 3);

  const hourAscending = data
    .slice()
    .sort((c, d) => {
      return c.average_hour - d.average_hour;
    })
    .slice(0, 3);

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

  const mostPopular = resultArr.slice(0, 3);

  return (
    <div className="ourSelect bg-mySecondColor pt-1">
      <h2 className="my-16 text-center text-4xl font-bold text-black">
        精選換宿
      </h2>
      <div className="recommended mx-auto flex max-w-screen-xl justify-between">
        {/* <!-- ourSelect cards --> */}
        <div className="mb-16 h-60 w-72 rounded bg-white shadow-sm border-2 border-myyFirstColorHover">
          <h3 className="my-8 text-center text-3xl text-myyFirstColorHover">
            最高評分
          </h3>
          <ol className="list-decimal pl-12">
            {scoreDescending.map(({ id, store_name }, index) => {
              return (
                <Link key={id} to={`/stores/${id}`}>
                  <li className="my-2 font-bold" key={index}>
                    {store_name}
                  </li>
                </Link>
              );
            })}
          </ol>
        </div>
        <div className="mb-16 h-60 w-72 rounded bg-white shadow-sm border-2 border-myyFirstColorHover">
          <h3 className="my-8 text-center text-3xl text-myyFirstColorHover">
            最熱門討論
          </h3>
          <ol className="list-decimal pl-12">
            {mostPopular.map(({ storeId, store_name }) => {
              return (
                <Link key={storeId} to={`/stores/${storeId}`}>
                  <li className="my-2 font-bold" key={storeId}>
                    {store_name}
                  </li>
                </Link>
              );
            })}
          </ol>
        </div>
        <div className="mb-16 h-60 w-72 rounded bg-white shadow-sm border-2 border-myyFirstColorHover">
          <h3 className="my-8 text-center text-3xl text-myyFirstColorHover">
            最短工時
          </h3>
          <ol className="list-decimal pl-12">
            {hourAscending.map(({ id, store_name }) => {
              return (
                <Link key={id} to={`/stores/${id}`}>
                  <li className="my-2 font-bold" key={id}>
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
