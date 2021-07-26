import React from "react";
import AboutSection from "../components/AboutSection";
import CoffeeShop from "../components/CoffeeShop";
import Shop from "../components/Shop";
import CoffeeOftheDay from "../components/CoffeeOftheDay";

const Home = () => {
  return (
    <div>
      <AboutSection />
      <CoffeeShop />
      <CoffeeOftheDay />
      <Shop />
    </div>
  );
};
export default Home;
