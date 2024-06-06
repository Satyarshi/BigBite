import React from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Restaurants from "./components/Restaurants";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Restaurants />
      <Footer />
    </>
  );
};

export default App;
