import React from "react";
import ProductCategories from "./Components/ProductCategories";
import "./Products.css";
import Pr2 from "./Components/Pr2";
import Footer from "./Footer";
import Pr3 from "./Components/Pr3";

const Products = () => {
  return (
    <>
      {/* <h1>welcome to Product webpage</h1> */}
      <br />
      <ProductCategories />
      <br />
      <Pr2 />
      <br />
      <Pr3/>
      <Footer />
    </>
  );
};
export default Products;
