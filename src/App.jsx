import { useState, useEffect } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import StoreBriefAndPosts from "./pages/StoreBriefAndPosts";
import MemberPage from "./pages/MemberPage";
import WritePost from "./pages/WritePost";
import axios from "axios";
import "/src/tailwind.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="memberpage" element={<MemberPage />} />
        <Route path="searchresults" element={<SearchResults />} />
        <Route path="stores">
          <Route path=":storeId" element={<StoreBriefAndPosts />} />
        </Route>
        <Route path="writepost" element={<WritePost />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
