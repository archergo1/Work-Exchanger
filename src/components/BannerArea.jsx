import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BannerArea() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  // const [results, setResults] = useState([]);

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

  return (
    <div className="banner h-80 bg-[url('/static/images/spring.jpg')] bg-center pt-32">
      <div className="mx-auto max-w-xl">
        <div className="relative">
          <input
            type="text"
            value={searchInput}
            id="search"
            className=":border-gray-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900"
            placeholder="請輸入換宿商家名稱，例如：北山古洋樓"
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
