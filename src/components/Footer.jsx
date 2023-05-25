import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="mx-auto flex max-w-screen-2xl flex-col bg-white p-4  md:flex md:items-center md:justify-between md:p-6">
      <div className="mb-4 flex w-full items-center">
        <p className="w-1/3 text-lg">
          © 2023 WorkExchange All Rights Reserved.
        </p>
        <div className="socialmedia flex w-1/3 justify-center text-center text-base">
          <div className="hover:cursor-pointer">
            <img
              src="./static/images/facebook.png"
              alt="facebook"
              className="mx-2 h-10"
            />
          </div>
          <div className="hover:cursor-pointer">
            <img
              src="./static/images/instagram.png"
              alt="facebook"
              className="mx-2 h-10"
            />
          </div>
          <div className="hover:cursor-pointer">
            <img
              src="./static/images/youtube.png"
              alt="facebook"
              className="mx-2 h-10"
            />
          </div>
        </div>
        <ul className="mt-3 flex w-1/3 items-center justify-end">
          <li>
            <Link to={`/about`}>
              <p className="mx-4 text-lg hover:underline">關於我們|</p>
            </Link>
          </li>
          <li>
            <Link to={`/contact`}>
              <p className="mx-4 text-lg hover:underline">聯絡我們|</p>
            </Link>
          </li>
          <li>
            <Link to={`/faq`}>
              <p className="text-lg hover:underline">常見問題</p>
            </Link>
          </li>
        </ul>
      </div>
      <p>此網站僅為程式練習使用，相關內容如有雷同敬請見諒。</p>
    </div>
  );
}
