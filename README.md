# Work Exchange

此專案源於作者本身兩次打工換宿經驗，在尋找換宿資訊時，常常要在不同平台間來回整理資訊。有感於這樣搜尋的方式要花上許多時間和精力，因此便想以架設網站平台的方式，整合資訊。期望有越來越多人使用，將可以造福更多想換宿的小幫手們。



## Logo 設計理念 

鼓勵有換宿經驗的前人分享心得，讓未來想換宿的朋友可以更瞭解想選擇的店家

<img
  style="height: 240px;"
  src="./public/static/images/logo.png">



## 測試

測試帳號密碼

```bash
帳號： user123@gmail.com
密碼： user123
```
- [DEMO](https://work-exchange.vercel.app/)

## 實際畫面

![範例圖片 1](https://fakeimg.pl/500/)
![範例圖片 2](https://fakeimg.pl/500/)
![範例圖片 3](https://fakeimg.pl/500/)

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本建議為：`16.15.0` 以上...

### 取得專案

```bash
git clone https://github.com/archergo1/Work-Exchange.git
```

### 移動到專案內

```bash
cd Work-Exchange
```

### 安裝套件

```bash
npm install
```

### 環境變數設定

請在終端機輸入 `cp .env.example .env` 來複製 .env.example 檔案，並依據 `.env` 內容調整相關欄位。

### 運行專案

```bash
npm run dev
```

### 開啟專案

在瀏覽器網址列輸入以下即可看到畫面

```bash
http://localhost:5173/
```

## 資料夾結構

```
Work Exchange/
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── static
│       └── images
│           ├── 404.jpg
│           ├── demo
│           │   ├── demo1.png
│           │   ├── demo2.png
│           │   └── demo3.png
│           ├── facebook.png
│           ├── instagram.png
│           ├── logo.png
│           ├── logo.svg
│           ├── spring.jpg
│           ├── star.png
│           ├── storeImage
│           │   ├── beachcastle.jpg
│           │   ├── beishan.png
│           │   ├── bigfish.jpg
│           │   ├── catbooks.jpg
│           │   ├── hostel.png
│           │   ├── lake.jpg
│           │   ├── mermaid.jpg
│           │   ├── oceandiary.jpg
│           │   ├── song.jpg
│           │   ├── summer.jpg
│           │   ├── sunshine.jpg
│           │   └── tornado.jpg
│           ├── userMug
│           │   ├── archer.jpg
│           │   ├── defaultMug.png
│           │   ├── gege.jpg
│           │   ├── green.jpg
│           │   ├── mei.jpg
│           │   ├── rou.jpg
│           │   ├── wayne.jpg
│           │   └── welly.jpg
│           ├── whiteStar.png
│           └── youtube.png
├── src
│   ├── App.jsx
│   ├── components
│   │   ├── BannerArea.jsx
│   │   ├── Button.jsx
│   │   ├── Button1.jsx
│   │   ├── Comments.jsx
│   │   ├── Footer.jsx
│   │   ├── HashTags.jsx
│   │   ├── Header.jsx
│   │   ├── LastPage.jsx
│   │   ├── MySetting.jsx
│   │   ├── OurLatest.jsx
│   │   ├── OurLatestCard.jsx
│   │   ├── OurSelect.jsx
│   │   ├── Post.jsx
│   │   ├── Rating.jsx
│   │   └── contexts
│   │       └── apiUrl.js
│   ├── index.css
│   ├── main.jsx
│   ├── pages
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── FAQ.jsx
│   │   ├── Home.jsx
│   │   ├── LogIn.jsx
│   │   ├── Member.jsx
│   │   ├── PageNotFound.jsx
│   │   ├── SearchResults.jsx
│   │   ├── SignUp.jsx
│   │   ├── StoreBriefAndPosts.jsx
│   │   └── WritePost.jsx
│   └── tailwind.css
├── tailwind.config.cjs
└── vite.config.js
```

## 專案技術

- Node.js v16.15.0
- React.js v18.2.0
- React Router v6.9.0
- React Hook Form v7.43.7
- Vite v4.1.0
- Axios v1.3.4
- Tailwind CSS v3.2.7
- SweetAlert2 v11.7.3
- Flowbite v1.6.4

## 聯絡作者

你可以透過以下方式與我聯絡

- econarcher2010@gmail.com
- [LinkedIn](https://www.linkedin.com/in/archerkeepgoing12/)
