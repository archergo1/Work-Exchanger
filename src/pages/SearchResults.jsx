import { useState, useEffect, useCallback } from "react";
import { useLocation, Link } from "react-router-dom";
import { url } from "../components/contexts/UserContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Rating from "../components/Rating";
import LastPage from "../components/LastPage";
import BannerArea from "../components/BannerArea";
import axios from "axios";

export default function SearchResults() {
  const location = useLocation();
  const initialSearch = location.state.searchInput;
  console.log(initialSearch);

  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState(initialSearch);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getData = () => {
      axios.get(`${url}/stores`).then((res) => {
        setData(res.data);
      });
    };
    getData();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [data]);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  // const handleSearch = async (e) => {
  //   e.preventDefault();
  //   return await axios
  //     .get(`${url}/stores?q=${searchInput}`)
  //     .then((response) => {
  //       console.log(response);
  //       setResults(response.data);
  //       setSearchInput("");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const handleSearch = useCallback(() => {
    const matched = data.filter((item) =>
      item.store_name.includes(searchInput)
    );
    setResults(matched);
  }, [data, searchInput]);

  return (
    <div className="mx-auto max-w-screen-2xl bg-myFifthColor">
      <Header />
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
              onKeyDown={(event) => { 
                if (event.key === "Enter") {
                  handleSearch();
                }
               }}
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
      <LastPage />
     
      <div className="my-4 ml-6 text-base font-bold">
        {results.length} 個搜尋結果
      </div>
      {/* <!-- matched items --> */}
      <div className="mb-4 w-full px-6">
        <ul>
          {results.map((result) => {
            return (
              <Link to={`/stores/${result.id}`} key={result.id}>
                <li
                  key={result.id}
                  className="my-3 flex w-1/2 rounded-md bg-white px-4 py-4"
                >
                  <img className="h-24 w-24" src={result.img_url} alt="cat" />

                  <div className="ml-4 flex w-full items-center justify-between">
                    <div>
                      <p className="text-xl font-bold">{result.store_name}</p>
                      <p>{result.store_address}</p>
                      <p>{result.store_phone}</p>
                    </div>
                    <Rating score={result.average_score} />
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
