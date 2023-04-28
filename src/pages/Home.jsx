import Header from "../components/Header";
import BannerArea from "../components/BannerArea";
import OurSelect from "../components/OurSelect";
import OurLatest from "../components/OurLatest";
import Footer from "../components/Footer";

import UploadImg from "../components/UploadImg";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-2xl bg-myFifthColor">
      <Header/>
      <BannerArea/>
      <OurSelect/>
      <OurLatest/>
      <Footer/>
      {/* <UploadImg/> */}
    </div>
  );
}
