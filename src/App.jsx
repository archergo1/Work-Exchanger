import { useState } from "react";
import "/src/tailwind.css";

import Home from "./pages/Home";
import SearchFound from "./pages/SearchFound";
import Posts from "./pages/Posts";
import MemberMyInfo from "./pages/MemberMyInfo";

import MemberMyPost from "./obsolete/MemberMyPost";
import WritePage1 from "./pages/WritePage1";
import WritePage2 from "./pages/WritePage2";
// import Test from "./pages/Test";
import axios from "axios";

function App() {
  return (
    <div className="mx-auto max-w-screen-2xl bg-myFifthColor">
      {/* <Ab/> */}
      {/* <Test></Test> */}
      {/* <Home/> */}
      {/* <MemberMyInfo/> */}
      {/* <SearchFound/> */}
      <Posts />
     
      {/* <WritePage1></WritePage1>   */}
      {/* <WritePage2></WritePage2> */}
    </div>
  );
}

export default App;
