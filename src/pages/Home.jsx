import React from "react";
import ShopByCategories from "../components/homepage/ShopByCategories";
import Deals from "../components/homepage/Deals";
import FromBlog from "../components/homepage/FromBlog";
import MainScreen from "../components/homepage/MainScreen";
import Features from "../components/homepage/Features";
import Brands from "../components/homepage/Brands";

const Home = () => {
  return (
    <>
      <MainScreen />
      <ShopByCategories />
      <Features />
      <Deals />
      {/* <FromBlog /> */}
      {/* <Brands /> */}
    </>
  );
};

export default Home;
