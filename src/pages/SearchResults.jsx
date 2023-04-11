import { useState, useEffect, useCallback } from "react";
import { useLocation, NavLink } from "react-router-dom";
import Header from "../components/Header";
// import BannerArea from "../components/BannerArea";
import Footer from "../components/Footer";
import Rating from "../components/Rating";
import LastPage from "../components/LastPage";
import axios from "axios";

const url = "http://localhost:3000";

const SearchResults = () => {
  const location = useLocation();
  const initialSearch = location.state.searchInput;
  console.log(initialSearch);

  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState(initialSearch);
  const [results, setResults] = useState([]);

  const getData = () => {
    axios.get(`${url}/stores`).then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [data]);

  // useEffect(() => {
  //   setSearchInput(initialSearch)
  //   console.log(searchInput);
  //  },[initialSearch])

  //  useEffect(()=>{handleSearch()},[searchInput])

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = useCallback(() => {
    // if (searchInput==='') {
    // console.log('沒有被執行');
    //   return;
    // }
    const matched = data.filter((item) =>
      item.store_name.includes(searchInput)
    );
    setResults(matched);
  }, [data, searchInput]);

  // const handleSearch2 = useCallback(() => {
  //   if (!initialSearch)  {
  //     return;
  //   }
  //   const matched = data.filter((item) =>
  //     item.store_name.includes(initialSearch)
  //   );
  //   setResults(matched);
  // }, [data, searchInput]);
  // handleSearch2();

  return (
    <div className="mx-auto max-w-screen-2xl bg-myFifthColor">
      <Header />
      {/* banner area */}
      <div className="banner h-64 bg-bannerImage bg-center pt-24">
        <div className="mx-auto max-w-xl">
          <div className="relative">
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
      </div>

      {/* <!-- possible matches indicator --> */}
      <div className="my-4 ml-6 text-base font-bold">
        {results.length} 個搜尋結果
      </div>
      {/* <!-- matched items --> */}
      <div className="mb-4 w-full px-6">
        <ul>
          {results.map((item) => {
            return (
              <NavLink to={`/stores/${item.id}`}>
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
               </NavLink>
            );
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default SearchResults;
