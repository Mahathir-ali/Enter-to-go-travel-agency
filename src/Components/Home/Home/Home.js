import React from "react";
import Gallery from "../../Gallery/Gallery";
import Plans from "../../Plans/Plans";
import Reviews from "../../Reviews/Reviews";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Plans></Plans>
      <Gallery></Gallery>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
