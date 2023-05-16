import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className=" bg-white p-4 shadow md:flex md:items-center md:justify-between md:p-6">
      <span className="text-lg sm:text-center">
        © 2023
        <Link to={`/`}>
          <span className="hover:underline ">WorkExchange</span>
        </Link>
        . All Rights Reserved.
      </span>
      <div className="w-1/3 text-center">
        此網站僅為程式練習使用，相關內容如有雷同請見諒。
      </div>
      <ul className="mt-3 flex w-1/3 flex-col items-end sm:mt-0">
        <li>
          <Link to={`/about`}>
            <div className="text-lg hover:underline">關於我們</div>
          </Link>
        </li>

        <li>
          <Link to={`/contact`}>
            <div className="text-lg hover:underline">聯絡我們</div>
          </Link>
        </li>
        <li>
          <Link to={`/faq`}>
            <div className="text-lg hover:underline">常見問題</div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
