import { useState } from "react";
import "/src/tailwind.css";

import Home from "./pages/Home";
import SearchFound from "./pages/SearchFound";
import Posts from "./pages/Posts";
import MemberMyInfo from "./pages/MemberMyInfo";
import WritePage from "./pages/WritePage";

// import Test from "./pages/Test";

function App() {
  return (
    <div className="mx-auto max-w-screen-2xl bg-myFifthColor">
    
      {/* <Home/> */}
      {/* <MemberMyInfo/> */}
      <SearchFound/>
      {/* <Posts /> */}
      {/* <WritePage/>   */}
    </div>
  );
}

export default App;
