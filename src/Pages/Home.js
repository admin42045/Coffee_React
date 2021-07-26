import React from "react";
import AboutSection from "../components/AboutSection";
import CoffeeShop from "../components/CoffeeShop";
import Shop from "../components/Shop";
import CoffeeOftheDay from "../components/CoffeeOftheDay";
import Contacts from "../components/Contacts";

const Home = () => {
  return (
    <div>
      <AboutSection />
      <CoffeeShop />
      <CoffeeOftheDay />
      <Shop />
      <Contacts />
    </div>
  );
};
export default Home;
