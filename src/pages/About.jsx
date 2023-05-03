import Header from "../components/Header";
import Footer from "../components/Footer";
import LastPage from "../components/LastPage";

export default function About() {
  return (
    <div className="mx-auto max-w-screen-2xl bg-myFifthColor">
      <Header />
      <LastPage />
      <div className="flex justify-around py-4 px-6">
        <div className="w-full rounded bg-white px-8 py-6 shadow-lg">
          <p className="my-2 text-lg">作者本身有過兩次打工換宿經驗，在尋找換宿資訊時，常常要在不同平台間來回整理資訊。有感於這樣搜尋的方式要花上許多時間和精力，因此便想以架設網站平台的方式，整合資訊。如果有越來越多人使用，將可以造福更多想換宿的小幫手們。</p>
         
        </div>
      </div>
      <Footer />
    </div>
  );
}