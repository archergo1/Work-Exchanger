import React from "react";

const Footer = () => {
  return (
    <div className=" bg-white p-4 shadow md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-gray-500 sm:text-center">
        © 2023
        <a href="#" className="hover:underline">
          WorkExchange
        </a>
        . All Rights Reserved.
      </span>
      <ul className="mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            關於我們
          </a>
        </li>

        <li>
          <a href="#" className="hover:underline">
            聯絡我們
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
