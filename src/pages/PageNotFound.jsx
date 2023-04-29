import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PageNotFound() {
  return (
    <div className="mx-auto max-w-screen-2xl bg-myFifthColor">
      <Header />
      <div className="">
        <h2 className="my-2 text-center text-6xl">
          抱歉，這個頁面換宿去了......
        </h2>
        <p className="my-2 text-center text-4xl">您也該放個假了。</p>
        <img src="/src/assets/images/404.jpg" alt="" />
      </div>
      <Footer />
    </div>
  );
}
