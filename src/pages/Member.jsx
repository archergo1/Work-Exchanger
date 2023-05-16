import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useForm } from "react-hook-form";
import { url } from "../components/contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MySetting from "../components/MySetting";
import Button from "../components/Button";
import ShowMoreText from "react-show-more-text";
import "react-tabs/style/react-tabs.css";
import Comments from "../components/Comments";
import Rating from "../components/Rating";
import axios from "axios";
import Swal from "sweetalert2";

export default function Member() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );
  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const [JWTtoken, setJWTtoken] = useState(localStorage.getItem("JWTtoken"));
  const [userId, setUserId] = useState(localStorage.getItem("userId"));

  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState([]);

  const [bookmarks, setBookmarks] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  useEffect(() => {
    const getUserData = async () => {
      const res = await axios.get(`${url}/users/${userId}`);
      setUser(res.data);
    };
    getUserData();
  }, []);

  useEffect(() => {
    // get all posts by the user
    const getPostData = async () => {
      const res = await axios.get(`${url}/users/${userId}/posts?_expand=store`);
      setPosts(res.data);
    };
    getPostData();
  }, [user]);

  useEffect(() => {
    // get all bookmarked stores by the user
    const getBookmarkedStores = async () => {
      const res = await axios.get(
        `${url}/users/${userId}/bookmarks?_expand=store`
      );
      setBookmarks(res.data);
    };
    getBookmarkedStores();
  }, [user]);

  console.log(bookmarks);

  console.log(user);
  const { id, name, user_mug } = user;

  if (!posts) {
    return null;
  }

  console.log(posts);
  console.log(userId);

  function logOut() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("JWTtoken");
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
  }

  const onSubmit = (data) => {
    console.log(data);
    const { newName, newPassword } = data;

    console.log(JWTtoken);

    updateInfo();
    function updateInfo() {
      axios
        .patch(
          `${url}/600/users/${userId}`,
          { ...user, name: newName.trim(), password: newPassword.trim() },
          {
            headers: {
              authorization: `Bearer ${JWTtoken}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          localStorage.setItem("userName", response.data.name);
          setUserName(response.data.name);

          reset();
          Swal.fire({ title: `修改成功` });
        })
        .catch((error) => {
          console.log(error.response);
          if (error.response.data === "jwt expired") {
            Swal.fire({ title: `登入過期，請重新登入` });
            logOut();
            setTimeout(() => {
              navigate("/");
            }, 2000);
          }
        });
    }
  };

  return (
    <div className="mx-auto max-w-screen-2xl flex-col bg-myFifthColor">
      <Header />
      <div className="min-h-[calc(100vh-200px)]">
        <Tabs className="flex flex-grow justify-around py-4 pl-6 pr-6">
          <div className="h-96 w-80 rounded bg-white px-8 py-3 shadow-lg">
            <img
              className="mx-auto block h-20 w-20 rounded-full"
              src={user_mug}
              alt="user_mug"
            />
            {/* look at here */}
            <h1 className="my-6 text-center text-3xl">{userName}</h1>

            <TabList>
              <Tab className="flex hover:cursor-pointer">
                <MySetting text="個人資料" />
              </Tab>
              {/* <Tab className="flex">
                <MySetting text="我的通知"></MySetting>
              </Tab> */}
              {/* <Tab className="flex">
                <MySetting text="我的最愛店家"></MySetting>
              </Tab> */}
              <Tab className="flex hover:cursor-pointer">
                <MySetting text="我的評論" />
              </Tab>
            </TabList>
            <div className="flex justify-center">
              <Button
                text="發表評論"
                onClick={() => {
                  navigate("/writepost");
                }}
              />
              {/* <button
                className="button1"
                onClick={() => {
                  Swal.fire({ title: `成功登出！` });
                  logOut();
                  setTimeout(() => {
                    navigate("/");
                  }, 1000);
                }}
              >
                登出
              </button> */}
            </div>
          </div>

          <TabPanel>
            <div className="w-960px rounded bg-white px-8 py-6 shadow-lg">
              <p className="text-center text-2xl font-bold my-3">修改個人資訊</p>
              {/* <img
                className="mx-auto mb-6 block h-20 w-20 rounded-full"
                src={user_mug}
                alt="userMug"
              /> */}
              {/* <!-- upload your mug --> */}
              <div className="flex justify-center">
                {/* <a
                  className="my-2 h-10 w-20 rounded-md bg-mySecondColor pt-2 text-center text-myFirstColor"
                  href=""
                >
                  上傳頭貼
                </a> */}
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6 justify-center flex flex-col">
                  <label
                    htmlFor="newName"
                    className="mb-2 text-xl font-medium text-gray-900"
                  >
                    名稱
                  </label>
                  <input
                    type="text"
                    id="newName"
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-md text-gray-900 focus:border-myyFirstColorHover"
                    placeholder="Archer Huang"
                    {...register("newName", { required: false })}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="newPassword"
                    className="mb-2 block text-xl font-medium text-gray-900"
                  >
                    密碼
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-md text-gray-900 focus:border-myyFirstColorHover"
                    placeholder="New password"
                    {...register("newPassword", {
                      required: {
                        value: true,
                        message: "請輸入密碼！",
                      },
                      minLength: {
                        value: 6,
                        message: "密碼長度至少6位字元",
                      },
                    })}
                  />
                  <p className="mb-2 text-red-600">
                    {errors.newPassword?.message}
                  </p>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="newPasswordConfirm"
                    className="mb-2 block text-xl font-medium text-gray-900"
                  >
                    請再次輸入密碼
                  </label>
                  <input
                    type="password"
                    id="newPasswordConfirm"
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-md text-gray-900 focus:border-myyFirstColorHover"
                    placeholder="Please enter new password again"
                    {...register("newPasswordConfirm", {
                      required: {
                        value: true,
                        message: "請再次輸入密碼！",
                      },
                      minLength: {
                        value: 6,
                        message: "密碼長度至少6位字元",
                      },
                    })}
                  />
                  <p className="mb-2 text-red-600">
                    {errors.newPasswordConfirm?.message}
                  </p>
                </div>

                <div className="flex justify-center">
                  {/* <Button1 text="修改密碼"></Button1> */}
                  <input type="submit" value="儲存修改" className="button2" />
                </div>
              </form>
            </div>
          </TabPanel>
          {/* <TabPanel>
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
          </TabPanel> */}

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
              {posts.length == 0 ? (
                <p className="my-4 flex w-960px rounded bg-white px-8 py-6 text-center shadow-lg">
                  看來你還沒發表任何換宿評論喔......快來分享你的換宿心得吧！
                </p>
              ) : (
                <ul>
                  {posts.map(
                    ({
                      id,
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
                      store,
                    }) => {
                      return (
                        <li
                          key={id}
                          className="my-4 flex w-960px rounded bg-white px-8 py-6 shadow-lg"
                        >
                          {/* <!-- mug --> */}
                          <img
                            className="mx-2 h-16 w-16 rounded-full"
                            src={store?.img_url}
                            alt=""
                          />

                          {/* <!-- info & comment --> */}
                          <div className="w-full">
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
                                <Rating score={score} />
                              </div>
                            </div>
                            <div className="my-2 text-lg">
                              <ShowMoreText
                                lines={3}
                                more="看更多"
                                less="看更少"
                                className="content-css"
                                anchorClass="show-more-less-clickable"
                                expanded={true}
                                width={780}
                                truncatedEndingComponent={"... "}
                              >
                                {body}
                              </ShowMoreText>
                            </div>
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

                  {/* if logged in, render the link */}
                  {/* {isLoggedIn ? null : (
                  <a
                    className="my-4 block h-14 w-full rounded-md bg-orange-200 pt-4 text-center font-bold text-myThirdColor"
                    href="#"
                  >
                    登入以留言
                  </a>
                )} */}
                  {/* <!-- each response --> */}
                  {/* <Comments />    */}

                  {/* more comments */}
                  {/* <a
                  className="my-4 block h-14 w-full rounded-md bg-mySecondColor pt-4 text-center font-bold text-myyFirstColorHover"
                  href=""
                >
                  載入更多留言
                </a> */}
                </ul>
              )}
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}
