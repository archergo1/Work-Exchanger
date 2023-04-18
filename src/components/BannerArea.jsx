import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function BannerArea() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const getData = async () => {
  //     axios.get(`${url}/stores`).then((res) => {
  //       setData(res.data);
  //     });
  //   };
  //   getData();
  // }, []);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  // const handleSearch = useCallback(() => {
  //   const matched = data.filter((item) =>
  //     item.store_name.includes(searchInput)
  //   );
  //   setResults(matched);
  // }, [data, searchInput]);

  return (
    // <!-- banner & search input-->
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

          {/* direct to SearchInput page */}
          <button
            onClick={() => {
              navigate("/searchresults", {
                state: {
                  searchInput,
                },
              });
            }}
            className="absolute right-2.5 bottom-2.5 rounded-lg bg-myThirdColor px-4 py-2 text-sm font-medium text-white focus:outline-none"
          >
            搜尋
          </button>
        </div>
      </div>
    </div>
  );
}

export default BannerArea;
