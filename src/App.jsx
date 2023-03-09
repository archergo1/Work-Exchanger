import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import "./App.css";

import "../dist/tailwind.css";

import Home from './pages/Home';
import SearchFound from './pages/SearchFound';
import Comment from './pages/Comments';
import MemberMyInfo from "./pages/MemberMyInfo";

import Test from "./Test";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
     <MemberMyInfo></MemberMyInfo>
    </div>
  );
}

export default App;
