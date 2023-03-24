import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import LastPage from "../components/LastPage";
import Button from "../components/Button";
import axios from "axios";
import Swal from "sweetalert2";

import { useForm } from "react-hook-form";

const url = "http://localhost:3000";
const trial = {
  author: "al",
  title: "北山古洋樓",
  post_date: "2025/07/12",
  work_year: "2024",
  first_half: true,
  work_hour: 3,
  work_span: 14,
  type_pro: true,
  score: 5,
  body: "eat all",
  pros: [
    "環境整潔",
    "人員友善",
    "有零用金",
    "體驗課程",
    "住宿優良",
    "提供機車",
  ],
  cons: [
    "環境髒亂",
    "交通不便",
    "人員不友善",
    "住宿差",
    "工時長",
    "性騷擾",
    "圖文不符",
  ],
};


const WritePage1 = () => {


  // why should i need to use async await, even in post?
  const addPost = async () => {
    try{
    await axios.post(`${url}/posts`, trial)
    .then((res) => {
      console.log(res);
      Swal.fire({ title: `送出成功` });
    });
    } catch(error){
      console.log(error);
      Swal.fire({ title: `送出失敗`});
    }
  };


  const {register, handleSubmit, watch, formState:{errors}} = useForm();
  const onSubmit = (data) => {console.log(typeof data);}

  console.log(register);
  // console.log(watch("example"));

  return (
    <>
      <Header />
      <LastPage />

      <button onClick={addPost}>send</button>

      <div className="flex justify-around py-4 pl-6 pr-6">

        <div className="w-full rounded bg-white px-8 py-6 shadow-lg">
          <div className="max-w-3xl">
            <h1 className="my-4 text-2xl font-bold">發表評論</h1>
            <div className="my-6">
              分享你的換宿經驗，幫助下一個換宿人有更棒的換宿體驗！
            </div>

            <h1 className="my-4 text-2xl font-bold text-myFirstColor">
              換宿資訊
            </h1>

            {/* FORM STARTS HERE */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* <!-- store name --> */}
              <div className="mb-6">
                <label
                  htmlFor="storeName"
                  className="mb-2 block text-xl font-medium text-gray-900"
                >
                  換宿名稱  
                <input
                  // defaultValue="北山古洋樓"
                  type="text"
                  id="storeName"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                  placeholder="例如：北山古洋樓"
                  {...register("storeName", {required: true})}
                />
                </label>
              </div>
              {errors.storeNameRequired && <p>此欄位為必填</p>}
              {/* tel */}
              <div className="mb-6">
                <label
                  htmlFor="storePhone"
                  className="mb-2 block text-xl font-medium text-gray-900"
                >
                  換宿電話
                </label>
                <input
                  type="text"
                  id="storePhone"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                  placeholder="例如：071234567"
                  {...register("storePhone", {required: true})}
                />
                {errors.storePhoneRequired && <p>此欄位為必填</p>}
              </div>

              {/* address*/}
              <div className="mb-6">
                <label
                  htmlFor="address"
                  className="mb-2 block text-xl font-medium text-gray-900"
                >
                  換宿地址
                </label>

                <select
                  defaultValue="taipei"
                  name=""
                  id="county"
                  className="mr-3 rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                  {...register("county", {required: true})}
                >
                  <option value="台北市">台北市</option>
                  <option value="高雄市">高雄市</option>
                </select>
                <select
                  defaultValue="大安區"
                  name=""
                  id="district"
                  className="rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                  {...register("district", {required: true})}
                >
                  <option value="大安區">大安區</option>
                  <option value="楠梓區">楠梓區</option>
                </select>
                <input
                  type="text"
                  id="road"
                  className="my-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                  placeholder="XX路XX號"
                  {...register("road", {required: true})}
                />
                {errors.roadRequired && <p>此欄位為必填</p>}
              </div>

              {/* work_span */}
              <div className="mb-6">
                <label
                  htmlFor="workSpan"
                  className="mb-2 block text-xl font-medium text-gray-900"
                >
                  換宿天數
                </label>
                <select
                  defaultValue="7"
                  name=""
                  id="workSpan"
                  className="rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                  {...register("workSpan", {required: true})}
                >
                  <option value="10" >1週－2週</option>
                  <option value="25">3週－1個月</option>
                  <option value="60">大於1個月</option>
                </select>
              </div>
              {errors.workSpanRequired && <p>此欄位為必填</p>}

              {/* work_year */}
              <div className="mb-6">
                <label
                  htmlFor="workYear"
                  className="mb-2 block text-xl font-medium text-gray-900"
                >
                  換宿年份
                </label>
                <select
                  defaultValue="2022"
                  name=""
                  id="workYear"
                  className="mr-3 rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                  {...register("workYear", {required: true})}
                >
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </select>
                <select
                  // defaultValue={true} 
                  name=""
                  id="firstHalf"
                  className="mr-10 rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                  {...register("firstHalf", {required: true})}
                >
                  <option value={true}>上半年</option>
                  <option value={false}>下半年</option>
                </select>
              </div>

              {/* work_hour */}
              <div className="mb-6">
                <label
                  htmlFor="workHour"
                  className="mb-2 block text-xl font-medium text-gray-900"
                >
                  每日工時
                </label>
                <input
                  type="number"
                  id="workHour"
                  className="block w-36 rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                  placeholder="3小時"
                  {...register("workHour", {min:1, max:8})}
                />
              </div>

              {/* type_pro */}
              <div className="mb-6">
                <label
                  htmlFor="typePro"
                  className="mb-2 block text-xl font-medium text-gray-900"
                >
                  換宿類型
                </label>
                <select
                  defaultValue={false}
                  name=""
                  id="typePro"
                  className="rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                  {...register("typePro", {required: true})}
                >
                  <option value={false}>一般換宿</option>
                  <option value={true}>專業換宿</option>
                </select>
              </div>
              <input type="submit" />
              <Button text="下一步"></Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WritePage1;
