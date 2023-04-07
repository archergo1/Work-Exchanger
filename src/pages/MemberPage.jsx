import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MySetting from "../components/MySetting";
import Button from "../components/Button";
import Button1 from "../components/Button1";
import "react-tabs/style/react-tabs.css";
import Comments from "../components/Comments";
import Rating from "../components/Rating";
import axios from "axios";
import Swal from "sweetalert2";
const url = "http://localhost:3000";

function MemberPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  let JWTtoken = "";
  let userId = "";
  userId = localStorage.getItem("userId");
  JWTtoken = localStorage.getItem("JWTtoken");

  useEffect(() => {
    // could i use IIFE here?
    const getUserData = async () => {
      const res = await axios.get(`${url}/users/${userId}`);
      setUser(res.data);
    };
    getUserData();
  }, []);

  useEffect(() => {
    if (!user) {
      return null;
    }
    // get posts by the user
    const getPostData = async () => {
      const res = await axios.get(`${url}/users/${userId}/posts`);
      setPosts(res.data);
    };
    getPostData();
    console.log("212");
  }, [user]);
  const { id, name, email, password } = user;
  if (!posts) {
    return null;
  }
  console.log(posts);

  const onSubmit = (data) => {
    function updateInfo() {
      axios
        .patch(
          `${url}/600/users/${userId}`,
          { ...data, name: name, email: email, password: password },
          {
            headers: {
              authorization: `Bearer ${JWTtoken}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          Swal.fire({ title: `修改成功` });
        })
        .catch((error) => {
          console.log(error.response);
          Swal.fire({ title: `修改失敗` });
        });
    }
    updateInfo();
    // 為什麽會新增data這個key?
  };

  return (
    <div className="mx-auto max-w-screen-2xl flex-col bg-myFifthColor">
      <Header />
      <div className="">
        <Tabs className="flex flex-grow justify-around py-4 pl-6 pr-6">
          <div className="h-96 w-80 rounded bg-white px-8 py-3 shadow-lg">
            <img
              className="mx-auto block h-20 w-20 rounded-full"
              src="/src/assets/images/dog.jpeg"
              alt=""
            />
            <h1 className="my-6 text-center text-3xl">{name}</h1>

            <TabList className="">
              <Tab className="flex">
                <MySetting text="個人資料"></MySetting>
              </Tab>
              <Tab className="flex">
                <MySetting text="我的通知"></MySetting>
              </Tab>
              <Tab className="flex">
                <MySetting text="我的評論"></MySetting>
              </Tab>
            </TabList>
          </div>

          <TabPanel>
            <div className="w-960px rounded bg-white px-8 py-6 shadow-lg">
              <img
                className="mx-auto block h-20 w-20 rounded-full"
                src="/src/assets/images/dog.jpeg"
                alt=""
              />
              {/* <!-- upload your mug --> */}
              <div className="flex justify-center">
                <a
                  className="my-2 h-10 w-20 rounded-md bg-mySecondColor pt-2 text-center text-myFirstColor"
                  href=""
                >
                  上傳頭貼
                </a>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xl font-medium text-gray-900"
                  >
                    名稱
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                    placeholder="Archer Huang"
                    {...register("name", { required: false })}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xl font-medium text-gray-900"
                  >
                    信箱
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                    placeholder="WorkExchange@gmail.com"
                    {...register("email", { required: false })}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="mb-2 block text-xl font-medium text-gray-900"
                  >
                    密碼
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-myyFirstColorHover"
                    {...register("password", { required: false })}
                  />
                </div>
                <div className="flex justify-center">
                  {/* <Button1 text="修改密碼"></Button1> */}
                  <input
                    type="submit"
                    value="儲存修改"
                    className="button2"
                  ></input>
                </div>
              </form>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="w-960px rounded bg-white px-8 py-6 shadow-lg">
              <ul>
                <li className="my-2 rounded-md bg-mySecondColor">
                  <img
                    className="mx-2 my-2 inline h-12 w-12 rounded-full"
                    src="/src/assets/images/bird.jpg"
                    alt=""
                  />
                  <span>Amy 和其他 2 人 已回覆您在 小彩虹民宿 的評論</span>
                </li>
                <li className="my-2 rounded-md bg-mySecondColor">
                  <img
                    className="mx-2 my-2 inline h-12 w-12 rounded-full"
                    src="/src/assets/images/bird.jpg"
                    alt=""
                  />
                  <span>Amy 和其他 2 人 已回覆您在 小彩虹民宿 的評論</span>
                </li>
                <li className="my-2 rounded-md bg-mySecondColor">
                  <img
                    className="mx-2 my-2 inline h-12 w-12 rounded-full"
                    src="/src/assets/images/bird.jpg"
                    alt=""
                  />
                  <span>Amy 和其他 2 人 已回覆您在 小彩虹民宿 的評論</span>
                </li>
                <li className="my-2 rounded-md bg-mySecondColor">
                  <img
                    className="mx-2 my-2 inline h-12 w-12 rounded-full"
                    src="/src/assets/images/bird.jpg"
                    alt=""
                  />
                  <span>Amy 和其他 2 人 已回覆您在 小彩虹民宿 的評論</span>
                </li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              {/* <!-- matched nums & sorting --> */}
              <div className="my-3 flex justify-between">
                <div className="font-bold">{posts.length}則評論</div>
                {/* <div>
                <select
                  defaultValue={"latest"}
                  id="sorting"
                  className="block w-full rounded-md border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="latest">依最新評論</option>
                  <option value="highest">依最高評分</option>
                   <option value="hottest">最熱門</option> 
                </select>
              </div> */}
              </div>

              <ul>
                {posts.map(
                  ({
                    store_name,
                    post_date,
                    work_year,
                    first_half,
                    work_hour,
                    work_span,
                    type_pro,
                    score,
                    body,
                    pros,
                    cons,
                  }) => {
                    return (
                      <li
                        key={id}
                        className="my-4 flex w-960px rounded bg-white px-8 py-6 shadow-lg"
                      >
                        {/* <!-- mug --> */}
                        <img
                          className="mx-2 h-16 w-16 rounded-full"
                          src="/src/assets/images/dog.jpeg"
                          alt=""
                        />

                        {/* <!-- info & comment --> */}
                        <div>
                          <div className="flex justify-between">
                            <div>
                              <div className="flex items-center">
                                <div className="text-2xl font-bold">
                                  {store_name}
                                </div>
                                <div className="mx-4 h-6 w-32 rounded-lg bg-yellow-400 text-white">
                                  {type_pro}
                                </div>
                              </div>
                              <div>
                                <div className="mt-2">
                                  <div className="mr-2 inline-block">
                                    日工時：{work_hour}小時
                                  </div>
                                  •
                                  <div className="ml-2 inline-block">
                                    換宿期間：{work_span}
                                  </div>
                                </div>
                                <div className="mb-2">
                                  <div className="mr-2 inline-block">
                                    換宿時間：{work_year} {first_half}
                                  </div>
                                  •
                                  <div className="ml-2 inline-block">
                                    發文日期：{post_date.substring(0, 10)}
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!-- rating stars --> */}
                            <div>
                              <Rating score={score}></Rating>
                            </div>
                          </div>
                          <p className="my-2 text-lg">{body}</p>

                          {/* <!-- pros --> */}
                          <div className="my-3">
                            <div className="mb-4 font-bold">優點福利</div>
                            <ul>
                              {pros.map((item, index) => {
                                return (
                                  <li
                                    key={index}
                                    className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                                  >
                                    #{item}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                          {/* <!-- cons --> */}
                          <div className="my-3">
                            <div className="mb-4 font-bold">有待改進</div>
                            <ul>
                              {cons.map((item, index) => {
                                return (
                                  <li
                                    key={index}
                                    className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                                  >
                                    #{item}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                          {/* <!-- other functions may need to be added in the future*/}
                          <div></div>
                        </div>
                      </li>
                    );
                  }
                )}

                <hr />

                {/* if logged in, render the link */}
                {isLoggedIn ? null : (
                  <a
                    className="my-4 block h-14 w-full rounded-md bg-orange-200 pt-4 text-center font-bold text-myThirdColor"
                    href="#"
                  >
                    登入以留言
                  </a>
                )}
                {/* <!-- each response --> */}
                {/* <Comments />    */}

                {/* more comments */}
                <a
                  className="my-4 block h-14 w-full rounded-md bg-mySecondColor pt-4 text-center font-bold text-myyFirstColorHover"
                  href=""
                >
                  載入更多留言
                </a>
              </ul>
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}
// 如何在content不足的時候，把footer置底？ 用了flex-grow好像沒效果？
export default MemberPage;
