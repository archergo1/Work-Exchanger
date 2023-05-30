import BannerArea from "../components/BannerArea";
import OurSelect from "../components/OurSelect";
import OurLatest from "../components/OurLatest";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-2xl bg-myFifthColor">
      <div className="py-10">
        <p className="mx-auto max-w-screen-xl rounded-lg bg-white px-8 py-4 text-3xl font-semibold text-myFirstColor leading-loose">
          對生活、工作開始厭倦了嗎？
          <br />
          或許你可以給自己個機會，來趟打工換宿......
          <br />
          立刻看看過來人的心得分享，挑選喜歡的換宿吧！
        </p>
      </div>
      <BannerArea />
      <OurSelect />
      <OurLatest />
    </div>
  );
}
