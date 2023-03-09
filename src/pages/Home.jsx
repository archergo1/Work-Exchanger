import React from "react";


// import Container from "../Container";

import Header from "../components/Header";
import BannerArea from "../components/BannerArea";
import OurSelect from "../components/OurSelect";
import Latest from "../components/Latest";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full">
       <div className="container mx-auto max-w-screen-2xl">
          <Header></Header>
          <BannerArea></BannerArea>
          <OurSelect></OurSelect>
          <Latest></Latest>
          <Footer></Footer>
        </div>
    </div>
  );
};

export default Home;
