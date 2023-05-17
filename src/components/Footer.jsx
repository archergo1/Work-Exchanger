import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className=" flex flex-col bg-white p-4 shadow md:flex md:items-center md:justify-between md:p-6">
      <div className="mb-4 flex w-full items-center">
        <p className="w-1/3 text-lg">
          © 2023 WorkExchange All Rights Reserved.
        </p>
        <div className="socialmedia flex w-1/3 justify-center text-center text-base">
          <a href="#">
            <img
              src="./static/images/facebook.png"
              alt="facebook"
              className="mx-2 h-10"
            />
          </a>
          <a href="#">
            <img
              src="./static/images/instagram.png"
              alt="facebook"
              className="mx-2 h-10"
            />
          </a>
          <a href="#">
            <img
              src="./static/images/youtube.png"
              alt="facebook"
              className="mx-2 h-10"
            />
          </a>
        </div>
        <ul className="mt-3 flex w-1/3 items-center justify-end">
          <li>
            <Link to={`/about`}>
              <p className="text-lg hover:underline mx-4">關於我們|</p>
            </Link>
          </li>
          <li>
            <Link to={`/contact`}>
              <p className="text-lg hover:underline mx-4">聯絡我們|</p>
            </Link>
          </li>
          <li>
            <Link to={`/faq`}>
              <p className="text-lg hover:underline">常見問題</p>
            </Link>
          </li>
        </ul>
      </div>
      <p>此網站僅為程式練習使用，相關內容如有雷同請見諒。</p>
    </div>
  );
}
