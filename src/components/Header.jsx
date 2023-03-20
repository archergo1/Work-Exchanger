import React from "react";

import Button from "./Button";

import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

// s

// const Button = ({ openModal, text }) => {
//   return (
//     <div className="button2" onClick={openModal}>
//       {text}
//     </div>
//   );
// };

// const style1="button1"
// const style2="button2"

const Register = () => (
  <div className="mx-auto w-[640px] flex-col rounded-lg bg-white px-6 py-6">
    <div className="my-2 flex justify-end">
      <a href="" className="text-lg">
        X
      </a>
    </div>
    <div className="">
      <form action="">
        <div className="mb-6 text-center">
          <label
            htmlFor="storePhone"
            className="mb-2 flex text-left text-xl font-medium text-gray-900"
          >
            帳號
          </label>
          <input
            type="text"
            id="account"
            className="w-full justify-center rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
            placeholder=""
            required
          />
        </div>

        <div className="mb-6 text-center">
          <label
            htmlFor="password"
            className="mb-2 flex text-left text-xl font-medium text-gray-900"
          >
            密碼
          </label>
          <input
            type="password"
            id="password"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
            placeholder=""
            required
          />
        </div>

        <div className="mb-6 text-center">
          <label
            htmlFor="email"
            className="mb-2 flex text-left text-xl font-medium text-gray-900"
          >
            信箱
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
            placeholder=""
            required
          />
        </div>

        <input
          type="submit"
          value="註冊"
          className="mr-2 mb-2 w-full rounded-full bg-myFirstColor px-5 py-3 text-center text-lg font-medium text-white hover:bg-myyFirstColorHover"
        />
      </form>
    </div>

    <div className="mx-auto text-center">
      <span>已經有帳號？</span>
      <a href="#" className="my-4 text-center text-lg text-myyFirstColorHover">
        立即登入
      </a>
    </div>
  </div>
);

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  // 註冊 登入互相切換要用巢狀迴圈嗎？
  return (
    <div className="mx-auto flex justify-between bg-white p-4 shadow">
      <a className="h-10 w-10" href="#">
        <img src="/src/assets/images/uniqlo.png" alt="" />
      </a>

      <Button openModal={openModal} text="登入/註冊" />

      <Modal
        className="flex"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        {/* Login Component */}
        <div className="mx-auto my-4 w-[640px] flex-col rounded-lg bg-white px-6 py-6">
          <div className="flex justify-end ">
            <button className="text-lg" onClick={closeModal}>
              X
            </button>
          </div>
          <div className="">
            <form action="">
              <div className="mb-6 text-center">
                <label
                  htmlFor="account"
                  className="mb-2 flex text-left text-xl font-medium text-gray-900"
                >
                  帳號
                </label>
                <input
                  type="text"
                  id="account"
                  className="w-full justify-center rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                  placeholder=""
                  required
                />
              </div>

              <div className="mb-6 text-center">
                <label
                  htmlFor="password"
                  className="mb-2 flex text-left text-xl font-medium text-gray-900"
                >
                  密碼
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                  placeholder=""
                  required
                />
              </div>
              <input
                type="submit"
                value="登入"
                className="mr-2 mb-2 w-full rounded-full bg-myFirstColor px-5 py-3 text-center text-lg font-medium text-white hover:bg-myyFirstColorHover"
              />
            </form>
          </div>
          <div className="mx-auto text-center">
            <span>沒有帳號？</span>
            <a
              href="#"
              className="my-4 text-center text-lg text-myyFirstColorHover"
            >
              立即註冊
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
