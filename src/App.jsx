import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import "./App.css";

import "/dist/tailwind.css";

import Home from "./pages/Home";
import SearchFound from "./pages/SearchFound";
import Comments from "./pages/Comments";
import MemberMyInfo from "./pages/MemberMyInfo";
import MemberMyNoti from "./pages/MemberMyNoti";
import MemberMyComment from "./pages/MemberMyComment";
import WritePage1 from "./pages/WritePage1";
import WritePage2 from "./pages/WritePage2";

import Test from "./obsolete/Test";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="mx-auto max-w-screen-2xl bg-myFifthColor">
      {/* <Test></Test> */}
      <Home></Home>
      {/* <MemberMyInfo></MemberMyInfo> */}
      {/* <SearchFound></SearchFound> */}
      {/* <Comments></Comments> */}
      {/* <MemberMyNoti></MemberMyNoti> */}
      {/* <MemberMyComment></MemberMyComment> */}
      {/* <WritePage1></WritePage1> */}
      {/* <WritePage2></WritePage2> */}
    </div>
  );
}

export default App;
