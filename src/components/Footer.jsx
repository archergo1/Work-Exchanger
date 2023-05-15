import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className=" bg-white p-4 shadow md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-gray-500 sm:text-center">
        © 2023
        <Link to={`/`}>
          <span className="hover:underline">WorkExchange</span>
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0">
        <li>此網站僅為程式練習使用，相關內容如有雷同請見諒。</li>
        <li>
          <Link to={`/about`}>
            <div className="mx-4 hover:underline md:mr-6">關於我們</div>
          </Link>
        </li>

        <li>
          <Link to={`/contact`}>
            <div className="hover:underline">聯絡我們</div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
