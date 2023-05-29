export default function About() {
  return (
    <div className="mx-auto max-w-screen-2xl bg-myFifthColor">
      <div className="flex justify-around py-10 px-14">
        <div className="w-full rounded bg-white px-8 py-6 shadow-lg">
          <h2 className="my-4 text-2xl font-bold">專案源起</h2>
          <p className="my-2 text-lg">
            此專案源於作者本身兩次打工換宿經驗，在找尋換宿資訊時，常常要在不同平台，如臉書、Dcard等，來回整理資訊。有感於這樣的方式要花上許多時間和精力，因此便想以架設網站平台的方式，整合資訊。期望未來有越來越多人使用，將可以造福更多想換宿的小幫手們。
          </p>
          <hr />
          <div>
            <h2 className="my-4 text-2xl font-bold">Logo 設計理念</h2>
            <p className="my-2 text-lg">
              以對話框形式呈現交流的樣子，鼓勵有換宿經驗的前人分享心得，讓未來想換宿的朋友們可以更瞭解想選擇的店家。
            </p>
            <img className="h-60" src="/static/images/logo.png" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
