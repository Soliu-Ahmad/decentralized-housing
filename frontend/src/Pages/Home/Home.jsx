import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Faqs from "../../components/Faqs/Faqs";
import Hero from "../../components/Hero/Hero";
import Content from "../../components/Content/Content";
import Marketplace from "../../components/Marketplace/Marketplace";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      {/* <div>
        <Marketplace />
      </div> */}
      <div>
        <Content />
      </div>
      <div>
        <Faqs />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
