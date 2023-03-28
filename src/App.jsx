<<<<<<< HEAD
import { useState, useEffect } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
=======
import { useState } from "react";

>>>>>>> main
import Home from "./pages/Home";
import SearchFound from "./pages/SearchFound";
import Posts from "./pages/Posts";
import MemberMyInfo from "./pages/MemberMyInfo";
import WritePage from "./pages/WritePage";
<<<<<<< HEAD
import axios from "axios";
=======
>>>>>>> main
import "/src/tailwind.css";

function App() {
  return (
<<<<<<< HEAD
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MemberMyInfo" element={<MemberMyInfo />} />
        <Route path="/SearchFound" element={<SearchFound />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/WritePage" element={<WritePage />} />
      </Routes>
    </HashRouter>
=======
    <div className="mx-auto max-w-screen-2xl bg-myFifthColor">
      <MemberMyInfo />
    </div>
>>>>>>> main
  );
}

export default App;
