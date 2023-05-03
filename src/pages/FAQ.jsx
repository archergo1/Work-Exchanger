import Header from "../components/Header";
import Footer from "../components/Footer";
import LastPage from "../components/LastPage";

export default function FAQ() {
  return (
    <div className="mx-auto max-w-screen-2xl bg-myFifthColor">
      <Header />
      <LastPage />
      <div className="flex justify-around py-4 px-6">
        <div className="w-full rounded bg-white px-8 py-6 shadow-lg">
          <p className="my-2">Q: 為什麼不開放匿名發表評論呢？</p>
          <p className="my-2">A: 我們創立初衷希望有換宿經驗的小幫手分享親身換宿經驗，為避免可能出現大量洗評價現象，目前僅開放註冊會員發表評論。</p>
          <p className="my-2">Q: 是否會增加打工換宿媒合功能？</p>
          <p className="my-2">A: 目前希望能讓不論是換宿者或都能夠交流分享，藉由資訊流通，讓大家能有更理想的換宿期待。而由於人力有限，尚無增加媒合功能的計畫。</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
