import BannerArea from "../components/BannerArea";
import OurSelect from "../components/OurSelect";
import OurLatest from "../components/OurLatest";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-2xl bg-myFifthColor">
      <BannerArea />
      <OurSelect />
      <OurLatest />
    </div>
  );
}
