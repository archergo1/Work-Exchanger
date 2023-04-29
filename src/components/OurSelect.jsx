import { useState, useEffect, useCallback } from "react";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import { url } from "../components/contexts/UserContext";
import axios from "axios";

export default function OurSelect() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      axios.get(`${url}/stores`).then((res) => {
        setData(res.data);
      });
    };
    getData();
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

  // const prosDescending = data.slice().sort((a, b) => {
  //   return;
  // });

  // Q sort 會改變原來的data!?
  // A 用slice來淺拷貝

  return (
    <div className="ourSelect bg-mySecondColor pt-1">
      <h2 className="my-16 text-center text-4xl font-bold text-black">
        精選換宿
      </h2>
      <div className="recommended mx-auto flex max-w-screen-xl justify-between">
        {/* <!-- ourSelect cards --> */}
        <div className="mb-16 h-60 w-72 rounded bg-white shadow-sm">
          <h3 className="my-8 text-center text-3xl text-myyFirstColorHover">
            評分最高
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

        <div className="mb-16 h-60 w-72 rounded bg-white shadow-sm">
          <h3 className="my-8 text-center text-3xl text-myyFirstColorHover">
            工時最短
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
        {/* not done yet */}
        <div className="mb-16 h-60 w-72 rounded bg-white shadow-sm">
          <h3 className="my-8 text-center text-3xl text-myyFirstColorHover">
            評論最多
          </h3>
          {/* <ol className="list-decimal pl-12">
            <li>
              <a href="">北山古洋樓</a>
            </li>
            <li>
              <a href="">晃晃二手書</a>
            </li>
            <li>
              <a href="">台東龍捲風</a>
            </li>
          </ol> */}
        </div>
      </div>
    </div>
  );
}
