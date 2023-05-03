import Header from "../components/Header";
import Footer from "../components/Footer";
import LastPage from "../components/LastPage";

export default function Contact() {
  return (
    <div className="mx-auto max-w-screen-2xl bg-myFifthColor">
      <Header />
      <LastPage />
      <div className="flex justify-around py-4 px-6">
        <div className="w-full rounded bg-white px-8 py-6 shadow-lg">
          <p className="my-2">作者Email: econarcher2010@gmail.com</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
