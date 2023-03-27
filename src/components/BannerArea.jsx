import { useState, useEffect } from "react";
import axios from "axios";

const url = "http://localhost:3000";

function BannerArea() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

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

  const handleSearch = () => {
    const results = data.filter((item) =>
      item.store_name.includes(searchInput)
    );
    setData(results);
    console.log(data);
  };

  return (
    // <!-- banner & search input-->
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
  );
}

export default BannerArea;
