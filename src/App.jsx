import { useState } from "react";

import Home from "./pages/Home";
import SearchFound from "./pages/SearchFound";
import Posts from "./pages/Posts";
import MemberMyInfo from "./pages/MemberMyInfo";
import WritePage from "./pages/WritePage";
import "/src/tailwind.css";

function App() {
  return (
    <div className="mx-auto max-w-screen-2xl bg-myFifthColor">
      <MemberMyInfo />
    </div>
  );
}

export default App;
