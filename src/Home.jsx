import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Carousels from "./Components/Carousel";
import LatestProducts from "./Components/LatestProducts";
import Service from "./Components/Service";
// import Featureproduct from "./Featureproduct";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <Carousels/>
      <LatestProducts/>
      <Service />
      {/* <Featureproduct/> */}
      <Footer/>
    </>
  );
};
export default Home;
