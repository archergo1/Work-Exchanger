import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { url } from "../components/contexts/UserContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LastPage from "../components/LastPage";
import axios from "axios";
import Swal from "sweetalert2";

export default function WritePost() {
  const navigate = useNavigate(); 
  const [stores, setStores] = useState([]);
  const userId = parseInt(localStorage.getItem("userId"));
  const JWTtoken = localStorage.getItem("JWTtoken");
  const userName = localStorage.getItem("userName");

  console.log(userId);
  console.log(JWTtoken);
  console.log(userName);

  useEffect(() => {
    const getStoresData = async () => {
      axios.get(`${url}/stores`).then((res) => {
        setStores(res.data);
      });
    };
    getStoresData();
  }, []);

  console.log(stores);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = (data) => {
    const {
      work_span,
      work_hour,
      first_half,
      type_pro,
      score,
      store_name,
      store_address,
      store_phone,
    } = data;

    // another data to be sent to `stores` if there is no store_name matched in the database
    const newStoreInfo = {
      store_name: store_name,
      store_phone: store_phone,
      store_address: store_address,

      // 先用第一篇po文的資訊代替average_score and average_hour
      average_score: score,
      average_hour: work_hour,
      img_url: "/static/images/storeImage/hostel.png"
    };

    // make data type conversions for that the values type of data are strings by default
    // const toBoolean1 = type_pro === "true" ? true : false;
    // const toBoolean2 = first_half === "true" ? true : false;
    // const toNumber1 = parseInt(work_span);
    const toNumber2 = parseInt(work_hour);
    const toNumber3 = parseInt(score);
    const nowTime = new Date();

    const convertedData = {
      ...data,
      // type_pro: toBoolean1,
      // first_half: toBoolean2,
      // work_span: toNumber1,
      work_hour: toNumber2,
      score: toNumber3,
      post_date: nowTime,
    };

    // to find if there is any store_name matched in the database
    // if not, also add a new store info
    const storeExisted = stores.find((item, index) => {
      return item.store_name === store_name;
    });
    console.log(storeExisted);

    let storeId = "";
    if (storeExisted) {
      storeId = parseInt(storeExisted.id);
      console.log("a");
      addPost();
    } else {
      storeId = stores.length + 1;
      addPost();
      addStore();
      console.log("b");
    }

    console.log(storeId);

    function addPost() {
      axios
        .post(
          `${url}/posts`,
          {
            userId: userId,
            storeId: storeId,
            author: userName,
            ...convertedData
          },
          {
            headers: {
              authorization: `Bearer ${JWTtoken}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          Swal.fire({ title: `送出成功` });
          setTimeout(() => {
            navigate(`/stores/${storeId}`);
          }, 1500);
        })
        .catch((error) => {
          console.log(error.response);
          Swal.fire({ title: `送出失敗` });
        });
    }

    function addStore() {
      axios
        .post(`${url}/stores`, newStoreInfo, {
          headers: {
            authorization: `Bearer ${JWTtoken}`,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  };
  // why should i need to use async await, even in post?

  return (
    <div className="mx-auto max-w-screen-2xl bg-myFifthColor">
      <Header />
      <LastPage />
      {/* FORM STARTS HERE */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-around py-4 pl-6 pr-6">
          <div className="w-full rounded bg-white px-8 py-6 shadow-lg">
            <div className="firstSection max-w-3xl">
              <div className="my-4 text-2xl font-bold">發表評論</div>
              <div className="my-6">
                分享你的換宿經驗，幫助下一個換宿人有更棒的換宿體驗！
              </div>
              <h1 className="my-4 text-2xl font-bold text-myFirstColor">
                換宿資訊
              </h1>

              {/* <!-- store name --> */}
              <div className="mb-6">
                <label
                  htmlFor="store_name"
                  className="mb-2 block text-xl font-medium text-gray-900"
                >
                  換宿名稱
                </label>
                <input
                  type="text"
                  id="store_name"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                  placeholder="例如：北山古洋樓"
                  {...register("store_name", { required: true })}
                />
                {errors.store_name && (
                  <p className="text-red-600">此欄位為必填</p>
                )}
              </div>

              {/* tel */}
              <div className="mb-6">
                <label
                  htmlFor="store_phone"
                  className="mb-2 block text-xl font-medium text-gray-900"
                >
                  換宿電話
                </label>
                <input
                  type="text"
                  id="store_phone"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                  placeholder="例如：071234567"
                  {...register("store_phone", { required: true })}
                />
                {errors.store_phone && (
                  <p className="text-red-600">此欄位為必填</p>
                )}
              </div>

              {/* address*/}
              <div className="mb-6">
                <label
                  htmlFor="store_address"
                  className="mb-2 block text-xl font-medium text-gray-900"
                >
                  換宿地址
                </label>

                <input
                  type="text"
                  id="store_address"
                  className="my-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                  placeholder="例如：花蓮縣XX鄉XX村XX號"
                  {...register("store_address", { required: true })}
                />
                {errors.store_address && (
                  <p className="text-red-600">此欄位為必填</p>
                )}
              </div>

              {/* work_span */}
              <div className="mb-6">
                <label
                  htmlFor="work_span"
                  className="mb-2 block text-xl font-medium text-gray-900"
                >
                  換宿天數
                </label>
                <select
                  name="work_span"
                  id="work_span"
                  className="rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                  {...register("work_span", { required: true })}
                >
                  <option name="work_span" value={"1週－2週"}>
                    1週－2週
                  </option>
                  <option name="work_span" value={"3週－1個月"}>
                    3週－1個月
                  </option>
                  <option name="work_span" value={"大於1個月"}>
                    大於1個月
                  </option>
                </select>
              </div>
              {errors.work_span && <p className="text-red-600">此欄位為必填</p>}

              {/* work_year */}
              <div className="mb-6">
                <label
                  htmlFor="work_year"
                  className="mb-2 block text-xl font-medium text-gray-900"
                >
                  換宿年份
                </label>
                <select
                  name="work_year"
                  id="work_year"
                  className="mr-3 rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                  {...register("work_year", { required: true })}
                >
                  <option name="work_year" value="2017">
                    2017
                  </option>
                  <option name="work_year" value="2018">
                    2018
                  </option>
                  <option name="work_year" value="2019">
                    2019
                  </option>
                  <option name="work_year" value="2020">
                    2020
                  </option>
                  <option name="work_year" value="2021">
                    2021
                  </option>
                  <option name="work_year" value="2022">
                    2022
                  </option>
                  <option name="work_year" value="2023">
                    2023
                  </option>
                </select>
                <select
                  name="first_half"
                  id="first_half"
                  className="mr-10 rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                  {...register("first_half", { required: true })}
                >
                  <option name="first_half" value="上半年">
                    上半年
                  </option>
                  <option name="first_half" value="下半年">
                    下半年
                  </option>
                </select>
              </div>

              {/* work_hour */}
              <div className="mb-6">
                <label
                  htmlFor="work_hour"
                  className="mb-2 block text-xl font-medium text-gray-900"
                >
                  每日工時（小時）
                </label>
                <input
                  min="1"
                  max="8"
                  type="number"
                  id="work_hour"
                  className="block w-36 rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                  {...register("work_hour", { required: true, max: 8 })}
                  // 為什麼這裡的最大最小值驗證沒效？
                />
              </div>

              {/* type_pro */}
              <div className="mb-6">
                <label
                  htmlFor="type_pro"
                  className="mb-2 block text-xl font-medium text-gray-900"
                >
                  換宿類型
                </label>
                <select
                  name="type_pro"
                  id="type_pro"
                  className="rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                  {...register("type_pro", { required: true })}
                >
                  <option name="type_pro" value="一般換宿">
                    一般換宿
                  </option>
                  <option name="type_pro" value="專業換宿">
                    專業換宿
                  </option>
                </select>
              </div>
              <hr />
            </div>
            <hr />
            <div className="secondSection max-w-3xl">
              <h2 className="my-4 text-2xl font-bold text-myFirstColor">
                換宿評價
              </h2>
              {/*  */}
              {/* <!-- pros --> */}
              <div className="mb-6">
                <div className="mb-2 block text-xl font-medium text-gray-900">
                  優點福利(複選)
                </div>

                <input
                  name="pros"
                  className=""
                  type="checkbox"
                  id="goodEnv"
                  value="店家環境佳"
                  {...register("pros")}
                />
                <label
                  htmlFor="goodEnv"
                  className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #店家環境佳
                </label>

                <input
                  name="pros"
                  className=""
                  type="checkbox"
                  id="goodLocation"
                  value="交通便利"
                  {...register("pros")}
                />
                <label
                  htmlFor="goodLocation"
                  className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #交通便利
                </label>

                <input
                  name="pros"
                  className=""
                  type="checkbox"
                  id="friendlyPeople"
                  value="人員友善"
                  {...register("pros")}
                />
                <label
                  htmlFor="friendlyPeople"
                  className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #人員友善
                </label>

                <input
                  className=""
                  type="checkbox"
                  id="goodRules"
                  value="制度完善"
                  {...register("pros")}
                />
                <label
                  htmlFor="goodRules"
                  className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #制度完善
                </label>

                <input
                  name="pros"
                  className=""
                  type="checkbox"
                  id="freeMeal"
                  value="免費供餐"
                  {...register("pros")}
                />
                <label
                  htmlFor="freeMeal"
                  className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #免費供餐
                </label>

                <input
                  name="pros"
                  className=""
                  type="checkbox"
                  id="allowance"
                  value="有零用金/補助餐費"
                  {...register("pros")}
                />
                <label
                  htmlFor="allowance"
                  className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #有零用金/補助餐費
                </label>

                <input
                  className=""
                  type="checkbox"
                  id="trialActivityEnv"
                  value="有體驗活動"
                  {...register("pros")}
                />
                <label
                  htmlFor="trialActivityEnv"
                  className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #有體驗活動
                </label>
                <input
                  name="pros"
                  className=""
                  type="checkbox"
                  id="cleanEnv"
                  value="環境整潔"
                  {...register("pros")}
                />
                <label
                  htmlFor="cleanEnv"
                  className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #環境整潔
                </label>
                <input
                  name="pros"
                  className=""
                  type="checkbox"
                  id="goodDorm"
                  value="住宿佳"
                  {...register("pros")}
                />
                <label
                  htmlFor="goodDorm"
                  className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #住宿佳
                </label>

                {/* <a
                  href=""
                  className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #有供餐
                </a>
                <a
                  href=""
                  className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #職員友善
                </a>
                <a
                  href=""
                  className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #交通便利
                </a>

                <a
                  href=""
                  className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #居住環境佳
                </a>
                <a
                  href=""
                  className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #有體驗課程
                </a> */}
              </div>

              {/* <!-- cons --> */}
              <div className="mb-6">
                <div className="mb-2 block text-xl font-medium text-gray-900">
                  有待改進(複選)
                </div>

                <input
                  className=""
                  type="checkbox"
                  id="badEnv"
                  value="店家環境差"
                  {...register("cons")}
                />
                <label
                  htmlFor="badEnv"
                  className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #店家環境差
                </label>

                <input
                  className=""
                  type="checkbox"
                  id="badLocation"
                  value="交通不便"
                  {...register("cons")}
                />
                <label
                  htmlFor="badLocation"
                  className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #交通不便
                </label>
                <input
                  className=""
                  type="checkbox"
                  id="unfriendlyPeople"
                  value="人員不友善"
                  {...register("cons")}
                />
                <label
                  htmlFor="unfriendlyPeople"
                  className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #人員不友善
                </label>
                <input
                  className=""
                  type="checkbox"
                  id="badRules"
                  value="制度不完善"
                  {...register("cons")}
                />
                <label
                  htmlFor="badRules"
                  className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #制度不完善
                </label>
                <input
                  className=""
                  type="checkbox"
                  id="longHours"
                  value="工時過長"
                  {...register("cons")}
                />
                <label
                  htmlFor="longHours"
                  className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #工時過長
                </label>
                <input
                  className=""
                  type="checkbox"
                  id="cleanEnv"
                  value="性騷擾"
                  {...register("cons")}
                />
                <label
                  htmlFor="cleanEnv"
                  className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #性騷擾
                </label>
                <input
                  className=""
                  type="checkbox"
                  id="inConsistency"
                  value="實際換宿狀況與敘述不符"
                  {...register("cons")}
                />
                <label
                  htmlFor="inConsistency"
                  className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #實際換宿狀況與敘述不符
                </label>
                <input
                  className=""
                  type="checkbox"
                  id="badDorm"
                  value="住宿差"
                  {...register("cons")}
                />
                <label
                  htmlFor="badDorm"
                  className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #住宿差
                </label>

                {/* <a
                  href=""
                  className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #有供餐
                </a>
                <a
                  href=""
                  className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #職員友善
                </a>
                <a
                  href=""
                  className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #交通便利
                </a>

                <a
                  href=""
                  className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #居住環境佳
                </a>
                <a
                  href=""
                  className="my-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #有體驗課程
                </a> */}
              </div>
              {/* <!-- give a score --> */}
              <div className="mb-6">
                <label
                  htmlFor="score"
                  className="mb-2 block text-xl font-medium text-gray-900"
                >
                  整體評分（１～５分）
                </label>
                <input
                  type="number"
                  max="5"
                  min="1"
                  id="score"
                  className="block w-16 rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                  {...register("score", { required: true })}
                />
                {errors.score && <p className="text-red-600">此欄位為必填</p>}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="body"
                  className="mb-2 block text-xl font-medium text-gray-900"
                >
                  分享換宿心得
                </label>
                <textarea
                  required
                  id="body"
                  className="block h-60 w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                  placeholder="分享你的換宿生活，有關店家環境、工作狀況和換宿生活等"
                  name=""
                  cols="30"
                  rows="10"
                  {...register("body", { required: true })}
                ></textarea>
                {errors.body && <p className="text-red-600">此欄位為必填</p>}
              </div>
              <input type="submit" value="送出" className="button2" />
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}
