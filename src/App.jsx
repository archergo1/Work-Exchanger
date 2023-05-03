import { useState, useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import StoreBriefAndPosts from "./pages/StoreBriefAndPosts";
import MemberPage from "./pages/MemberPage";
import WritePost from "./pages/WritePost";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import "/src/tailwind.css";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/memberpage" element={<MemberPage />} />
        <Route path="/searchresults" element={<SearchResults />} />
        <Route path="/stores/:storeId" element={<StoreBriefAndPosts />} />
        <Route path="/writepost" element={<WritePost />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
}
