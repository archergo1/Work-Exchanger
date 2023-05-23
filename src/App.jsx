import { HashRouter, Route, Routes } from "react-router-dom";
import "/src/tailwind.css";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import StoreBriefAndPosts from "./pages/StoreBriefAndPosts";
import Member from "./pages/Member";
import WritePost from "./pages/WritePost";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/member" element={<Member />} />
        <Route path="/searchresults" element={<SearchResults />} />
        <Route path="/stores/:storeId" element={<StoreBriefAndPosts />} />
        <Route path="/writepost" element={<WritePost />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
