# Work Exchanger

此專案源於作者本身兩次打工換宿經驗，在找尋換宿資訊時，常常要在不同平台，如臉書、Dcard 等，來回整理資訊。有感於這樣的方式要花上許多時間和精力，因此便想以架設網站平台的方式，整合資訊。期望未來有越來越多人使用，將可以造福更多想換宿的小幫手們。

## Logo 設計理念

鼓勵有換宿經驗的前人分享心得，讓未來想換宿的朋友們可以更瞭解想選擇的店家

<img
  style="height: 240px;"
  src="./public/static/images/logo.png">

## 功能介紹

- 會員註冊登入
- 會員發表評論
- 訪客瀏覽評論資訊
- 換宿商家搜尋

## 測試

測試帳號密碼

```bash
帳號： user123@gmail.com
密碼： user123
```

- [DEMO](https://work-exchange.vercel.app/)

## 實際畫面

| ![demo1](/public/static/images/demo/demo1.png) | ![demo2](/public/static/images/demo/demo2.png) | ![demo3](/public/static/images/demo/demo3.png) |
| :--------------------------------------------: | :--------------------------------------------: | :--------------------------------------------: |
|                      首頁                      |                    會員登入                    |                    撰寫評論                    |

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本建議為：`16.15.0` 以上

### 取得專案

```bash
git clone https://github.com/archergo1/Work-Exchanger.git
```

### 移動到專案內

```bash
cd Work-Exchanger
```

### 安裝套件

```bash
npm install
```

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
│           ├── chat.png
│           ├── demo
│           │   ├── demo1.png
│           │   ├── demo2.png
│           │   └── demo3.png
│           ├── facebook.png
│           ├── instagram.png
│           ├── logo.png
│           ├── logo.svg
│           ├── spring.jpg
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
│           ├── thumbup.png
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
│   │   ├── Footer.jsx
│   │   ├── HashTags.jsx
│   │   ├── Header.jsx
│   │   ├── LastPage.jsx
│   │   ├── MySetting.jsx
│   │   ├── OurLatest.jsx
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

## 開發工具

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

## 聯絡作者

你可以透過以下方式與我聯絡

- econarcher2010@gmail.com
- [LinkedIn](https://www.linkedin.com/in/archerkeepgoing12/)
