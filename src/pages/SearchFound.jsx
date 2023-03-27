import { useState, useEffect, useCallback } from "react";
import Header from "../components/Header";
// import BannerArea from "../components/BannerArea";
import Footer from "../components/Footer";
import Rating from "../components/Rating";
import axios from "axios";

const url = "http://localhost:3000";

const SearchFound = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getData = async () => {
      axios.get(`${url}/stores`).then((res) => {
        setData(res.data);
      });
    };
    getData();
  }, []);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = useCallback(() => {
    const matched = data.filter((item) =>
      item.store_name.includes(searchInput)
    );
    setResults(matched);
  }, [data, searchInput]);

  return (
    <>
      <Header />
      {/* banner area */}
      <div className="banner h-64 bg-bannerImage bg-center pt-24">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
          <input
            type="text"
            value={searchInput}
            id="search"
            className=":border-gray-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900"
            placeholder="請輸入換宿商家名稱"
            onChange={handleInputChange}
          />
          <button
            onClick={handleSearch}
            className="absolute right-2.5 bottom-2.5 rounded-lg bg-myThirdColor px-4 py-2 text-sm font-medium text-white focus:outline-none"
          >
            搜尋
          </button>
        </div>
      </div>
      {/* <!-- possible matches indicator --> */}
      <div className="my-4 ml-6 text-base">{results.length}個搜尋結果</div>
      {/* <!-- matched items --> */}
      <div className="mb-4 w-full px-6">
        <ul>
          {results.map((item) => {
            return (
              <li
                key={item.id}
                className="my-3 flex w-full rounded-md bg-white px-4 py-4"
              >
                {/* <!-- mug --> */}
                <img
                  className="h-24 w-24"
                  src="/src/assets/images/cat.jpg"
                  alt="cat"
                />

                <div className="ml-4 flex w-full items-center justify-between">
                  <div>
                    <p className="text-xl font-bold">{item.store_name}</p>
                    <p>{item.store_address}</p>
                    <p>{item.store_phone}</p>
                  </div>
                  <Rating score={item.average_score} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default SearchFound;
