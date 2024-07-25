"use client";
import React from "react";
import Banner from "./components/Banner";
import AboutAuthor from "./components/AboutAuthor";
import MoreBooks from "./components/MoreBooks";
import GetCopy from "./components/GetCopy";
import MostPopular from "./components/MostPopular";
import Review from "./components/Review";
import NewsLetter from "./components/NewsLetter";

const HomePage = () => {
  return (
    <section className="w-full">
      <Banner />
      <AboutAuthor />
      <MoreBooks />
      <GetCopy />
      <MostPopular />
      <Review />
      {/* <NewsLetter/> */}
    </section>
  );
};

export default HomePage;
